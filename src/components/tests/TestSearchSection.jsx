import { Search } from "lucide-react";
import theme from "@/styles/theme";

export default function TestSearchSection() {
    return (
        <div className="px-4 pt-4 pb-2">
            <div
                className="flex items-center gap-2 rounded-full px-4 py-3"
                style={{ backgroundColor: theme.colors.surface, border: `1px solid ${theme.colors.border}` }}
            >
                <Search size={18} color={theme.colors.textMuted} />
                <input
                    type="text"
                    placeholder="Search tests, packages..."
                    className="flex-1 bg-transparent outline-none text-sm"
                    style={{ color: theme.colors.textPrimary, fontFamily: "Manrope, sans-serif" }}
                />
            </div>
        </div>
    );
}