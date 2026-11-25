import { useState } from "react";
import { Building2, Home, ChevronRight, CheckCircle2 } from "lucide-react";
import theme from "@/styles/theme";

const PACKAGES = [
    { id: 1, type: "hospital", title: "Comprehensive Health Checkup", desc: "Includes CBC, Lipid Profile, ECG, Blood Sugar & more.", price: "₹2,500", oldPrice: "₹3,500" },
    { id: 2, type: "hospital", title: "Cardiac Screening Package", desc: "ECG, ECHO, TMT, Lipid Profile.", price: "₹4,000", oldPrice: "₹5,200" },
    { id: 3, type: "hospital", title: "Diabetes Care Package", desc: "HbA1c, Fasting Glucose, Urine Routine.", price: "₹1,200", oldPrice: "₹1,800" },
    { id: 4, type: "home", title: "Home Nursing Care", desc: "24/7 nursing assistance at home.", price: "₹1,500/day", oldPrice: "" },
    { id: 5, type: "home", title: "Home Physiotherapy", desc: "Post-surgery recovery & mobility support.", price: "₹800/session", oldPrice: "" },
    { id: 6, type: "home", title: "Elderly Care Package", desc: "Vitals monitoring & personal care.", price: "₹2,000/day", oldPrice: "" },
];

export default function PackagesTab() {
    const [mode, setMode] = useState("hospital");

    const filtered = PACKAGES.filter((p) => p.type === mode);

    return (
        <div className="px-4 py-4">
            <div className="mb-4 flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-bold" style={{ color: theme.colors.textPrimary, fontFamily: theme.fonts.heading }}>
                        Health Packages
                    </h2>
                    <p className="mt-0.5 text-xs" style={{ color: theme.colors.textSecondary }}>
                        Choose the right plan for you
                    </p>
                </div>
            </div>

            <div className="mb-4 flex rounded-full p-1" style={{ backgroundColor: theme.colors.surface, border: `1px solid ${theme.colors.border}` }}>
                <button
                    type="button"
                    onClick={() => setMode("hospital")}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-full py-2 text-[12px] font-bold transition-all"
                    style={{
                        backgroundColor: mode === "hospital" ? theme.colors.primary : "transparent",
                        color: mode === "hospital" ? "#fff" : theme.colors.textSecondary,
                    }}
                >
                    <Building2 size={14} /> At Hospital
                </button>
                <button
                    type="button"
                    onClick={() => setMode("home")}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-full py-2 text-[12px] font-bold transition-all"
                    style={{
                        backgroundColor: mode === "home" ? theme.colors.primary : "transparent",
                        color: mode === "home" ? "#fff" : theme.colors.textSecondary,
                    }}
                >
                    <Home size={14} /> At Home
                </button>
            </div>

            <div className="flex flex-col gap-3">
                {filtered.map((pkg) => (
                    <div
                        key={pkg.id}
                        className="flex flex-col rounded-2xl p-4 transition-transform active:scale-[0.98]"
                        style={{ backgroundColor: theme.colors.surface, border: `1px solid ${theme.colors.border}`, boxShadow: theme.shadows.soft }}
                    >
                        <div className="flex items-start justify-between gap-3">
                            <div className="flex-1">
                                <div className="flex items-center gap-1.5">
                                    <CheckCircle2 size={14} color={theme.colors.secondary} />
                                    <h3 className="text-sm font-bold leading-tight" style={{ color: theme.colors.textPrimary }}>
                                        {pkg.title}
                                    </h3>
                                </div>
                                <p className="mt-1.5 text-[11px] leading-relaxed" style={{ color: theme.colors.textSecondary }}>
                                    {pkg.desc}
                                </p>
                            </div>
                            <div className="flex shrink-0 flex-col items-end">
                                <span className="text-[15px] font-bold" style={{ color: theme.colors.primary }}>
                                    {pkg.price}
                                </span>
                                {pkg.oldPrice && (
                                    <span className="text-[10px] line-through" style={{ color: theme.colors.textMuted }}>
                                        {pkg.oldPrice}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="mt-3 flex items-center justify-between border-t pt-3" style={{ borderColor: theme.colors.border }}>
                            <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: theme.colors.textMuted }}>
                                Available {pkg.type === "hospital" ? "In-Hospital" : "At Home"}
                            </span>
                            <button type="button" className="flex items-center gap-1 text-[11px] font-bold" style={{ color: theme.colors.secondary }}>
                                Know More <ChevronRight size={12} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}