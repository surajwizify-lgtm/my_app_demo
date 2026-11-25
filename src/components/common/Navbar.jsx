import { MapPin, Bell, SlidersHorizontal, Search } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import theme from '@/styles/theme'

export default function Navbar() {
    const navigate = useNavigate()

    return (
        <div className="relative z-50">
            <div
                className="relative overflow-hidden px-5 -z-10 pt-[calc(env(safe-area-inset-top,0px)+22px)] pb-16 rounded-b-[32px]"
                style={{ background: `linear-gradient(160deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%)` }}
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
                        className="w-[54px] h-[54px] rounded-full flex items-center justify-center font-bold text-[22px] shrink-0"
                        style={{
                            background: 'rgba(255,255,255,0.2)',
                            border: '2px solid rgba(255,255,255,0.4)',
                            color: theme.colors.white
                        }}
                    >
                        J
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1 text-[13px] mb-0.5" style={{ color: 'rgba(255,255,255,0.8)' }}>
                            <MapPin size={12} strokeWidth={2.4} className="shrink-0" />
                            <span className="truncate">Badshah Nagar, Mahanagar</span>
                        </div>
                        <strong
                            className="block text-[26px] font-bold leading-tight"
                            style={{ fontFamily: theme.fonts.heading, color: theme.colors.white }}
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
                        <Bell size={22} strokeWidth={2} color={theme.colors.white} />
                        <span
                            className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold border-2"
                            style={{
                                backgroundColor: theme.colors.danger,
                                color: theme.colors.white,
                                borderColor: theme.colors.primaryDark
                            }}
                        >
                            3
                        </span>
                    </button>
                </div>
            </div>

            {/* Search bar */}
            <div
                onClick={() => navigate('/hospitals')}
                className="flex items-center gap-2 mx-5 -mt-14 px-4 h-14 rounded-full shadow-md cursor-pointer"
                style={{
                    backgroundColor: theme.colors.surface,
                    border: `1px solid ${theme.colors.border}`
                }}
            >
                <Search size={20} strokeWidth={2.2} color={theme.colors.textSecondary} className="shrink-0" />
                <input
                    readOnly
                    type="search"
                    placeholder="Search health issue, doctor…"
                    aria-label="Search health issue or doctor"
                    className="flex-1 border-0 bg-transparent outline-none text-[15px] min-w-0 pointer-events-none"
                    style={{ color: theme.colors.textPrimary, fontFamily: theme.fonts.body }}
                />
                <button
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 pointer-events-none"
                    style={{ backgroundColor: theme.colors.primary }}
                >
                    <SlidersHorizontal size={16} strokeWidth={2} color={theme.colors.white} />
                </button>
            </div>
        </div>
    )
}