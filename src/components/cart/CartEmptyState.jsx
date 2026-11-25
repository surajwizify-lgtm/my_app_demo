import { ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import theme from "@/styles/theme";

export default function CartEmptyState() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center px-6 py-20">
            <div
                className="mb-5 flex h-24 w-24 items-center justify-center rounded-full"
                style={{ backgroundColor: theme.colors.primaryLight }}
            >
                <ShoppingBag size={40} color={theme.colors.primary} />
            </div>
            <h2 className="text-xl font-bold" style={{ color: theme.colors.textPrimary, fontFamily: theme.fonts.heading }}>
                Your Cart is Empty
            </h2>
            <p className="mt-2 text-center text-sm leading-relaxed" style={{ color: theme.colors.textSecondary }}>
                Looks like you haven't added any services or packages yet.
            </p>
            <button
                type="button"
                onClick={() => navigate("/hospitals")}
                className="mt-6 rounded-full px-8 py-3 text-sm font-bold text-white transition-transform active:scale-95"
                style={{ backgroundColor: theme.colors.primary }}
            >
                Browse Services
            </button>
        </div>
    );
}