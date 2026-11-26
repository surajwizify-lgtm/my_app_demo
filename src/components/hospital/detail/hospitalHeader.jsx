import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import theme from "@/styles/theme";

export default function HospitalHeader() {
    const navigate = useNavigate();

    return (
        <div
            className="sticky top-0 z-30 flex items-center rounded-bl-3xl rounded-br-3xl  gap-3 px-2 py-4"
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
            <button
                type="button"
                onClick={() => navigate(-1)}
                className="flex h-9 w-9 items-center justify-center rounded-full"
                style={{ backgroundColor: theme.colors.background }}
            >
                <ArrowLeft size={18} color={theme.colors.textPrimary} />
            </button>
            <h1 className="text-base font-bold" style={{ color: theme.colors.white, fontFamily: theme.fonts.heading }}>
                Welcome to Hospital Panel
            </h1>
        </div>
    );
}