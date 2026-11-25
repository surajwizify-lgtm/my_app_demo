import { Star, MessageSquarePlus } from "lucide-react";
import theme from "@/styles/theme";

const REVIEWS = [
    { id: 1, name: "Anjali Verma", rating: 5, time: "2 days ago", text: "Excellent care and very professional staff. The doctors took time to explain everything clearly.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80" },
    { id: 2, name: "Rahul Singh", rating: 4, time: "1 week ago", text: "Clean facilities and short waiting times. The billing process was smooth and transparent.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80" },
    { id: 3, name: "Neha Gupta", rating: 5, time: "2 weeks ago", text: "Best hospital in the area. My mother received exceptional care during her stay.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80" },
];

export default function ReviewsTab() {
    return (
        <div className="px-4 py-4">
            <div className="mb-4 flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-bold" style={{ color: theme.colors.textPrimary, fontFamily: theme.fonts.heading }}>
                        Reviews
                    </h2>
                    <p className="mt-0.5 text-xs" style={{ color: theme.colors.textSecondary }}>
                        {REVIEWS.length} verified patient reviews
                    </p>
                </div>
                <button
                    type="button"
                    className="flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold text-white"
                    style={{ backgroundColor: theme.colors.primary }}
                >
                    <MessageSquarePlus size={13} />
                    Write Review
                </button>
            </div>

            <div className="flex flex-col gap-4">
                {REVIEWS.map((review) => (
                    <div
                        key={review.id}
                        className="rounded-2xl p-4"
                        style={{ backgroundColor: theme.colors.surface, border: `1px solid ${theme.colors.border}` }}
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="h-10 w-10 rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="text-sm font-bold" style={{ color: theme.colors.textPrimary }}>
                                        {review.name}
                                    </h3>
                                    <div className="mt-0.5 flex items-center gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={10}
                                                fill={i < review.rating ? theme.colors.accent : theme.colors.border}
                                                color={i < review.rating ? theme.colors.accent : theme.colors.border}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <span className="text-[10px]" style={{ color: theme.colors.textMuted }}>
                                {review.time}
                            </span>
                        </div>
                        <p className="mt-3 text-[12px] leading-relaxed" style={{ color: theme.colors.textSecondary }}>
                            {review.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}