import { useState } from "react";
import theme from "@/styles/theme";

const FILTERS = ["All", "Government", "Private", "Multi-Specialty", "Nearby", "24/7"];

export default function HospitalFiltersSection() {
    const [active, setActive] = useState("All");

    return (
        <div className="px-2 pb-3">
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
                {FILTERS.map((filter) => {
                    const isActive = active === filter;
                    return (
                        <button
                            key={filter}
                            type="button"
                            onClick={() => setActive(filter)}
                            className="shrink-0 rounded-full px-2 py-2 text-xs font-semibold transition-colors"
                            style={{
                                backgroundColor: isActive ? theme.colors.primary : theme.colors.surface,
                                color: isActive ? "#fff" : theme.colors.textPrimary,
                                border: `1px solid ${isActive ? theme.colors.primary : theme.colors.border}`,
                                fontFamily: "Manrope, sans-serif",
                            }}
                        >
                            {filter}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}