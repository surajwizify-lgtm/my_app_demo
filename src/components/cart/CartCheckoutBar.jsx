import { ArrowRight } from "lucide-react";
import theme from "@/styles/theme";

export default function CartCheckoutBar({ total }) {
    return (
        <div
            className="fixed bottom-0 left-0 right-0 z-30 mx-auto flex max-w-[390px] items-center justify-between gap-3 px-2 py-3"
            style={{
                backgroundColor: theme.colors.surface,
                borderTop: `1px solid ${theme.colors.border}`,
                boxShadow: "0 -4px 16px rgba(14,76,107,0.08)",
            }}
        >
            <div className="flex flex-col">
                <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: theme.colors.textMuted }}>
                    Total Amount
                </span>
                <span className="text-[17px] font-bold leading-tight" style={{ color: theme.colors.textPrimary }}>
                    ₹{total.toLocaleString("en-IN")}
                </span>
            </div>
            <button
                type="button"
                className="flex flex-1 items-center justify-center gap-1.5 rounded-full py-3 text-sm font-bold text-white transition-transform active:scale-[0.98]"
                style={{ backgroundColor: theme.colors.primary }}
            >
                Proceed to Checkout
                <ArrowRight size={16} />
            </button>
        </div>
    );
}