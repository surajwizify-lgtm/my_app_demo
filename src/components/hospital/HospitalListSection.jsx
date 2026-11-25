import { useNavigate } from "react-router-dom";
import { Building2, Star, MapPin, ChevronRight, Clock } from "lucide-react";
import theme from "@/styles/theme";

const HOSPITALS = [
    { id: 1, name: "City Care Hospital", rating: 4.8, location: "Downtown", specialties: ["Cardiology", "Neurology"], distance: "2.4 km" },
    { id: 2, name: "Green Valley Medical", rating: 4.6, location: "Riverside", specialties: ["Orthopedics", "Pediatrics"], distance: "3.1 km" },
    { id: 3, name: "Sunrise Health Center", rating: 4.9, location: "Uptown", specialties: ["Oncology", "Radiology"], distance: "1.8 km" },
    { id: 4, name: "Lakeside Clinic", rating: 4.5, location: "Lake Road", specialties: ["General", "Dermatology"], distance: "0.8 km" },
    { id: 5, name: "Metro General Hospital", rating: 4.7, location: "Central Ave", specialties: ["Emergency", "Trauma"], distance: "1.2 km" },
    { id: 6, name: "Pinewood Medical", rating: 4.4, location: "Pinewood St", specialties: ["ENT", "Ophthalmology"], distance: "1.6 km" },
];

export default function HospitalListSection() {
    const navigate = useNavigate();

    return (
        <div className="px-4 pb-4">
            <div className="mb-3 flex items-center justify-between">
                <h2 className="text-base font-bold" style={{ color: theme.colors.textPrimary, fontFamily: theme.fonts.heading }}>
                    All Hospitals
                </h2>
                <span className="text-xs" style={{ color: theme.colors.textMuted }}>{HOSPITALS.length} results</span>
            </div>
            <div className="flex flex-col gap-3">
                {HOSPITALS.map((h) => (
                    <button
                        key={h.id}
                        type="button"
                        onClick={() => navigate(`/hospitals/${h.id}`)}
                        className="w-full rounded-2xl p-4 text-left transition-transform active:scale-[0.99]"
                        style={{
                            backgroundColor: theme.colors.surface,
                            border: `1px solid ${theme.colors.border}`,
                            boxShadow: theme.shadows.soft,
                        }}
                    >
                        <div className="flex items-start gap-3">
                            <div
                                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                                style={{ background: `linear-gradient(135deg, ${theme.colors.primaryLight}, ${theme.colors.secondaryLight})` }}
                            >
                                <Building2 size={22} color={theme.colors.primary} strokeWidth={2} />
                            </div>
                            <div className="min-w-0 flex-1">
                                <div className="flex items-start justify-between gap-2">
                                    <h3 className="text-[15px] font-bold leading-tight" style={{ color: theme.colors.textPrimary }}>
                                        {h.name}
                                    </h3>
                                    <span
                                        className="flex shrink-0 items-center gap-0.5 rounded-full px-2 py-0.5 text-[11px] font-bold"
                                        style={{ backgroundColor: theme.colors.accentLight, color: theme.colors.textPrimary }}
                                    >
                                        <Star size={10} fill={theme.colors.accent} color={theme.colors.accent} /> {h.rating}
                                    </span>
                                </div>
                                <div className="mt-1 flex items-center gap-1 text-[11px]" style={{ color: theme.colors.textMuted }}>
                                    <MapPin size={11} />
                                    <span>{h.location}</span>
                                    <span>•</span>
                                    <span className="font-semibold" style={{ color: theme.colors.secondary }}>{h.distance}</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                            {h.specialties.map((s) => (
                                <span
                                    key={s}
                                    className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold"
                                    style={{ backgroundColor: theme.colors.primaryLight, color: theme.colors.primary }}
                                >
                                    {s}
                                </span>
                            ))}
                        </div>
                        <div
                            className="mt-3 flex items-center justify-between pt-3"
                            style={{ borderTop: `1px solid ${theme.colors.border}` }}
                        >
                            <span className="flex items-center gap-1 text-[11px] font-semibold" style={{ color: theme.colors.success }}>
                                <Clock size={11} /> Open Now
                            </span>
                            <span className="flex items-center gap-0.5 text-[11px] font-semibold" style={{ color: theme.colors.primary }}>
                                View Details <ChevronRight size={13} />
                            </span>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}