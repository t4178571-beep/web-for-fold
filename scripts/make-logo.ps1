Add-Type -AssemblyName System.Drawing

$icoPath = Join-Path $PSScriptRoot "..\assets\logo.ico"
$publicDir = Join-Path $PSScriptRoot "..\public"

if (-not (Test-Path $publicDir)) {
    New-Item -ItemType Directory -Path $publicDir | Out-Null
}

# Load all frames from the ico and pick the biggest
$stream = [System.IO.File]::OpenRead($icoPath)
$icon = New-Object System.Drawing.Icon($stream)
$stream.Close()

# Extract bitmap from icon at its native max size using ExtractAssociatedIcon-style trick
$bitmap = $icon.ToBitmap()
$icon.Dispose()

# Find best frame by parsing ICO header manually to get the largest image data
$bytes = [System.IO.File]::ReadAllBytes($icoPath)
$count = [BitConverter]::ToUInt16($bytes, 4)
$bestSize = 0
$bestOffset = 0
$bestLen = 0
for ($i = 0; $i -lt $count; $i++) {
    $entry = 6 + $i * 16
    $w = $bytes[$entry]; if ($w -eq 0) { $w = 256 }
    $h = $bytes[$entry + 1]; if ($h -eq 0) { $h = 256 }
    $size = $w * $h
    $len = [BitConverter]::ToUInt32($bytes, $entry + 8)
    $off = [BitConverter]::ToUInt32($bytes, $entry + 12)
    if ($size -gt $bestSize) {
        $bestSize = $size
        $bestOffset = $off
        $bestLen = $len
    }
}

$frameBytes = New-Object byte[] $bestLen
[Array]::Copy($bytes, $bestOffset, $frameBytes, 0, $bestLen)

# If PNG-encoded frame (starts with 0x89 0x50 0x4E 0x47) save directly
if ($frameBytes[0] -eq 0x89 -and $frameBytes[1] -eq 0x50 -and $frameBytes[2] -eq 0x4E -and $frameBytes[3] -eq 0x47) {
    [System.IO.File]::WriteAllBytes((Join-Path $publicDir "logo-raw.png"), $frameBytes)
    $source = [System.Drawing.Image]::FromFile((Join-Path $publicDir "logo-raw.png"))
} else {
    $source = $bitmap
}

Write-Host "Source size: $($source.Width)x$($source.Height)"

function Save-Resized($img, $size, $path) {
    $b = New-Object System.Drawing.Bitmap $size, $size
    $g = [System.Drawing.Graphics]::FromImage($b)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)
    $g.DrawImage($img, 0, 0, $size, $size)
    $g.Dispose()
    $b.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
    $b.Dispose()
    Write-Host "Saved $path ($size x $size)"
}

Save-Resized $source 512 (Join-Path $publicDir "logo.png")
Save-Resized $source 192 (Join-Path $publicDir "logo-192.png")
Save-Resized $source 512 (Join-Path $publicDir "logo-512.png")
Save-Resized $source 180 (Join-Path $publicDir "apple-touch-icon.png")
Save-Resized $source 32  (Join-Path $publicDir "favicon-32.png")
Save-Resized $source 16  (Join-Path $publicDir "favicon-16.png")

$source.Dispose()
$bitmap.Dispose()

# Copy ico as favicon too
Copy-Item $icoPath (Join-Path $publicDir "favicon.ico") -Force
Write-Host "Copied favicon.ico"

Remove-Item (Join-Path $publicDir "logo-raw.png") -ErrorAction SilentlyContinue
Write-Host "Done."
