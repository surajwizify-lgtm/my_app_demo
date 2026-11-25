import { Calendar, FileText, FlaskConical, ChevronRight } from "lucide-react";
import theme from "@/styles/theme";

export default function OrderCard({ order }) {
    return (
        <div
            className="flex flex-col overflow-hidden rounded-2xl"
            style={{
                backgroundColor: theme.colors.surface,
                border: `1px solid ${theme.colors.border}`,
                boxShadow: theme.shadows.soft,
            }}
        >
            <div className="p-4">
                <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                        <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                            style={{ backgroundColor: theme.colors.primaryLight }}
                        >
                            <FlaskConical size={20} color={theme.colors.primary} />
                        </div>
                        <div className="min-w-0">
                            <h3 className="truncate text-[14px] font-bold leading-tight" style={{ color: theme.colors.textPrimary }}>
                                {order.labName}
                            </h3>
                            <p className="mt-0.5 text-[11px]" style={{ color: theme.colors.textMuted }}>
                                {order.bookingType || "Lab Test"}
                            </p>
                        </div>
                    </div>
                    <span
                        className="shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider"
                        style={{ backgroundColor: theme.colors.secondaryLight, color: theme.colors.secondary }}
                    >
                        {order.status}
                    </span>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-[12px]">
                        <Calendar size={14} color={theme.colors.textMuted} />
                        <span style={{ color: theme.colors.textSecondary }}>Placed on:</span>
                        <span className="font-semibold" style={{ color: theme.colors.textPrimary }}>
                            {order.date}
                        </span>
                    </div>
                    <div className="flex items-center gap-2 text-[12px]">
                        <FileText size={14} color={theme.colors.textMuted} />
                        <span style={{ color: theme.colors.textSecondary }}>Order No:</span>
                        <span className="font-semibold" style={{ color: theme.colors.textPrimary }}>
                            {order.orderNo}
                        </span>
                    </div>
                </div>
            </div>

            <div
                className="flex items-center justify-between px-4 py-3"
                style={{ backgroundColor: theme.colors.background, borderTop: `1px solid ${theme.colors.border}` }}
            >
                <div className="flex items-baseline gap-1.5">
                    <span className="text-[11px]" style={{ color: theme.colors.textSecondary }}>
                        Amount:
                    </span>
                    <span className="text-[15px] font-bold" style={{ color: theme.colors.textPrimary }}>
                        {order.amount}
                    </span>
                </div>
                <button
                    type="button"
                    className="flex items-center gap-0.5 text-[12px] font-bold transition-transform active:scale-95"
                    style={{ color: theme.colors.primary }}
                >
                    View Details
                    <ChevronRight size={14} />
                </button>
            </div>
        </div>
    );
}