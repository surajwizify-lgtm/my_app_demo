import { Search, SlidersHorizontal } from "lucide-react";
import theme from "@/styles/theme";

export default function HospitalSearchSection() {
    return (
        <div className="px-4 pt-4 pb-2">
            <div
                className="flex items-center gap-2 rounded-full px-4 py-3"
                style={{ backgroundColor: theme.colors.surface, border: `1px solid ${theme.colors.border}` }}
            >
                <Search size={18} color={theme.colors.textMuted} />
                <input
                    type="text"
                    placeholder="Search hospitals, specialties..."
                    className="flex-1 bg-transparent outline-none text-sm"
                    style={{ color: theme.colors.textPrimary, fontFamily: "Manrope, sans-serif" }}
                />
                <button
                    type="button"
                    className="flex items-center justify-center rounded-full p-2"
                    style={{ backgroundColor: theme.colors.primary }}
                >
                    <SlidersHorizontal size={16} color="#fff" />
                </button>
            </div>
        </div>
    );
}