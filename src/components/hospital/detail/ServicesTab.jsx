import { Stethoscope, HeartPulse, Brain, Bone, Eye, Baby, Syringe, Microscope, Bone as Dental, Activity } from "lucide-react";
import theme from "@/styles/theme";

const SERVICES = [
    { name: "Cardiology", icon: HeartPulse, color: "#ffd7f8ff" },
    { name: "Neurology", icon: Brain, color: "#fff4ffd7" },
    { name: "Orthopedics", icon: Bone, color: "#fffcf2e4" },
    { name: "Ophthalmology", icon: Eye, color: "#fff1effe" },
    { name: "Pediatrics", icon: Baby, color: "#fffff2f1" },
    { name: "General Medicine", icon: Stethoscope, color: "#fff0f6f7" },
    { name: "Dermatology", icon: Activity, color: "#fffcf2e4" },
    { name: "Dental Care", icon: Dental, color: "#ffd7f8ff" },
    { name: "Vaccination", icon: Syringe, color: "#fff4ffd7" },
    { name: "Pathology", icon: Microscope, color: "#fff1effe" },
];

export default function ServicesTab() {
    return (
        <div className="px-4 py-4">
            <div className="mb-4">
                <h2 className="text-lg font-bold" style={{ color: theme.colors.textPrimary, fontFamily: theme.fonts.heading }}>
                    Our Services
                </h2>
                <p className="mt-1 text-xs" style={{ color: theme.colors.textSecondary }}>
                    Comprehensive medical services under one roof.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
                {SERVICES.map(({ name, icon: Icon, color }) => (
                    <button
                        key={name}
                        type="button"
                        className="flex flex-col items-center gap-2 rounded-2xl p-4 text-center transition-transform active:scale-[0.98]"
                        style={{ backgroundColor: theme.colors.surface, border: `1px solid ${theme.colors.border}` }}
                    >
                        <div
                            className="flex h-14 w-14 items-center justify-center rounded-2xl"
                            style={{ backgroundColor: color }}
                        >
                            <Icon size={24} color={theme.colors.primary} />
                        </div>
                        <span className="text-[12px] font-semibold leading-tight" style={{ color: theme.colors.textPrimary }}>
                            {name}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}