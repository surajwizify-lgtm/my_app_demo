import { useState } from "react";
import { Plus, Check, Clock } from "lucide-react";
import theme from "@/styles/theme";

export default function TestItemCard({ test }) {
    const [added, setAdded] = useState(false);

    return (
        <div
            className="flex flex-col rounded-2xl p-4"
            style={{
                backgroundColor: theme.colors.surface,
                border: `1px solid ${theme.colors.border}`,
                boxShadow: theme.shadows.soft,
            }}
        >
            <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                    <h3 className="text-[14px] font-bold leading-tight" style={{ color: theme.colors.textPrimary }}>
                        {test.name}
                    </h3>
                    <p className="mt-1 text-[11px]" style={{ color: theme.colors.textSecondary }}>
                        {test.parametersCount} Parameters included
                    </p>
                </div>
                {test.fastingRequired && (
                    <div
                        className="flex shrink-0 items-center gap-1 rounded-full px-2 py-1"
                        style={{ backgroundColor: theme.colors.warningLight, color: theme.colors.warning }}
                    >
                        <Clock size={10} />
                        <span className="text-[9px] font-bold uppercase tracking-wider">Fasting</span>
                    </div>
                )}
            </div>

            <div className="mt-4 flex items-center justify-between border-t pt-3" style={{ borderColor: theme.colors.border }}>
                <div className="flex items-baseline gap-2">
                    <span className="text-[16px] font-bold" style={{ color: theme.colors.primary }}>
                        ₹{test.discountedPrice.toLocaleString("en-IN")}
                    </span>
                    <span className="text-[12px] line-through" style={{ color: theme.colors.textMuted }}>
                        ₹{test.markedPrice.toLocaleString("en-IN")}
                    </span>
                </div>

                <button
                    type="button"
                    onClick={() => setAdded(!added)}
                    className="flex h-8 min-w-[70px] items-center justify-center gap-1 rounded-full px-3 text-[12px] font-bold transition-all active:scale-95"
                    style={{
                        backgroundColor: added ? theme.colors.successLight : theme.colors.primaryLight,
                        color: added ? theme.colors.success : theme.colors.primary,
                        border: `1px solid ${added ? theme.colors.success : theme.colors.primary}`,
                    }}
                >
                    {added ? (
                        <>
                            <Check size={14} /> Added
                        </>
                    ) : (
                        <>
                            <Plus size={14} /> Add
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}