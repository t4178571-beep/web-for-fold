import React, { useState, useEffect } from 'react'
import { Search, Minimize2, X, Folder, LayoutGrid, Star, Settings as SettingsIcon, FileText, ImageIcon, Video as VideoIcon, Music, Eye, Monitor, Shield, Trash2, Cpu, FileCode, Play, ExternalLink, RefreshCcw, ChevronRight, MousePointer2, Copy } from 'lucide-react'

const SearchAnimation = () => {
  const [searchText, setSearchText] = useState('')
  const [showResults, setShowResults] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All')
  const [showPreview, setShowPreview] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [isDragging, setIsDragging] = useState(false)

  const filters = [
    { name: 'All', color: '#64748b' },
    { name: 'Apps', color: '#a78bfa' },
    { name: 'Settings', color: '#94a3b8' },
    { name: 'Images', color: '#4ade80' },
    { name: 'Video', color: '#60a5fa' },
    { name: 'Audio', color: '#fb923c' },
    { name: 'PDF', color: '#f87171' },
    { name: 'Documents', color: '#fbbf24' },
    { name: 'Recycle Bin', color: '#64748b' }
  ]

  const abcData = {
    'All': [
      { name: 'abc_project_folder', path: 'C:\\Users\\Foldercop\\OneDrive\\Documents', type: 'folder', subItems: [
          { name: 'abc_core_files', path: 'C:\\..\\Documents\\abc_core', type: 'folder' },
          { name: 'abc_report.pdf', path: 'C:\\..\\Documents\\abc_report.pdf', type: 'pdf' },
      ]},
      { name: 'abc_config_data', path: 'C:\\Windows\\System32', type: 'folder' },
      { name: 'abc_background.png', path: 'C:\\Users\\Foldercop\\Pictures', type: 'image' },
    ],
    'Apps': Array(10).fill().map((_, i) => ({ name: `abc_tool_v${i+1}`, path: `C:\\Program Files\\abc_tool_${i+1}`, type: 'app', size: '1.2 GB' })),
    'Settings': Array(10).fill().map((_, i) => ({ name: `abc_system_config_${i+1}`, path: `System > Preferences > ${i+1}`, type: 'setting', size: 'N/A' })),
    'Images': Array(12).fill().map((_, i) => ({ name: i === 0 ? 'abc_image.jpg' : `abc_gallery_${i+1}.webp`, path: `C:\\Users\\HP\\Downloads\\abc_img_${i+1}.png`, type: 'image', size: '43.22 KB' })),
    'Video': Array(10).fill().map((_, i) => ({ name: `abc_media_clip_${i+1}.mp4`, path: `C:\\Users\\App\\Videos\\abc_vid_${i+1}.mp4`, type: 'video', size: '45.2 MB' })),
    'Audio': Array(10).fill().map((_, i) => ({ name: `abc_sound_track_${i+1}.mp3`, path: `C:\\Users\\App\\Music\\abc_audio_${i+1}.mp3`, type: 'audio', size: '12.8 MB' })),
    'PDF': Array(10).fill().map((_, i) => ({ name: `abc_document_file_${i+1}.pdf`, path: `C:\\Users\\App\\Docs\\abc_doc_${i+1}.pdf`, type: 'pdf', size: '1.4 MB' })),
    'Documents': Array(10).fill().map((_, i) => ({ name: `abc_finance_table_${i+1}.xlsx`, path: `C:\\Users\\App\\Docs\\abc_sheet_${i+1}.xlsx`, type: 'doc', size: '18 KB' })),
    'Recycle Bin': Array(10).fill().map((_, i) => ({ name: `abc_deleted_item_${i+1}.png`, path: `C:\\$Recycle.Bin\\abc_trash_${i+1}.png`, type: 'deleted', size: '2.5 MB' }))
  }

  const getResults = () => abcData[activeFilter] || []
  const getIcon = (type) => {
    switch (type) {
        case 'folder': return <Folder size={15} fill="currentColor" fillOpacity={0.2} className="text-amber-500" />;
        case 'app': return <Monitor size={15} className="text-violet-500" />;
        case 'setting': return <SettingsIcon size={15} className="text-slate-500" />;
        case 'image': return <ImageIcon size={16} className="text-emerald-500 font-extrabold" />;
        case 'video': return <VideoIcon size={15} className="text-blue-500" />;
        case 'audio': return <Music size={15} className="text-orange-500" />;
        case 'pdf': return <FileText size={15} className="text-red-500" />;
        case 'doc': return <FileCode size={15} className="text-amber-600" />;
        case 'deleted': return <Trash2 size={15} className="text-slate-400" />;
        default: return <Search size={15} className="text-matte-cyan-500" />;
    }
  }

  useEffect(() => {
    let timeoutId;
    const animateCycle = async () => {
      // 1. RESET
      setSearchText(''); setShowResults(false); setActiveFilter('All'); setShowPreview(false); setSelectedIndex(-1); setIsDragging(false);
      await new Promise(r => setTimeout(r, 1500))
      
      // 2. SEARCH "abc"
      const query = 'abc'
      for (let i = 1; i <= query.length; i++) {
        setSearchText(query.slice(0, i))
        await new Promise(r => setTimeout(r, 200))
      }
      setShowResults(true); await new Promise(r => setTimeout(r, 800))
      
      // 3. FULL CATEGORY SEQUENCE
      const sequence = ['All', 'Apps', 'Settings', 'Images', 'Video', 'Audio', 'PDF', 'Documents', 'Recycle Bin']
      for (const cat of sequence) {
          setActiveFilter(cat)
          setSelectedIndex(0)
          setShowPreview(true)
          await new Promise(r => setTimeout(r, 2500)) // SLOOOOW AND CLEAR
      }

      // 4. RETURN TO IMAGES FOR DRAG FINALE
      setActiveFilter('Images')
      setSelectedIndex(0)
      await new Promise(r => setTimeout(r, 1500))
      setIsDragging(true)
      await new Promise(r => setTimeout(r, 3500))
      
      // 5. END CIRCLE & RESTART
      setIsDragging(false)
      await new Promise(r => setTimeout(r, 1500))
      animateCycle()
    }
    animateCycle()
    return () => clearTimeout(timeoutId)
  }, [])

  const selectedItem = getResults()[selectedIndex]

  return (
    <div className="w-full max-w-6xl mx-auto matte-card p-0 overflow-hidden shadow-2xl border-none bg-white dark:bg-[#0c0c0c] flex flex-col h-[650px] relative transition-all duration-700">
      {/* WINDOW HEADER */}
      <div className="flex items-center justify-between px-6 py-4 bg-white dark:bg-[#0c0c0c]">
        <div className="flex items-center gap-4 flex-1">
          <div className="opacity-30"><Search size={22} className="text-matte-slate-900 dark:text-white" /></div>
          <div className="bg-white dark:bg-matte-slate-950 border border-matte-slate-100 dark:border-matte-slate-900 rounded-xl py-2 px-10 text-sm text-matte-slate-900 dark:text-white w-full max-w-xl shadow-inner relative">
             <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-matte-slate-300" />
             {searchText}<span className="animate-pulse text-matte-cyan-500 font-light ml-0.5">|</span>
          </div>
        </div>
        <div className="flex gap-4 opacity-30 text-matte-slate-900 dark:text-white"><Minimize2 size={18} /><X size={18} /></div>
      </div>

      {/* COMPACT FILTERS */}
      <div className="flex items-center gap-1.5 px-6 py-2.5 border-b border-matte-slate-50 dark:border-matte-slate-950 bg-white dark:bg-[#0c0c0c]">
        {filters.map((f) => (
          <button key={f.name} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[9.5px] font-bold tracking-tight transition-all duration-500 ${activeFilter === f.name ? 'bg-matte-cyan-50 dark:bg-matte-cyan-900/10 border-matte-cyan-200 text-matte-cyan-600 shadow-sm font-black' : 'bg-matte-slate-50 dark:bg-matte-slate-900 border-matte-slate-100/50 text-matte-slate-400 opacity-50'}`}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: f.color }}></div>{f.name}
          </button>
        ))}
      </div>

      <div className="flex flex-1 overflow-hidden relative">
        {/* DRAG EFFECT GHOST */}
        {isDragging && selectedItem && (
          <div className="absolute inset-0 z-50 pointer-events-none overflow-hidden">
             <div className="absolute top-[35%] left-[20%] animate-in fade-in duration-500" style={{ animation: 'drag-flow-final-v2 3.5s infinite ease-out' }}>
                <div className="bg-white dark:bg-matte-slate-900 border border-matte-cyan-500/30 p-5 rounded-[28px] shadow-2xl flex flex-col items-center gap-3 w-[200px] transform-gpu perspective-[1000px] rotate-X-[15deg] rotateY-[15deg]">
                   {getIcon(selectedItem.type)}<h4 className="text-[10px] font-black uppercase tracking-widest leading-none">Dragging Object...</h4>
                   <MousePointer2 size={24} className="text-matte-cyan-500 absolute -bottom-5 -right-5 fill-matte-cyan-500 drop-shadow-2xl" />
                </div>
             </div>
             <style>{`@keyframes drag-flow-final-v2 { 0% { transform: scale(1); opacity:0; } 10% { transform: scale(1.1); opacity:1; } 60% { transform: translate(350px, -110px) rotate(10deg); opacity:0.9; } 100% { transform: translate(500px, -180px); opacity:0; } }`}</style>
          </div>
        )}

        {/* SIDE BAR BUTTONS */}
        <div className="w-12 border-r border-matte-slate-50 dark:border-matte-slate-950 flex flex-col items-center py-8 gap-10 opacity-20 bg-white dark:bg-[#0c0c0c]">
          <Search size={22} /><Star size={22} /><div className="flex-1"></div><SettingsIcon size={22} />
        </div>

        {/* LIST PANEL (NO SCROLLBAR) */}
        <div className={`flex flex-col bg-[#fdfdfd] dark:bg-[#0c0c0c] transition-all duration-700 ${showPreview ? 'w-[280px]' : 'flex-1'} scrollbar-hide`}>
          <div className="px-5 py-3 flex justify-between items-center opacity-40 border-b border-matte-slate-50 dark:border-matte-slate-950">
             <span className="text-[9px] font-black uppercase tracking-widest">RESULTS</span>
             <span className="text-[9px] font-black font-mono">8,077</span>
          </div>
          <div className="flex-1 overflow-y-auto p-1.5 scrollbar-hide no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
             {showResults && getResults().map((r, i) => (
               <div key={i} className={`flex items-start gap-3 p-3.5 rounded-xl transition-all duration-300 ${selectedIndex === i ? 'bg-white shadow-xl border border-matte-slate-50 dark:bg-white/5 dark:border-white/5 opacity-100' : 'opacity-40'}`}>
                  <div className="shrink-0 pt-0.5">{getIcon(r.type)}</div>
                  <div className="flex-1 min-w-0">
                     <h4 className={`text-[12.5px] font-extrabold text-matte-slate-900 dark:text-slate-100 leading-none truncate ${selectedIndex === i ? 'text-matte-cyan-500' : ''}`}>{r.name}</h4>
                     <p className="text-[8.5px] text-matte-slate-400 truncate mt-1.5 leading-none opacity-60 tracking-tight">{r.path}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>

        {/* PREVIEW PANEL */}
        <div className={`transition-all duration-700 bg-white dark:bg-[#0c0c0c] flex flex-col ${showPreview ? 'flex-1' : 'w-0'} overflow-hidden`}>
           {showPreview && selectedItem && (
             <div className="flex-1 flex flex-col animate-in fade-in duration-500 relative py-10 px-12">
                <X size={15} className="absolute top-4 right-4 text-matte-slate-200 cursor-pointer" />
                
                {/* CENTERED PREVIEW (CLEAN & SMALL) */}
                <div className="flex-1 flex flex-col items-center justify-center gap-10">
                    {selectedItem.type === 'folder' ? (
                       <div className="w-full max-w-[340px] flex flex-col gap-4 animate-in fade-in duration-700">
                          <div className="flex items-center gap-2 mb-4 px-2 opacity-30 text-[9px] font-black uppercase tracking-widest border-b pb-2">📂 Location Deep Search</div>
                          <div className="space-y-3">
                             {selectedItem.subItems?.map((si) => (
                                <div key={si.name} className="flex items-center gap-4 bg-matte-slate-50 dark:bg-white/5 p-3 rounded-2xl border border-matte-slate-100/30">
                                   {getIcon(si.type)}<span className="text-[11px] font-bold dark:text-slate-200 truncate">{si.name}</span>
                                </div>
                             ))}
                          </div>
                          <button className="bg-matte-cyan-500 text-white w-full py-4 rounded-2xl font-black uppercase tracking-widest text-[9.5px] mt-6 shadow-xl shadow-cyan-500/20">Open Folder</button>
                       </div>
                    ) : selectedItem.type === 'image' ? (
                       <div className="w-full flex flex-col items-center animate-in zoom-in-95 duration-1000">
                          <div className="w-full max-w-[440px] aspect-video bg-white dark:bg-matte-slate-900 rounded-xl overflow-hidden shadow-2xl border border-matte-slate-100 dark:border-white/5 p-1.5 relative group">
                             <div className="w-full h-full bg-matte-slate-50 dark:bg-matte-slate-950 rounded-lg flex items-center justify-center relative overflow-hidden group-hover:scale-105 duration-1000">
                                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 to-teal-500/5 pointer-events-none"></div>
                                <ImageIcon size={64} strokeWidth={1} className="text-matte-cyan-500/20" />
                             </div>
                          </div>
                          <h3 className="text-[18px] font-black text-matte-slate-900 dark:text-white mt-10 tracking-tighter uppercase decoration-matte-cyan-500/30 underline underline-offset-8 decoration-2 italic">{selectedItem.name}</h3>
                          <button className="bg-matte-cyan-500 text-white px-12 py-3.5 rounded-2xl font-black text-xs mt-10 shadow-2xl shadow-cyan-500/30 tracking-widest uppercase">Open File</button>
                       </div>
                    ) : (
                       <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-white dark:bg-matte-slate-900 rounded-3xl flex items-center justify-center text-matte-cyan-500 shadow-2xl border border-matte-slate-100 mb-8 relative">
                             {React.cloneElement(getIcon(selectedItem.type), { size: 36 })}
                          </div>
                          <h4 className="text-[16px] font-black text-matte-slate-900 dark:text-white mb-8 tracking-tighter text-center uppercase">{selectedItem.name}</h4>
                          <button className="bg-matte-cyan-500 text-white px-10 py-3 rounded-2xl font-black text-[9.5px] uppercase tracking-widest shadow-xl">Process File</button>
                       </div>
                    )}
                </div>

                {/* SLIM INSET META BOX (BOTTOM) */}
                <div className="mt-8 mx-auto w-full max-w-[320px] p-4 bg-[#f8f9fa] dark:bg-matte-slate-900/50 rounded-2xl border border-matte-slate-100 dark:border-white/10 animate-in slide-in-from-bottom duration-1000">
                   <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between gap-4 border-b border-matte-slate-100 dark:border-matte-slate-800 pb-2">
                         <div className="flex items-center gap-1.5 truncate">
                            <span className="text-[9px] font-black text-matte-slate-400">PATH:</span>
                            <span className="text-[10px] font-extrabold text-matte-slate-300 truncate tracking-tight">{selectedItem.path}</span>
                         </div>
                         <button className="bg-white dark:bg-matte-slate-850 px-2.5 py-1 rounded-md border border-matte-slate-100 text-[8.5px] font-black uppercase tracking-widest text-matte-slate-500 hover:bg-matte-cyan-500 hover:text-white transition-all shadow-sm">Copy</button>
                      </div>
                      <div className="flex justify-between items-center text-[10px] font-black text-matte-slate-400 opacity-80 uppercase tracking-tighter">
                         <div className="flex gap-2"><span>SIZE:</span><span className="text-matte-slate-300 font-mono font-bold">{selectedItem.size || '43.22 KB'}</span></div>
                         <div className="flex gap-2"><span>MODIFIED:</span><span className="text-matte-slate-300 font-bold">28/03/2026</span></div>
                      </div>
                   </div>
                </div>
             </div>
           )}
        </div>
      </div>
      
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  )
}

export default SearchAnimation
