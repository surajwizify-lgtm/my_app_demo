import { useState } from "react";
import theme from "@/styles/theme";

const FILTERS = ["All", "Cardiology", "Diabetes", "Fever", "Gastroenterology", "Hematology", "Kidney", "Liver", "Neurology", "Obs & Gynae", "Orthopedics", "Respiratory", "Rheumatology"];

export default function TestFiltersSection() {
    const [active, setActive] = useState("All");

    return (
        <div className="px-2 pb-3">
            <div
                className="flex gap-2 overflow-x-auto"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {FILTERS.map((filter) => {
                    const isActive = active === filter;
                    return (
                        <button
                            key={filter}
                            type="button"
                            onClick={() => setActive(filter)}
                            className="shrink-0 rounded-full px-4 py-2 text-[12px] font-semibold transition-colors"
                            style={{
                                backgroundColor: isActive ? theme.colors.primary : theme.colors.surface,
                                color: isActive ? "#fff" : theme.colors.textPrimary,
                                border: `1px solid ${isActive ? theme.colors.primary : theme.colors.border}`,
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