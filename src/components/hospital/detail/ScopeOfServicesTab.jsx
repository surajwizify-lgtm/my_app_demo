import { CheckCircle2, Stethoscope, Ambulance, Bed, Pill, Activity, HeartPulse, Microscope, Syringe } from "lucide-react";
import theme from "@/styles/theme";

const SCOPE_ITEMS = [
    { title: "Outpatient (OPD) Services", desc: "Consultations across multiple specialties.", icon: Stethoscope },
    { title: "Inpatient (IPD) Care", desc: "Comfortable rooms with 24/7 nursing support.", icon: Bed },
    { title: "Emergency & Ambulance", desc: "Round-the-clock emergency response.", icon: Ambulance },
    { title: "Pharmacy Services", desc: "In-house pharmacy with all medicines.", icon: Pill },
    { title: "Diagnostics & Pathology", desc: "Advanced lab and imaging services.", icon: Microscope },
    { title: "Surgical Care", desc: "Modern operation theatres and expert surgeons.", icon: Syringe },
    { title: "Critical Care (ICU)", desc: "Fully equipped intensive care units.", icon: Activity },
    { title: "Health Checkups", desc: "Preventive health packages for all ages.", icon: HeartPulse },
];

export default function ScopeOfServicesTab() {
    return (
        <div className="px-2 py-4">
            <div className="mb-4">
                <h2 className="text-lg font-bold" style={{ color: theme.colors.textPrimary, fontFamily: theme.fonts.heading }}>
                    Scope of Services
                </h2>
                <p className="mt-1 text-xs" style={{ color: theme.colors.textSecondary }}>
                    End-to-end medical services available at our facility.
                </p>
            </div>

            <div className="flex flex-col gap-2">
                {SCOPE_ITEMS.map(({ title, desc, icon: Icon }) => (
                    <div
                        key={title}
                        className="flex items-start gap-3 rounded-2xl p-3"
                        style={{ backgroundColor: theme.colors.surface, border: `1px solid ${theme.colors.border}` }}
                    >
                        <div
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                            style={{ backgroundColor: theme.colors.secondaryLight }}
                        >
                            <Icon size={16} color={theme.colors.secondary} />
                        </div>
                        <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5">
                                <CheckCircle2 size={12} color={theme.colors.success} />
                                <h3 className="text-[13px] font-bold" style={{ color: theme.colors.textPrimary }}>{title}</h3>
                            </div>
                            <p className="mt-0.5 text-[11px] leading-relaxed" style={{ color: theme.colors.textSecondary }}>
                                {desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}