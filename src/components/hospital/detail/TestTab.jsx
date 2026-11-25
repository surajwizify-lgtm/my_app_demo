import { useNavigate } from "react-router-dom";
import { TestTube, Droplets, HeartPulse, Activity, Microscope, Syringe, Dna, FlaskConical, Scan } from "lucide-react";
import theme from "@/styles/theme";

const TESTS = [
    { id: 1, name: "CBC", category: "Hematology", icon: Droplets, price: "₹350" },
    { id: 2, name: "Blood Sugar", category: "Biochemistry", icon: TestTube, price: "₹150" },
    { id: 3, name: "Lipid Profile", category: "Cardiology", icon: HeartPulse, price: "₹550" },
    { id: 4, name: "ECG", category: "Cardiology", icon: Activity, price: "₹300" },
    { id: 5, name: "Thyroid", category: "Endocrinology", icon: FlaskConical, price: "₹450" },
    { id: 6, name: "Urine Test", category: "Pathology", icon: Microscope, price: "₹200" },
    { id: 7, name: "Vitamin D", category: "Nutrition", icon: Dna, price: "₹900" },
    { id: 8, name: "Vaccination", category: "Immunology", icon: Syringe, price: "₹600" },
    { id: 9, name: "CT Scan", category: "Radiology", icon: Scan, price: "₹2500" },
];

export default function TestTab() {
    const navigate = useNavigate();

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
                {TESTS.map(({ id, name, category, icon: Icon, price }) => (
                    <button
                        key={id}
                        type="button"
                        onClick={() => navigate(`/tests`)}
                        className="flex flex-col items-start gap-2 rounded-2xl p-3 text-left transition-transform active:scale-[0.98]"
                        style={{ backgroundColor: theme.colors.surface, border: `1px solid ${theme.colors.border}` }}
                    >
                        <div
                            className="flex h-10 w-10 items-center justify-center rounded-xl"
                            style={{ backgroundColor: theme.colors.primaryLight }}
                        >
                            <Icon size={18} color={theme.colors.primary} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[12px] font-semibold leading-tight" style={{ color: theme.colors.textPrimary }}>
                                {name}
                            </span>
                            <span className="text-[10px] font-medium mt-0.5" style={{ color: theme.colors.textMuted }}>
                                {category}
                            </span>
                        </div>
                        <span className="text-[11px] font-bold mt-1" style={{ color: theme.colors.secondary }}>
                            {price}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}