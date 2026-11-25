import { useNavigate } from "react-router-dom";
import { Star, MapPin, Navigation } from "lucide-react";
import theme from "@/styles/theme";

const FEATURED = [
    {
        id: 1,
        name: "City Care Hospital",
        rating: 4.8,
        location: "Downtown",
        specialties: ["Cardiology", "Neurology"],
        distance: "2.4 km",
        image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&q=80",
    },
    {
        id: 2,
        name: "Green Valley Medical",
        rating: 4.6,
        location: "Riverside",
        specialties: ["Orthopedics", "Pediatrics"],
        distance: "3.1 km",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80",
    },
    {
        id: 3,
        name: "Sunrise Health Center",
        rating: 4.9,
        location: "Uptown",
        specialties: ["Oncology", "Radiology"],
        distance: "1.8 km",
        image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&q=80",
    },
];

export default function FeaturedHospitalsSection() {
    const navigate = useNavigate();

    return (
        <div className="px-4 pb-2">
            <div className="mb-3 flex items-center justify-between">
                <h2 className="text-base font-bold" style={{ color: theme.colors.textPrimary, fontFamily: theme.fonts.heading }}>
                    Featured Hospitals
                </h2>
                <button type="button" className="text-xs font-bold" style={{ color: theme.colors.primary }}>
                    See all
                </button>
            </div>

            <div className="flex gap-3 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
                {FEATURED.map((h) => (
                    <div
                        key={h.id}
                        onClick={() => navigate(`/hospitals/${h.id}`)}
                        className="shrink-0 rounded-2xl overflow-hidden cursor-pointer active:scale-[0.98] transition-all"
                        style={{
                            width: 220,
                            backgroundColor: theme.colors.surface,
                            border: `1px solid ${theme.colors.border}`,
                            boxShadow: "0 4px 20px rgba(14,76,107,0.03)",
                        }}
                    >
                        <div className="relative">
                            <img
                                src={h.image}
                                alt={h.name}
                                className="w-full object-cover"
                                style={{ height: 110 }}
                            />
                            <div
                                className="absolute top-2 right-2 flex items-center gap-0.5 rounded-lg px-2 py-0.5"
                                style={{ backgroundColor: theme.colors.accentLight }}
                            >
                                <Star size={10} fill={theme.colors.accent} color={theme.colors.accent} />
                                <span className="text-[11px] font-bold" style={{ color: theme.colors.textPrimary }}>
                                    {h.rating}
                                </span>
                            </div>
                        </div>

                        <div className="p-3">
                            <h3 className="text-[13px] font-bold leading-tight mb-1" style={{ color: theme.colors.textPrimary }}>
                                {h.name}
                            </h3>

                            <div className="flex items-center gap-1 text-[11px] flex-wrap mb-2" style={{ color: theme.colors.textSecondary }}>
                                <MapPin size={10} className="shrink-0" />
                                <span>{h.location}</span>
                                <span style={{ color: theme.colors.border }}>|</span>
                                <span className="font-semibold" style={{ color: theme.colors.secondary }}>{h.distance}</span>
                                <span style={{ color: theme.colors.border }}>|</span>
                                <span className="font-bold" style={{ color: theme.colors.success }}>Open</span>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex gap-1 flex-wrap">
                                    {h.specialties.map((s) => (
                                        <span
                                            key={s}
                                            className="rounded-md px-1.5 py-0.5 text-[9px] font-bold"
                                            style={{
                                                backgroundColor: theme.colors.background,
                                                color: theme.colors.textSecondary,
                                                border: `1px solid ${theme.colors.border}`,
                                            }}
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>
                                <button
                                    type="button"
                                    onClick={(e) => { e.stopPropagation(); window.open('https://maps.google.com'); }}
                                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 active:scale-95 transition-transform"
                                    style={{ backgroundColor: theme.colors.primary }}
                                >
                                    <Navigation size={12} color="#fff" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}