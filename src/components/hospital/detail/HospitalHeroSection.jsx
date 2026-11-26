import { useNavigate } from "react-router-dom";
import { ArrowLeft, Share2, Star, MapPin, Phone, Navigation, Clock } from "lucide-react";
import theme from "@/styles/theme";

export default function HospitalHeroSection({ hospital }) {
    const navigate = useNavigate();

    return (
        <div className="px-2 pt-4 pb-2">
            <div
                className="w-full overflow-hidden rounded-3xl bg-white"
                style={{ boxShadow: theme.shadows.soft, border: `1px solid ${theme.colors.border}` }}
            >
                <div className="relative h-44 w-full">
                    <img
                        src={hospital.image}
                        alt={hospital.name}
                        className="h-full w-full object-cover"
                    />

                    {/* <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            className="flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-md"
                            style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
                        >
                            <ArrowLeft size={16} color={theme.colors.textPrimary} />
                        </button>
                        <button
                            type="button"
                            className="flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-md"
                            style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
                        >
                            <Share2 size={14} color={theme.colors.textPrimary} />
                        </button>
                    </div> */}
                </div>

                <div className="relative -mt-5 rounded-t-3xl px-5 " style={{ backgroundColor: theme.colors.surface }}>
                    <div className="mx-auto mb-4 h-1 w-10 rounded-full" style={{ backgroundColor: theme.colors.border }}></div>

                    <div className="mb-2 flex items-center gap-2">
                        <span
                            className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-bold"
                            style={{ backgroundColor: theme.colors.accentLight, color: theme.colors.textPrimary }}
                        >
                            <Star size={10} fill={theme.colors.accent} color={theme.colors.accent} /> {hospital.rating}
                        </span>
                        <span
                            className="rounded-full px-2 py-0.5 text-[11px] font-semibold"
                            style={{ backgroundColor: theme.colors.primaryLight, color: theme.colors.primary }}
                        >
                            Multi-Specialty
                        </span>
                    </div>

                    <h1 className="text-xl font-bold leading-tight" style={{ color: theme.colors.textPrimary, fontFamily: theme.fonts.heading }}>
                        {hospital.name}
                    </h1>

                    <p className="mt-1 flex items-center gap-1 text-[12px]" style={{ color: theme.colors.textSecondary }}>
                        <MapPin size={12} /> {hospital.location} • {hospital.distance}
                    </p>

                    <div className="mt-4 grid grid-cols-3 pb-2 gap-2">
                        <button
                            type="button"
                            className="flex flex-col items-center justify-center gap-1 rounded-2xl py-2.5"
                            style={{ backgroundColor: theme.colors.background, border: `1px solid ${theme.colors.border}` }}
                        >
                            <Phone size={16} color={theme.colors.primary} />
                            <span className="text-[10px] font-bold" style={{ color: theme.colors.primary }}>Call</span>
                        </button>
                        <button
                            type="button"
                            className="flex flex-col items-center justify-center gap-1 rounded-2xl py-2.5"
                            style={{ backgroundColor: theme.colors.background, border: `1px solid ${theme.colors.border}` }}
                        >
                            <Navigation size={16} color={theme.colors.secondary} />
                            <span className="text-[10px] font-bold" style={{ color: theme.colors.secondary }}>Directions</span>
                        </button>
                        <button
                            type="button"
                            className="flex flex-col items-center justify-center gap-1 rounded-2xl py-2.5"
                            style={{ backgroundColor: theme.colors.background, border: `1px solid ${theme.colors.border}` }}
                        >
                            <Clock size={16} color={theme.colors.success} />
                            <span className="text-[10px] font-bold" style={{ color: theme.colors.success }}>Open Now</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}