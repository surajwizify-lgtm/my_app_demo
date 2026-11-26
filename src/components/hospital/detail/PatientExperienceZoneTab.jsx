import { Play, Quote, Star } from "lucide-react";
import theme from "@/styles/theme";

const EXPERIENCES = [
    { id: 1, name: "Ravi Sharma", age: 42, treatment: "Cardiac Surgery", quote: "The care I received was exceptional. From the nurses to the surgeons, everyone made me feel safe.", thumbnail: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80", rating: 5 },
    { id: 2, name: "Meera Pillai", age: 58, treatment: "Knee Replacement", quote: "I walked out of the hospital in 4 days. The physiotherapy team was outstanding.", thumbnail: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&q=80", rating: 5 },
    { id: 3, name: "Karan Malhotra", age: 34, treatment: "Emergency Care", quote: "They saved my life. Arrived at 3am and the team was ready within minutes.", thumbnail: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&q=80", rating: 5 },
    { id: 4, name: "Sunita Joshi", age: 51, treatment: "Maternity", quote: "Both my babies were born here. The maternity ward feels like a second home.", thumbnail: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&q=80", rating: 5 },
];

export default function PatientExperienceZoneTab() {
    return (
        <div className="px-2 py-4">
            <div className="mb-4">
                <h2 className="text-lg font-bold" style={{ color: theme.colors.textPrimary, fontFamily: theme.fonts.heading }}>
                    Patient Experience Zone
                </h2>
                <p className="mt-1 text-xs" style={{ color: theme.colors.textSecondary }}>
                    Real stories from patients who trusted us with their health.
                </p>
            </div>

            <div className="flex flex-col gap-3">
                {EXPERIENCES.map((exp) => (
                    <div
                        key={exp.id}
                        className="overflow-hidden rounded-2xl"
                        style={{ backgroundColor: theme.colors.surface, border: `1px solid ${theme.colors.border}`, boxShadow: theme.shadows.soft }}
                    >
                        <div className="relative h-40 w-full">
                            <img src={exp.thumbnail} alt={exp.name} className="h-full w-full object-cover" />
                            <div className="absolute inset-0" style={{ backgroundColor: "rgba(14,76,107,0.35)" }} />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button
                                    type="button"
                                    className="flex h-12 w-12 items-center justify-center rounded-full"
                                    style={{ backgroundColor: "rgba(255,255,255,0.92)" }}
                                >
                                    <Play size={20} color={theme.colors.primary} fill={theme.colors.primary} />
                                </button>
                            </div>
                            <div
                                className="absolute right-3 top-3 flex items-center gap-0.5 rounded-full px-2 py-0.5"
                                style={{ backgroundColor: "rgba(255,255,255,0.92)" }}
                            >
                                <Star size={10} fill={theme.colors.accent} color={theme.colors.accent} />
                                <span className="text-[10px] font-bold" style={{ color: theme.colors.textPrimary }}>{exp.rating}.0</span>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="mb-2 flex items-start gap-2">
                                <Quote size={16} color={theme.colors.primaryLight} className="shrink-0" />
                                <p className="text-[12px] leading-relaxed" style={{ color: theme.colors.textPrimary }}>
                                    {exp.quote}
                                </p>
                            </div>
                            <div className="flex items-center justify-between border-t pt-3" style={{ borderColor: theme.colors.border }}>
                                <div>
                                    <h3 className="text-[13px] font-bold" style={{ color: theme.colors.textPrimary }}>{exp.name}</h3>
                                    <p className="text-[10px]" style={{ color: theme.colors.textMuted }}>{exp.age} yrs • {exp.treatment}</p>
                                </div>
                                <span
                                    className="rounded-full px-2 py-0.5 text-[10px] font-semibold"
                                    style={{ backgroundColor: theme.colors.secondaryLight, color: theme.colors.secondary }}
                                >
                                    Verified Patient
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}