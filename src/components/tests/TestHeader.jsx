import { ArrowLeft, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import theme from "@/styles/theme";

export default function TestHeader() {
    const navigate = useNavigate();

    return (
        <div
            className="sticky top-0 z-30 flex items-center rounded-bl-3xl rounded-br-3xl justify-between px-2 py-4"
            style={{ backgroundColor: theme.colors.primary, borderBottom: `1px solid ${theme.colors.border}` }}
        >
            <div
                className="absolute -top-6 -right-6 w-48 h-48 rounded-full"
                style={{ background: 'rgba(255,255,255,0.1)' }}
            />
            <div
                className="absolute top-10 right-10 w-28 h-28 rounded-full"
                style={{ background: 'rgba(255,255,255,0.08)' }}
            />
            <div className="flex items-center gap-3">
                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="flex h-9 w-9 items-center justify-center rounded-full"
                    style={{ backgroundColor: theme.colors.background }}
                >
                    <ArrowLeft size={18} color={theme.colors.textPrimary} />
                </button>
                <div className="flex flex-col">
                    <h1 className="text-base font-bold leading-tight" style={{ color: theme.colors.white, fontFamily: theme.fonts.heading }}>
                        Lab Tests
                    </h1>
                    <p className="text-[11px]" style={{ color: theme.colors.white }}>
                        Book diagnostic tests at home or hospital
                    </p>
                </div>
            </div>

            <button
                type="button"
                onClick={() => navigate('/cart')}
                className="flex h-9 w-9 items-center justify-center rounded-full"
                style={{ backgroundColor: theme.colors.primaryLight }}
            >
                <ShoppingCart size={18} color={theme.colors.primary} />
            </button>
        </div>
    );
}