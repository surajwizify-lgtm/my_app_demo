import { Play } from "lucide-react";
import theme from "@/styles/theme";

const PHOTOS = [
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80",
    "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=600&q=80",
    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&q=80",
    "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80",
    "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=80",
];

const VIDEOS = [
    { id: 1, thumbnail: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&q=80", title: "Hospital Tour" },
    { id: 2, thumbnail: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80", title: "Operation Theatre" },
    { id: 3, thumbnail: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?w=600&q=80", title: "Patient Rooms" },
    { id: 4, thumbnail: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80", title: "Emergency Ward" },
];

export default function FacilityTourTab() {
    return (
        <div className="px-2 py-4">
            <div className="mb-4">
                <h2 className="text-lg font-bold" style={{ color: theme.colors.textPrimary, fontFamily: theme.fonts.heading }}>
                    Facility Tour
                </h2>
                <p className="mt-1 text-xs" style={{ color: theme.colors.textSecondary }}>
                    Take a look inside our modern facilities.
                </p>
            </div>

            <h3 className="mb-2 text-sm font-bold" style={{ color: theme.colors.textPrimary }}>
                Facility Photos
            </h3>
            <div className="mb-5 grid grid-cols-2 gap-2">
                {PHOTOS.map((src, i) => (
                    <div
                        key={i}
                        className="aspect-square overflow-hidden rounded-2xl"
                        style={{ border: `1px solid ${theme.colors.border}` }}
                    >
                        <img src={src} alt={`Facility ${i + 1}`} className="h-full w-full object-cover" />
                    </div>
                ))}
            </div>

            <h3 className="mb-2 text-sm font-bold" style={{ color: theme.colors.textPrimary }}>
                Facility Videos
            </h3>
            <div className="grid grid-cols-2 gap-2">
                {VIDEOS.map((v) => (
                    <button
                        key={v.id}
                        type="button"
                        className="relative aspect-square overflow-hidden rounded-2xl transition-transform active:scale-[0.98]"
                        style={{ border: `1px solid ${theme.colors.border}` }}
                    >
                        <img src={v.thumbnail} alt={v.title} className="h-full w-full object-cover" />
                        <div className="absolute inset-0" style={{ backgroundColor: "rgba(14,76,107,0.35)" }} />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div
                                className="flex h-11 w-11 items-center justify-center rounded-full"
                                style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
                            >
                                <Play size={18} color={theme.colors.primary} fill={theme.colors.primary} />
                            </div>
                        </div>
                        <span className="absolute bottom-2 left-2 right-2 truncate text-left text-[10px] font-semibold text-white">
                            {v.title}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}