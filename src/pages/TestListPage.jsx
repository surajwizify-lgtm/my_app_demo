import TestHeader from "@/components/tests/TestHeader";
import TestSearchSection from "@/components/tests/TestSearchSection";
import TestFiltersSection from "@/components/tests/TestFiltersSection";
import TestItemCard from "@/components/tests/TestItemCard";
import theme from "@/styles/theme";

const TESTS = [
    { id: 1, name: "Complete Blood Count (CBC)", parametersCount: 24, discountedPrice: 350, markedPrice: 500, fastingRequired: false },
    { id: 2, name: "Lipid Profile", parametersCount: 8, discountedPrice: 550, markedPrice: 800, fastingRequired: true },
    { id: 3, name: "Thyroid Profile (T3, T4, TSH)", parametersCount: 3, discountedPrice: 450, markedPrice: 700, fastingRequired: true },
    { id: 4, name: "Fasting Blood Sugar (FBS)", parametersCount: 1, discountedPrice: 150, markedPrice: 250, fastingRequired: true },
    { id: 5, name: "Liver Function Test (LFT)", parametersCount: 11, discountedPrice: 650, markedPrice: 900, fastingRequired: true },
    { id: 6, name: "Vitamin D (25-OH)", parametersCount: 1, discountedPrice: 900, markedPrice: 1400, fastingRequired: false },
    { id: 7, name: "Kidney Function Test (KFT)", parametersCount: 10, discountedPrice: 600, markedPrice: 850, fastingRequired: true },
    { id: 8, name: "HbA1c (Glycated Hemoglobin)", parametersCount: 1, discountedPrice: 400, markedPrice: 600, fastingRequired: false },
];

export default function TestListPage() {
    return (
        <div style={{ backgroundColor: theme.colors.background, minHeight: "100vh" }}>
            <TestHeader />
            <TestSearchSection />
            <TestFiltersSection />

            <div className="flex flex-col gap-3 px-4 pb-8 pt-1">
                {TESTS.map((test) => (
                    <TestItemCard key={test.id} test={test} />
                ))}
            </div>
        </div>
    );
}