import { MapPin, Bell, SlidersHorizontal } from 'lucide-react'

export default function Navbar() {
    return (
        <div className="relative z-50 ">
            <div
                className="relative overflow-hidden px-5 -z-10 pt-[calc(env(safe-area-inset-top,0px)+22px)] pb-16 rounded-b-[32px]"
                style={{ background: 'linear-gradient(160deg, #2d5fc4 0%, #1a3fa8 100%)' }}
            >
                {/* Decorative circles */}
                <div
                    className="absolute -top-6 -right-6 w-48 h-48 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.1)' }}
                />
                <div
                    className="absolute top-10 right-10 w-28 h-28 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.08)' }}
                />

                <div className="flex items-center gap-4 relative z-10">
                    {/* Avatar */}
                    <div
                        className="w-[54px] h-[54px] rounded-full flex items-center justify-center font-bold text-[22px] text-white shrink-0"
                        style={{ background: 'rgba(255,255,255,0.2)', border: '2px solid rgba(255,255,255,0.4)' }}
                    >
                        J
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1 text-[13px] text-white/80 mb-0.5">
                            <MapPin size={12} strokeWidth={2.4} className="shrink-0" />
                            <span className="truncate">Badshah Nagar, Mahanagar</span>
                        </div>
                        <strong
                            className="block text-[26px] font-bold text-white leading-tight"
                            style={{ fontFamily: 'Fraunces, serif' }}
                        >
                            Hello, Javed
                        </strong>
                    </div>

                    {/* Bell */}
                    <button
                        aria-label="Notifications"
                        className="relative w-[46px] h-[46px] rounded-full flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(255,255,255,0.18)' }}
                    >
                        <Bell size={22} strokeWidth={2} color="#fff" />
                        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#e5484d] flex items-center justify-center text-white text-[11px] font-bold border-2 border-[#1a3fa8]">
                            3
                        </span>
                    </button>
                </div>
            </div>

            {/* Search bar */}
            <div className="flex items-center gap-2  mx-5 -mt-14 px-4 h-14 bg-white rounded-full border border-gray-200 shadow-md">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#627d98"
                    strokeWidth="2.2"
                    className="shrink-0"
                >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-3.5-3.5" />
                </svg>
                <input
                    type="search"
                    placeholder="Search health issue, doctor…"
                    aria-label="Search health issue or doctor"
                    className="flex-1 border-0 bg-transparent outline-none text-[15px] text-[#102a43] placeholder:text-[#627d98] min-w-0"
                />
                <button
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: '#1a3fa8' }}
                >
                    <SlidersHorizontal size={16} strokeWidth={2} color="#fff" />
                </button>
            </div>
        </div>
    )
}