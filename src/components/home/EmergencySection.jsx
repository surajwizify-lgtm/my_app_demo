import { motion } from "framer-motion"
import { PhoneCall, Ambulance, Stethoscope, MapPin, Activity } from "lucide-react"
import theme from "@/styles/theme"
import { useNavigate, useNavigation } from "react-router-dom"

function Design1() {
    return (
        <div
            className="relative overflow-hidden rounded-3xl p-5"
            style={{ backgroundColor: theme.colors.dangerLight, border: `1px solid ${theme.colors.danger}30` }}
        >
            <div className="absolute -right-4 -top-4 opacity-10">
                <Ambulance size={120} color={theme.colors.danger} />
            </div>
            <div className="relative z-10 mb-5">
                <div className="mb-1 flex items-center gap-2">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: theme.colors.danger }}
                    />
                    <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: theme.colors.danger }}>
                        Available 24/7
                    </span>
                </div>
                <h2 className="text-xl font-bold leading-tight" style={{ color: theme.colors.textPrimary, fontFamily: theme.fonts.heading }}>
                    Emergency Care
                </h2>
                <p className="mt-1 text-[13px]" style={{ color: theme.colors.textSecondary }}>
                    Immediate medical assistance at your fingertips.
                </p>
            </div>
            <div className="relative z-10 flex flex-col gap-2.5">
                <button
                    type="button"
                    className="flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-bold text-white transition-transform active:scale-[0.98]"
                    style={{ backgroundColor: theme.colors.danger, boxShadow: `0 8px 20px ${theme.colors.danger}40` }}
                >
                    <PhoneCall size={18} />
                    Call Ambulance Now
                </button>
                <div className="grid grid-cols-2 gap-2.5">
                    <button
                        type="button"
                        className="flex items-center justify-center gap-1.5 rounded-full py-2.5 text-[12px] font-bold transition-transform active:scale-[0.98]"
                        style={{ backgroundColor: theme.colors.surface, color: theme.colors.textPrimary, border: `1px solid ${theme.colors.border}` }}
                    >
                        <Stethoscope size={14} color={theme.colors.danger} />
                        On-Call Doctor
                    </button>
                    <button
                        type="button"
                        className="flex items-center justify-center gap-1.5 rounded-full py-2.5 text-[12px] font-bold transition-transform active:scale-[0.98]"
                        style={{ backgroundColor: theme.colors.surface, color: theme.colors.textPrimary, border: `1px solid ${theme.colors.border}` }}
                    >
                        <MapPin size={14} color={theme.colors.danger} />
                        Nearest ER
                    </button>
                </div>
            </div>
        </div>
    )
}

function Design2() {
    return (
        <div
            className="relative overflow-hidden rounded-3xl p-6"
            style={{ background: `linear-gradient(135deg, ${theme.colors.textPrimary}, #1a1a1a)` }}
        >
            <div className="absolute right-0 top-0 h-full w-1/2 opacity-20" style={{ background: `radial-gradient(circle at right center, ${theme.colors.danger}, transparent)` }} />
            <div className="relative z-10 flex flex-col items-center text-center">
                <div
                    className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: theme.colors.danger, boxShadow: `0 0 20px ${theme.colors.danger}60` }}
                >
                    <Ambulance size={28} color={theme.colors.white} />
                </div>
                <h2 className="mb-1 text-xl font-bold text-white" style={{ fontFamily: theme.fonts.heading }}>
                    Medical Emergency?
                </h2>
                <p className="mb-5 text-[13px] text-white/70">
                    Our rapid response team is ready 24/7.
                </p>
                <button
                    type="button"
                    className="flex w-full items-center justify-center gap-2 rounded-full py-4 text-[15px] font-bold uppercase tracking-wider text-white transition-transform active:scale-[0.98]"
                    style={{ backgroundColor: theme.colors.danger, boxShadow: `0 8px 24px ${theme.colors.danger}50` }}
                >
                    <PhoneCall size={20} />
                    SOS - Call Now
                </button>
            </div>
        </div>
    )
}

function Design3() {
    const navigate = useNavigate()

    return (
        <div
            className="relative overflow-hidden rounded-3xl border p-5"
            style={{ backgroundColor: theme.colors.surface, borderColor: theme.colors.border, boxShadow: theme.shadows.soft }}
        >
            <div className="flex items-start justify-between gap-4">
                <div>
                    <span className="inline-block rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider" style={{ backgroundColor: theme.colors.dangerLight, color: theme.colors.danger }}>
                        24/7 Support
                    </span>
                    <h2 className="mt-3 text-xl font-bold leading-tight" style={{ color: theme.colors.textPrimary, fontFamily: theme.fonts.heading }}>
                        Emergency Services
                    </h2>
                    <p className="mt-1 text-[13px]" style={{ color: theme.colors.textSecondary }}>
                        Quick access to critical care when every second counts.
                    </p>
                </div>
                <div
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full"
                    style={{ background: `linear-gradient(135deg, ${theme.colors.danger}, #ff7b7b)` }}
                >
                    <Activity size={28} color={theme.colors.white} />
                </div>
            </div>
            <div className="mt-5 flex gap-2">
                <button
                    onClick={() => navigate('/hospitals')}
                    type="button"
                    className="flex flex-1 items-center justify-center gap-2 rounded-2xl py-3 text-sm font-bold text-white transition-transform active:scale-[0.98]"
                    style={{ backgroundColor: theme.colors.danger }}
                >
                    <PhoneCall size={16} />
                    View Nearest Hospitals
                </button>
                <button
                    type="button"
                    className="flex items-center justify-center rounded-2xl px-2 py-3 text-sm font-bold transition-transform active:scale-[0.98]"
                    style={{ backgroundColor: theme.colors.background, color: theme.colors.textPrimary }}
                >
                    <MapPin size={16} color={theme.colors.danger} />
                </button>
            </div>
        </div>
    )
}

function Design4() {
    return (
        <div
            className="overflow-hidden rounded-r-2xl rounded-l-sm border-l-4 p-5"
            style={{ backgroundColor: theme.colors.surface, borderLeftColor: theme.colors.danger, boxShadow: theme.shadows.soft }}
        >
            <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: theme.colors.dangerLight }}>
                    <Ambulance size={18} color={theme.colors.danger} />
                </div>
                <div>
                    <h2 className="text-base font-bold" style={{ color: theme.colors.textPrimary }}>
                        Emergency & Ambulance
                    </h2>
                    <p className="text-[11px]" style={{ color: theme.colors.textSecondary }}>
                        24 hours a day, 7 days a week
                    </p>
                </div>
            </div>
            <div className="mt-4 flex items-center justify-between rounded-xl p-3" style={{ backgroundColor: theme.colors.background }}>
                <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: theme.colors.textMuted }}>Toll Free Number</p>
                    <p className="text-lg font-bold tracking-wide" style={{ color: theme.colors.textPrimary }}>1800 123 4567</p>
                </div>
                <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-full text-white shadow-md transition-transform active:scale-95"
                    style={{ backgroundColor: theme.colors.danger }}
                >
                    <PhoneCall size={18} />
                </button>
            </div>
        </div>
    )
}

export default function EmergencySection() {
    const router = useNavigate()
    return (
        <div className="flex flex-col gap-6 ">
            {/* <div>
                <h3 className="mb-2 text-sm font-bold text-gray-400 uppercase tracking-wider">Design 1 - Soft Card</h3>
                <Design1 />
            </div>
            <div>
                <h3 className="mb-2 text-sm font-bold text-gray-400 uppercase tracking-wider">Design 2 - Dark SOS</h3>
                <Design2 />
            </div> */}
            <div>
                {/* <h3 className="mb-2 text-sm font-bold text-gray-400 uppercase tracking-wider">Design 3 - Gradient Split</h3> */}
                <Design3 />
            </div>
            {/* <div>
                <h3 className="mb-2 text-sm font-bold text-gray-400 uppercase tracking-wider">Design 4 - Minimal Border</h3>
                <Design4 />
            </div> */}
        </div>
    )
}