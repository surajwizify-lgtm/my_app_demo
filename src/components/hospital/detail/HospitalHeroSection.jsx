import { useNavigate } from "react-router-dom";
import { ArrowLeft, Share2, Star, MapPin, Phone, Navigation, Clock } from "lucide-react";
import theme from "@/styles/theme";

export default function HospitalHeroSection({ hospital }) {
    const navigate = useNavigate();

    return (
        <div className="relative">
            <div className="relative h-56 w-full overflow-hidden">
                <img
                    src={hospital.image}
                    alt={hospital.name}
                    className="h-full w-full object-cover"
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(to bottom, rgba(14,76,107,0.35), rgba(14,76,107,0.85))`,
                    }}
                />
                <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-md"
                        style={{ backgroundColor: "rgba(255,255,255,0.85)" }}
                    >
                        <ArrowLeft size={18} color={theme.colors.primary} />
                    </button>
                    <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-md"
                        style={{ backgroundColor: "rgba(255,255,255,0.85)" }}
                    >
                        <Share2 size={16} color={theme.colors.primary} />
                    </button>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                    <div className="mb-2 flex items-center gap-2">
                        <span
                            className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-bold"
                            style={{ backgroundColor: theme.colors.accent, color: theme.colors.textPrimary }}
                        >
                            <Star size={10} fill={theme.colors.textPrimary} /> {hospital.rating}
                        </span>
                        <span
                            className="rounded-full px-2 py-0.5 text-[11px] font-semibold"
                            style={{ backgroundColor: theme.colors.primaryLight, color: theme.colors.primary }}
                        >
                            Multi-Specialty
                        </span>
                    </div>
                    <h1 className="text-xl font-bold leading-tight text-white" style={{ fontFamily: theme.fonts.heading }}>
                        {hospital.name}
                    </h1>
                    <p className="mt-1 flex items-center gap-1 text-[12px] text-white/90">
                        <MapPin size={12} /> {hospital.location} • {hospital.distance}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-2 px-4 py-4">
                <button
                    type="button"
                    className="flex flex-col items-center gap-1 rounded-2xl py-3"
                    style={{ backgroundColor: theme.colors.primaryLight }}
                >
                    <Phone size={18} color={theme.colors.primary} />
                    <span className="text-[11px] font-semibold" style={{ color: theme.colors.primary }}>Call</span>
                </button>
                <button
                    type="button"
                    className="flex flex-col items-center gap-1 rounded-2xl py-3"
                    style={{ backgroundColor: theme.colors.secondaryLight }}
                >
                    <Navigation size={18} color={theme.colors.secondary} />
                    <span className="text-[11px] font-semibold" style={{ color: theme.colors.secondary }}>Directions</span>
                </button>
                <button
                    type="button"
                    className="flex flex-col items-center gap-1 rounded-2xl py-3"
                    style={{ backgroundColor: theme.colors.successLight }}
                >
                    <Clock size={18} color={theme.colors.success} />
                    <span className="text-[11px] font-semibold" style={{ color: theme.colors.success }}>Open Now</span>
                </button>
            </div>
        </div>
    );
}