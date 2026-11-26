import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, X, Check } from "lucide-react";
import theme from "@/styles/theme";

const PRIMARY_TABS = ["Overview", "Why Choose Us", "Services"];

const ALL_TABS = [
    "Overview",
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
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const handleSelect = (tab) => {
        onChange(tab);
        setIsSheetOpen(false);
    };

    return (
        <>
            <div
                className="sticky top-0 z-20 flex items-center gap-2 py-3 px-4 overflow-x-auto no-scrollbar"
                style={{ backgroundColor: theme.colors.background }}
            >
                {PRIMARY_TABS.map((tab) => {
                    const isActive = activeTab === tab;
                    return (
                        <button
                            key={tab}
                            type="button"
                            onClick={() => onChange(tab)}
                            className="shrink-0 rounded-full px-3 py-2 text-[12px] font-semibold transition-colors"
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

                <button
                    type="button"
                    onClick={() => setIsSheetOpen(true)}
                    className="flex h-[34px] shrink-0 items-center gap-1.5 rounded-full px-3 text-[12px] font-semibold"
                    style={{ backgroundColor: theme.colors.primaryLight, color: theme.colors.primary }}
                >
                    <LayoutGrid size={14} />
                    View All
                </button>
            </div>

            <AnimatePresence>
                {isSheetOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsSheetOpen(false)}
                            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
                        />
                        <div className="fixed inset-0 z-[110] flex justify-center pointer-events-none">
                            <motion.div
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "100%" }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="pointer-events-auto absolute bottom-0 w-full max-w-[480px] rounded-t-3xl px-5 pb-8 pt-4"
                                style={{ backgroundColor: theme.colors.surface }}
                            >
                                <div className="mx-auto mb-4 h-1 w-10 rounded-full" style={{ backgroundColor: theme.colors.border }} />

                                <div className="mb-4 flex items-center justify-between">
                                    <h2 className="text-lg font-bold" style={{ color: theme.colors.textPrimary, fontFamily: theme.fonts.heading }}>
                                        All Sections
                                    </h2>
                                    <button
                                        type="button"
                                        onClick={() => setIsSheetOpen(false)}
                                        className="flex h-8 w-8 items-center justify-center rounded-full"
                                        style={{ backgroundColor: theme.colors.background }}
                                    >
                                        <X size={16} color={theme.colors.textPrimary} />
                                    </button>
                                </div>

                                <div className="flex max-h-[60vh] flex-col gap-1.5 overflow-y-auto">
                                    {ALL_TABS.map((tab) => {
                                        const isActive = activeTab === tab;
                                        return (
                                            <button
                                                key={tab}
                                                type="button"
                                                onClick={() => handleSelect(tab)}
                                                className="flex items-center justify-between rounded-xl px-4 py-3 transition-colors"
                                                style={{
                                                    backgroundColor: isActive ? theme.colors.primaryLight : theme.colors.background,
                                                }}
                                            >
                                                <span
                                                    className="text-[14px] font-bold"
                                                    style={{ color: isActive ? theme.colors.primary : theme.colors.textPrimary }}
                                                >
                                                    {tab}
                                                </span>
                                                {isActive && <Check size={18} color={theme.colors.primary} />}
                                            </button>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}