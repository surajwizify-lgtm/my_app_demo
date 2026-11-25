import { ShieldCheck, Award, Users, Clock, HeartPulse, CheckCircle2 } from "lucide-react";
import theme from "@/styles/theme";

const FEATURES = [
    { icon: Award, title: "Accredited Excellence", desc: "NABH & NABL certified with highest quality standards." },
    { icon: Users, title: "Expert Specialists", desc: "Team of highly experienced and renowned doctors." },
    { icon: HeartPulse, title: "Advanced Technology", desc: "State-of-the-art medical equipment and infrastructure." },
    { icon: Clock, title: "24/7 Emergency Care", desc: "Round-the-clock emergency and critical care services." },
    { icon: ShieldCheck, title: "Patient Safety First", desc: "Strict hygiene protocols and zero-compromise safety." },
];

export default function WhyChooseUsTab() {
    return (
        <div className="px-4 py-4">
            <div className="mb-4">
                <h2 className="text-lg font-bold" style={{ color: theme.colors.textPrimary, fontFamily: theme.fonts.heading }}>
                    Why Choose Us
                </h2>
                <p className="mt-1 text-xs" style={{ color: theme.colors.textSecondary }}>
                    Delivering trusted healthcare with compassion and precision.
                </p>
            </div>

            <div
                className="mb-5 flex items-start gap-3 rounded-2xl p-4"
                style={{ backgroundColor: theme.colors.primaryLight, border: `1px solid ${theme.colors.border}` }}
            >
                <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: theme.colors.primary }}
                >
                    <CheckCircle2 size={20} color="#fff" />
                </div>
                <div>
                    <h3 className="text-sm font-bold" style={{ color: theme.colors.primary }}>
                        Trusted by 50,000+ Patients
                    </h3>
                    <p className="mt-1 text-[11px] leading-relaxed" style={{ color: theme.colors.textSecondary }}>
                        Recognized for excellence in patient care and medical outcomes.
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-3">
                {FEATURES.map(({ icon: Icon, title, desc }) => (
                    <div
                        key={title}
                        className="flex items-start gap-3 rounded-2xl p-4"
                        style={{ backgroundColor: theme.colors.surface, border: `1px solid ${theme.colors.border}` }}
                    >
                        <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                            style={{ background: `linear-gradient(135deg, ${theme.colors.primaryLight}, ${theme.colors.secondaryLight})` }}
                        >
                            <Icon size={18} color={theme.colors.primary} />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold" style={{ color: theme.colors.textPrimary }}>{title}</h3>
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