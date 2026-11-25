import { Minus, Plus, Trash2, Package } from "lucide-react";
import theme from "@/styles/theme";

export default function CartItemCard({ item, onQtyChange, onRemove }) {
    return (
        <div
            className="flex flex-col rounded-2xl p-3"
            style={{
                backgroundColor: theme.colors.surface,
                border: `1px solid ${theme.colors.border}`,
                boxShadow: theme.shadows.soft,
            }}
        >
            <div className="flex items-start gap-3">
                <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl"
                    style={{ backgroundColor: theme.colors.primaryLight }}
                >
                    {item.image ? (
                        <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full rounded-xl object-cover"
                        />
                    ) : (
                        <Package size={24} color={theme.colors.primary} />
                    )}
                </div>

                <div className="min-w-0 flex-1">
                    <h3 className="text-[14px] font-bold leading-tight" style={{ color: theme.colors.textPrimary }}>
                        {item.name}
                    </h3>
                    <p className="mt-1 text-[11px]" style={{ color: theme.colors.textSecondary }}>
                        {item.category || "General Service"}
                    </p>
                </div>

                <button
                    type="button"
                    onClick={() => onRemove(item.id)}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: theme.colors.dangerLight }}
                >
                    <Trash2 size={14} color={theme.colors.danger} />
                </button>
            </div>

            <div className="mt-3 flex items-center justify-between border-t pt-3" style={{ borderColor: theme.colors.border }}>
                <span className="text-[15px] font-bold" style={{ color: theme.colors.primary }}>
                    ₹{item.price.toLocaleString("en-IN")}
                </span>

                <div
                    className="flex items-center gap-3 rounded-full px-2 py-1"
                    style={{ backgroundColor: theme.colors.background, border: `1px solid ${theme.colors.border}` }}
                >
                    <button
                        type="button"
                        onClick={() => onQtyChange(item.id, Math.max(1, item.qty - 1))}
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm"
                        style={{ color: theme.colors.textPrimary }}
                    >
                        <Minus size={12} />
                    </button>
                    <span className="w-4 text-center text-[13px] font-bold" style={{ color: theme.colors.textPrimary }}>
                        {item.qty}
                    </span>
                    <button
                        type="button"
                        onClick={() => onQtyChange(item.id, item.qty + 1)}
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm"
                        style={{ color: theme.colors.primary }}
                    >
                        <Plus size={12} />
                    </button>
                </div>
            </div>
        </div>
    );
}