import { useRef, useState, useEffect, useCallback } from 'react'
import { Play, Pause, Maximize2, X } from 'lucide-react'

const VideoPlayer = ({ src, className = '' }) => {
  const videoRef = useRef(null)
  const fullscreenVideoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const hideTimer = useRef(null)

  /* ── sync fullscreen video time with inline video ── */
  useEffect(() => {
    if (isFullscreen && fullscreenVideoRef.current && videoRef.current) {
      fullscreenVideoRef.current.currentTime = videoRef.current.currentTime
      if (isPlaying) fullscreenVideoRef.current.play()
      // if not playing, leave it paused
    }
  }, [isFullscreen])

  /* ── keep body scroll locked when fullscreen open ── */
  useEffect(() => {
    document.body.style.overflow = isFullscreen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isFullscreen])

  /* ── close fullscreen on Escape key ── */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setIsFullscreen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const togglePlay = useCallback((ref) => {
    if (!ref.current) return
    if (ref.current.paused) {
      ref.current.play()
      setIsPlaying(true)
    } else {
      ref.current.pause()
      setIsPlaying(false)
    }
  }, [])

  const handleMouseMove = () => {
    setShowControls(true)
    clearTimeout(hideTimer.current)
    hideTimer.current = setTimeout(() => setShowControls(false), 2000)
  }

  const openFullscreen = (e) => {
    e.stopPropagation()
    setIsFullscreen(true)
  }

  const closeFullscreen = () => {
    /* sync time back to inline video */
    if (videoRef.current && fullscreenVideoRef.current) {
      videoRef.current.currentTime = fullscreenVideoRef.current.currentTime
      if (isPlaying) videoRef.current.play()
      else videoRef.current.pause()
    }
    setIsFullscreen(false)
  }

  return (
    <>
      {/* ── INLINE VIDEO CARD ── */}
      <div
        className={`relative group rounded-2xl overflow-hidden shadow-2xl border border-matte-slate-100 dark:border-matte-slate-800 bg-black cursor-pointer ${className}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setShowControls(false)}
        onTouchStart={() => {
          setShowControls(true)
          clearTimeout(hideTimer.current)
          hideTimer.current = setTimeout(() => setShowControls(false), 2500)
        }}
        onClick={() => togglePlay(videoRef)}
      >
        <video
          ref={videoRef}
          src={src}
          loop
          muted
          playsInline
          className="w-full h-auto object-cover block"
        />

        {/* overlay controls — visible on hover/touch */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            showControls ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* dark gradient overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* play / pause button */}
          <button
            onClick={(e) => { e.stopPropagation(); togglePlay(videoRef) }}
            className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 active:scale-95 transition-all duration-200 shadow-xl"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying
              ? <Pause size={20} fill="white" />
              : <Play size={20} fill="white" className="ml-0.5" />
            }
          </button>

          {/* fullscreen button — bottom right */}
          <button
            onClick={openFullscreen}
            className="absolute bottom-3 right-3 z-10 w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 active:scale-95 transition-all duration-200"
            aria-label="Fullscreen"
          >
            <Maximize2 size={14} />
          </button>
        </div>
      </div>

      {/* ── FULLSCREEN MODAL ── */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8 md:p-16"
          onClick={closeFullscreen}
        >
          {/* blurred backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />

          {/* video container */}
          <div
            className="relative z-10 w-full max-w-5xl rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={fullscreenVideoRef}
              src={src}
              loop
              muted
              playsInline
              className="w-full h-auto block"
              onClick={() => togglePlay(fullscreenVideoRef)}
            />

            {/* fullscreen controls bar */}
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-3 bg-gradient-to-t from-black/70 to-transparent">
              <button
                onClick={() => togglePlay(fullscreenVideoRef)}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 active:scale-95 transition-all"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying
                  ? <Pause size={16} fill="white" />
                  : <Play size={16} fill="white" className="ml-0.5" />
                }
              </button>
              <span className="text-white/60 text-xs font-medium tracking-wide select-none">
                Press Esc or tap outside to close
              </span>
            </div>

            {/* close button — top right */}
            <button
              onClick={closeFullscreen}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 active:scale-95 transition-all"
              aria-label="Close fullscreen"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default VideoPlayer
