{/* Health Articles */ }
<section className="px-5 pt-6">
    <div className="flex items-start justify-between mb-4">
        <div>
            <h2
                className="text-[22px] font-extrabold text-[#102a43] tracking-tight"
                style={{ fontFamily: 'Fraunces, serif' }}
            >
                Health articles
            </h2>
            <p className="text-[13px] text-[#627d98] mt-0.5">Get up-to-date on our latest health updates</p>
        </div>
        <button className="bg-[#e8eef8] text-[#0b5cab] font-bold text-[13.5px] px-4 py-2 rounded-full shrink-0">
            View all
        </button>
    </div>

    <div className="flex gap-4 overflow-x-auto -mx-5 px-5 pb-4 scrollbar-hide snap-x snap-mandatory">
        {articles.map((a, i) => (
            <div key={i} className="flex-none w-[88%] snap-start">
                {/* Cover image area */}
                <div
                    className="w-full h-[220px] rounded-[20px] relative overflow-hidden"
                    style={{ background: a.coverBg }}
                >
                    <span className="absolute top-3.5 left-3.5 bg-[#3a9e5f] text-white text-[13px] font-bold px-3 py-1.5 rounded-xl">
                        {a.date}
                    </span>
                    <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-[22px] font-extrabold text-[#102a43] leading-tight whitespace-pre-line"
                            style={{ fontFamily: 'Fraunces, serif' }}>
                            {a.coverTitle}
                        </p>
                    </div>
                </div>

                {/* White card overlapping cover */}
                <div className="bg-white rounded-[20px] shadow-md mx-2 -mt-5 relative z-10 px-4 pt-4 pb-5">
                    <span className="inline-block bg-[#e8f5ee] text-[#3a9e5f] text-[12px] font-semibold px-3 py-1 rounded-full mb-3">
                        {a.tag} · {a.date}
                    </span>
                    <div className="flex items-end justify-between gap-3">
                        <p className="text-[15px] font-bold text-[#102a43] leading-snug flex-1">{a.title}</p>
                        <button
                            className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                            style={{ background: '#1a3fa8' }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        ))}
    </div>

    {/* Dot indicators */}
    <div className="flex justify-center gap-2 mt-1">
        <span className="w-5 h-2 rounded-full bg-[#1a3fa8]" />
        <span className="w-2 h-2 rounded-full bg-[#c5d0e8]" />
    </div>
</section>