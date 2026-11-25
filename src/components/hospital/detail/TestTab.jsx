import { TestTube, Droplets, HeartPulse, Activity, Microscope, Syringe, Dna, FlaskConical, Scan } from "lucide-react";
import theme from "@/styles/theme";

const TESTS = [
    { name: "CBC", icon: Droplets, price: "₹350" },
    { name: "Blood Sugar", icon: TestTube, price: "₹150" },
    { name: "Lipid Profile", icon: HeartPulse, price: "₹550" },
    { name: "ECG", icon: Activity, price: "₹300" },
    { name: "Thyroid", icon: FlaskConical, price: "₹450" },
    { name: "Urine Test", icon: Microscope, price: "₹200" },
    { name: "Vitamin D", icon: Dna, price: "₹900" },
    { name: "Vaccination", icon: Syringe, price: "₹600" },
    { name: "CT Scan", icon: Scan, price: "₹2500" },
];

export default function TestTab() {
    return (
        <div className="px-4 py-4">
            <div className="mb-4">
                <h2 className="text-lg font-bold" style={{ color: theme.colors.textPrimary, fontFamily: theme.fonts.heading }}>
                    Lab Tests
                </h2>
                <p className="mt-1 text-xs" style={{ color: theme.colors.textSecondary }}>
                    Accurate diagnostics with same-day reports.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
                {TESTS.map(({ name, icon: Icon, price }) => (
                    <button
                        key={name}
                        type="button"
                        className="flex flex-col items-start gap-2 rounded-2xl p-3 text-left transition-transform active:scale-[0.98]"
                        style={{ backgroundColor: theme.colors.surface, border: `1px solid ${theme.colors.border}` }}
                    >
                        <div
                            className="flex h-10 w-10 items-center justify-center rounded-xl"
                            style={{ backgroundColor: theme.colors.primaryLight }}
                        >
                            <Icon size={18} color={theme.colors.primary} />
                        </div>
                        <span className="text-[12px] font-semibold leading-tight" style={{ color: theme.colors.textPrimary }}>
                            {name}
                        </span>
                        <span className="text-[11px] font-bold" style={{ color: theme.colors.secondary }}>
                            {price}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}