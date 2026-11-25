import theme from "@/styles/theme";

const TABS = [
    "Why Choose Us",
    "Services",
    "Test",
    "Report Doctors",
    "Facility Tour",
    "Reviews",
    "Prescription",
    "Scope of Services",
    "Packages",
    "Patient Experience Zone",
];

export default function HospitalTabsSection({ activeTab, onChange }) {
    return (
        <div
            className="sticky top-0 z-20 py-3"
            style={{ backgroundColor: theme.colors.background }}
        >
            <div className="flex gap-2 overflow-x-auto no-scrollbar px-4">
                {TABS.map((tab) => {
                    const isActive = activeTab === tab;
                    return (
                        <button
                            key={tab}
                            type="button"
                            onClick={() => onChange(tab)}
                            className="shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-colors"
                            style={{
                                backgroundColor: isActive ? theme.colors.primary : theme.colors.surface,
                                color: isActive ? "#fff" : theme.colors.textPrimary,
                                border: `1px solid ${isActive ? theme.colors.primary : theme.colors.border}`,
                            }}
                        >
                            {tab}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}