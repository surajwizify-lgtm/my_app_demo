import { MapPin, Navigation, Star } from "lucide-react";
import theme from "@/styles/theme";

const NEARBY = [
    { id: 4, name: "Lakeside Clinic", rating: 4.5, location: "Lake Road", specialties: ["General", "Dermatology"], distance: "0.8 km" },
    { id: 5, name: "Metro General Hospital", rating: 4.7, location: "Central Ave", specialties: ["Emergency", "Trauma"], distance: "1.2 km" },
    { id: 6, name: "Pinewood Medical", rating: 4.4, location: "Pinewood St", specialties: ["ENT", "Ophthalmology"], distance: "1.6 km" },
];

export default function NearbyHospitalsSection() {
    return (
        <div className="px-4 pb-4">
            <div className="mb-3 flex items-center justify-between">
                <h2 className="text-base font-bold" style={{ color: theme.colors.textPrimary, fontFamily: "Fraunces, serif" }}>
                    Nearby Hospitals
                </h2>
                <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: theme.colors.primary }}>
                    <Navigation size={12} /> Live
                </span>
            </div>
            <div className="flex flex-col gap-2">
                {NEARBY.map((h) => (
                    <div
                        key={h.id}
                        className="flex items-center gap-3 rounded-2xl p-3"
                        style={{ backgroundColor: theme.colors.surface, border: `1px solid ${theme.colors.border}` }}
                    >
                        <div
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                            style={{ backgroundColor: theme.colors.primaryLight }}
                        >
                            <MapPin size={18} color={theme.colors.primary} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="truncate text-sm font-bold" style={{ color: theme.colors.textPrimary }}>{h.name}</h3>
                            <p className="truncate text-xs" style={{ color: theme.colors.textMuted }}>
                                {h.location} • {h.specialties.join(", ")}
                            </p>
                        </div>
                        <div className="flex flex-col items-end shrink-0">
                            <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: theme.colors.primary }}>
                                <Star size={11} fill={theme.colors.primary} /> {h.rating}
                            </span>
                            <span className="text-[11px]" style={{ color: theme.colors.textMuted }}>{h.distance}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}