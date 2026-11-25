import { Star, MapPin, ChevronRight } from "lucide-react";
import theme from "@/styles/theme";

const FEATURED = [
    { id: 1, name: "City Care Hospital", rating: 4.8, location: "Downtown", specialties: ["Cardiology", "Neurology"], distance: "2.4 km" },
    { id: 2, name: "Green Valley Medical", rating: 4.6, location: "Riverside", specialties: ["Orthopedics", "Pediatrics"], distance: "3.1 km" },
    { id: 3, name: "Sunrise Health Center", rating: 4.9, location: "Uptown", specialties: ["Oncology", "Radiology"], distance: "1.8 km" },
];

export default function FeaturedHospitalsSection() {
    return (
        <div className="px-4 pb-4">
            <div className="mb-3 flex items-center justify-between">
                <h2 className="text-base font-bold" style={{ color: theme.colors.textPrimary, fontFamily: "Fraunces, serif" }}>
                    Featured Hospitals
                </h2>
                <button type="button" className="flex items-center gap-1 text-xs font-semibold" style={{ color: theme.colors.primary }}>
                    See all <ChevronRight size={14} />
                </button>
            </div>
            <div className="flex gap-3 overflow-x-auto no-scrollbar">
                {FEATURED.map((h) => (
                    <div
                        key={h.id}
                        className="shrink-0 rounded-2xl p-4"
                        style={{ width: 220, backgroundColor: theme.colors.surface, border: `1px solid ${theme.colors.border}` }}
                    >
                        <div className="mb-2 flex items-center justify-between">
                            <h3 className="text-sm font-bold" style={{ color: theme.colors.textPrimary }}>{h.name}</h3>
                            <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: theme.colors.primary }}>
                                <Star size={12} fill={theme.colors.primary} /> {h.rating}
                            </span>
                        </div>
                        <p className="mb-2 flex items-center gap-1 text-xs" style={{ color: theme.colors.textMuted }}>
                            <MapPin size={12} /> {h.location} • {h.distance}
                        </p>
                        <div className="flex flex-wrap gap-1">
                            {h.specialties.map((s) => (
                                <span key={s} className="rounded-full px-2 py-0.5 text-[10px] font-medium" style={{ backgroundColor: theme.colors.primaryLight, color: theme.colors.primary }}>
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}