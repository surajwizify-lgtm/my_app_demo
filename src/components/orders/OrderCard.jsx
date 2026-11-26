import { FlaskConical, ChevronRight } from "lucide-react";
import theme from "@/styles/theme";

export default function OrderCard({ order }) {
    return (
        <div
            className="flex flex-col rounded-xl p-3"
            style={{
                backgroundColor: theme.colors.surface,
                border: `1px solid ${theme.colors.border}`,
                boxShadow: theme.shadows.soft,
            }}
        >
            <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2.5">
                    <div
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                        style={{ backgroundColor: theme.colors.primaryLight }}
                    >
                        <FlaskConical size={14} color={theme.colors.primary} />
                    </div>
                    <div>
                        <h3 className="text-[14px] font-bold leading-tight" style={{ color: theme.colors.textPrimary }}>
                            {order.labName}
                        </h3>
                        <p className="text-[10px]" style={{ color: theme.colors.textSecondary }}>
                            {order.bookingType || "Lab Test"}
                        </p>
                    </div>
                </div>
                <span
                    className="shrink-0 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider"
                    style={{ backgroundColor: theme.colors.secondaryLight, color: theme.colors.secondary }}
                >
                    {order.status}
                </span>
            </div>

            <div
                className="flex justify-between items-center text-[11px] mb-2 border-b pb-2"
                style={{ color: theme.colors.textSecondary, borderColor: theme.colors.border }}
            >
                <span>{order.date}</span>
                <span>Order: <strong style={{ color: theme.colors.textPrimary }}>{order.orderNo}</strong></span>
            </div>

            <div className="flex justify-between items-center mt-1">
                <div className="flex items-baseline gap-1">
                    <span className="text-[10px]" style={{ color: theme.colors.textSecondary }}>Total:</span>
                    <span className="text-[14px] font-bold" style={{ color: theme.colors.textPrimary }}>{order.amount}</span>
                </div>
                <button
                    type="button"
                    className="flex items-center gap-0.5 text-[11px] font-bold transition-transform active:scale-95"
                    style={{ color: theme.colors.primary }}
                >
                    Details
                    <ChevronRight size={12} />
                </button>
            </div>
        </div>
    );
}