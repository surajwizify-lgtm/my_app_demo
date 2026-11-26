import { ArrowRight, Upload } from "lucide-react";
import theme from "@/styles/theme";

export default function PrescriptionTab() {
    return (
        <div className="px-2 py-4">
            <button
                type="button"
                className="flex w-full flex-col items-start rounded-2xl p-5 text-left transition-transform active:scale-[0.98]"
                style={{
                    backgroundColor: theme.colors.primaryLight,
                    border: `1px solid ${theme.colors.primary}`,
                }}
            >
                <div className="flex items-center gap-2">
                    <Upload size={18} color={theme.colors.primary} />
                    <h3 className="text-[15px] font-bold" style={{ color: theme.colors.textPrimary }}>
                        Order with Prescription
                    </h3>
                </div>
                <p className="mt-1 text-[12px] font-medium" style={{ color: theme.colors.textSecondary }}>
                    Upload your prescription & we do the rest
                </p>
                <div className="mt-4 flex items-center gap-2">
                    <span className="text-[13px] font-bold" style={{ color: theme.colors.primary }}>
                        Upload
                    </span>
                    <div
                        className="flex h-5 w-5 items-center justify-center rounded-full"
                        style={{ backgroundColor: theme.colors.success }}
                    >
                        <ArrowRight size={12} color="#fff" />
                    </div>
                </div>
            </button>
        </div>
    );
}