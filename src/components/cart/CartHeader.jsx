import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import theme from "@/styles/theme";

export default function CartHeader() {
    const navigate = useNavigate();

    return (
        <div
            className="sticky top-0 z-30 flex items-center gap-3 px-4 py-4"
            style={{ backgroundColor: theme.colors.surface, borderBottom: `1px solid ${theme.colors.border}` }}
        >
            <button
                type="button"
                onClick={() => navigate(-1)}
                className="flex h-9 w-9 items-center justify-center rounded-full"
                style={{ backgroundColor: theme.colors.background }}
            >
                <ArrowLeft size={18} color={theme.colors.textPrimary} />
            </button>
            <h1 className="text-base font-bold" style={{ color: theme.colors.textPrimary, fontFamily: theme.fonts.heading }}>
                My Cart
            </h1>
        </div>
    );
}