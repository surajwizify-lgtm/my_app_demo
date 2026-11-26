import WhyChooseUsTab from "./WhyChooseUsTab";
import ServicesTab from "./ServicesTab";
import TestTab from "./TestTab";
import ReportDoctorsTab from "./ReportDoctorsTab";
import FacilityTourTab from "./FacilityTourTab";
import ReviewsTab from "./ReviewsTab";
import PrescriptionTab from "./PrescriptionTab";
import ScopeOfServicesTab from "./ScopeOfServicesTab";
import PackagesTab from "./PackagesTab";
import PatientExperienceZoneTab from "./PatientExperienceZoneTab";

export default function OverviewTab() {
    return (
        <div className="flex flex-col gap-2 pb-8">
            <WhyChooseUsTab />
            <ServicesTab />
            <TestTab />
            <ReportDoctorsTab />
            <FacilityTourTab />
            <ReviewsTab />
            <PrescriptionTab />
            <ScopeOfServicesTab />
            <PackagesTab />
            <PatientExperienceZoneTab />
        </div>
    );
}