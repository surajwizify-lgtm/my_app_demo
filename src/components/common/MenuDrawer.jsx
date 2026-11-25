import { motion, AnimatePresence } from "framer-motion"
import { X, Home, Hospital, FlaskConical, Package, ShoppingCart, User, LogOut, ChevronRight } from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"
import theme from "@/styles/theme"

const NAV_ITEMS = [
    { label: "Home", path: "/", icon: Home },
    { label: "Hospitals", path: "/hospitals", icon: Hospital },
    { label: "Lab Tests", path: "/tests", icon: FlaskConical },
    { label: "My Orders", path: "/orders", icon: Package },
    { label: "My Cart", path: "/cart", icon: ShoppingCart },
    { label: "My Profile", path: "/profile", icon: User },
]

export default function MenuDrawer({ isOpen, onClose }) {
    const navigate = useNavigate()
    const location = useLocation()

    const handleNavigation = (path) => {
        navigate(path)
        onClose()
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex justify-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                    />
                    <div className="relative h-full w-full max-w-[480px] pointer-events-none">
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="pointer-events-auto absolute inset-y-0 left-0 flex w-[80%] flex-col shadow-2xl"
                            style={{ backgroundColor: theme.colors.surface }}
                        >
                            <div
                                className="relative overflow-hidden px-6 pb-6 pt-12"
                                style={{ background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.primaryDark})` }}
                            >
                                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/10" />

                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="absolute right-4 top-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white"
                                >
                                    <X size={18} />
                                </button>

                                <div className="relative z-10 mt-4 flex items-center gap-4">
                                    <div
                                        className="flex h-14 w-14 items-center justify-center rounded-full border-2 text-xl font-bold text-white"
                                        style={{ borderColor: "rgba(255,255,255,0.4)", backgroundColor: "rgba(255,255,255,0.2)" }}
                                    >
                                        J
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h2 className="truncate text-lg font-bold text-white" style={{ fontFamily: theme.fonts.heading }}>
                                            Javed
                                        </h2>
                                        <p className="truncate text-xs text-white/80">+91 98765 43210</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 overflow-y-auto px-4 py-6">
                                <div className="flex flex-col gap-1">
                                    {NAV_ITEMS.map((item) => {
                                        const isActive = location.pathname === item.path
                                        const Icon = item.icon
                                        return (
                                            <button
                                                key={item.label}
                                                type="button"
                                                onClick={() => handleNavigation(item.path)}
                                                className="flex items-center justify-between rounded-xl px-4 py-3.5 transition-colors"
                                                style={{
                                                    backgroundColor: isActive ? theme.colors.primaryLight : "transparent",
                                                    color: isActive ? theme.colors.primary : theme.colors.textSecondary,
                                                }}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <Icon size={20} color={isActive ? theme.colors.primary : theme.colors.textMuted} />
                                                    <span className="text-sm font-bold" style={{ color: isActive ? theme.colors.primary : theme.colors.textPrimary }}>
                                                        {item.label}
                                                    </span>
                                                </div>
                                                <ChevronRight size={16} color={isActive ? theme.colors.primary : theme.colors.textMuted} />
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="border-t px-4 py-4" style={{ borderColor: theme.colors.border }}>
                                <button
                                    type="button"
                                    onClick={() => handleNavigation("/login")}
                                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition-transform active:scale-[0.98]"
                                    style={{ backgroundColor: theme.colors.dangerLight, color: theme.colors.danger }}
                                >
                                    <LogOut size={20} />
                                    Logout
                                </button>
                                <p className="mt-4 text-center text-[10px] font-semibold uppercase tracking-wider" style={{ color: theme.colors.textMuted }}>
                                    Version 1.0.0
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    )
}