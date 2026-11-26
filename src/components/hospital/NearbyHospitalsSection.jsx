import { useNavigate } from "react-router-dom";
import { Star, MapPin, Navigation, Phone } from "lucide-react";
import theme from "@/styles/theme";

const NEARBY = [
    { id: 4, name: "Lakeside Clinic", rating: 4.5, location: "Lake Road", specialties: ["General", "Dermatology"], distance: "0.8 km" },
    { id: 5, name: "Metro General Hospital", rating: 4.7, location: "Central Ave", specialties: ["Emergency", "Trauma"], distance: "1.2 km" },
    { id: 6, name: "Pinewood Medical", rating: 4.4, location: "Pinewood St", specialties: ["ENT", "Ophthalmology"], distance: "1.6 km" },
];

export default function NearbyHospitalsSection() {
    const navigate = useNavigate();

    return (
        <div className="px-2 pb-4">
            <div className="mb-3 flex items-center justify-between">
                <h2 className="text-base font-bold" style={{ color: theme.colors.textPrimary, fontFamily: theme.fonts.heading }}>
                    Nearby Hospitals
                </h2>
                <span className="flex items-center gap-1 text-xs font-bold" style={{ color: theme.colors.secondary }}>
                    <Navigation size={12} /> Live
                </span>
            </div>

            <div className="flex flex-col gap-2.5">
                {NEARBY.map((h) => (
                    <div
                        key={h.id}
                        onClick={() => navigate(`/hospitals/${h.id}`)}
                        className="w-full cursor-pointer rounded-2xl p-3.5 active:scale-[0.98] transition-all"
                        style={{
                            backgroundColor: theme.colors.surface,
                            border: `1px solid ${theme.colors.border}`,
                            boxShadow: "0 4px 20px rgba(14,76,107,0.03)",
                        }}
                    >
                        <div className="flex items-center justify-between mb-1">
                            <h3 className="text-[14px] font-bold leading-tight" style={{ color: theme.colors.textPrimary }}>
                                {h.name}
                            </h3>
                            <span className="text-[11px] font-bold flex items-center gap-0.5" style={{ color: theme.colors.accent }}>
                                <Star size={11} fill={theme.colors.accent} color={theme.colors.accent} />
                                {h.rating}
                            </span>
                        </div>

                        <div className="flex items-center gap-1.5 text-[11px] flex-wrap mb-2.5" style={{ color: theme.colors.textSecondary }}>
                            <MapPin size={11} className="shrink-0" />
                            <span>{h.location}</span>
                            <span style={{ color: theme.colors.border }}>|</span>
                            <span className="font-semibold" style={{ color: theme.colors.secondary }}>{h.distance}</span>
                            <span style={{ color: theme.colors.border }}>|</span>
                            <span className="font-bold" style={{ color: theme.colors.success }}>Open</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex gap-1.5 flex-wrap">
                                {h.specialties.map((s) => (
                                    <span
                                        key={s}
                                        className="rounded-md px-2 py-0.5 text-[10px] font-bold"
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

                            <div className="flex gap-2 shrink-0">
                                <button
                                    type="button"
                                    onClick={(e) => { e.stopPropagation(); window.open('tel:+911234567890'); }}
                                    className="w-8 h-8 rounded-full flex items-center justify-center active:scale-95 transition-transform"
                                    style={{ backgroundColor: theme.colors.primaryLight, border: `1px solid ${theme.colors.border}` }}
                                >
                                    <Phone size={13} color={theme.colors.primary} />
                                </button>
                                <button
                                    type="button"
                                    onClick={(e) => { e.stopPropagation(); window.open('https://maps.google.com'); }}
                                    className="w-8 h-8 rounded-full flex items-center justify-center active:scale-95 transition-transform"
                                    style={{ backgroundColor: theme.colors.primary }}
                                >
                                    <Navigation size={13} color="#fff" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}