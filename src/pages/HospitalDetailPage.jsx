import { useState } from "react";
import { useParams } from "react-router-dom";
import HospitalHeroSection from "@/components/hospital/detail/HospitalHeroSection";
import HospitalTabsSection from "@/components/hospital/detail/HospitalTabsSection";
import WhyChooseUsTab from "@/components/hospital/detail/WhyChooseUsTab";
import ServicesTab from "@/components/hospital/detail/ServicesTab";
import TestTab from "@/components/hospital/detail/TestTab";
import ReportDoctorsTab from "@/components/hospital/detail/ReportDoctorsTab";
import FacilityTourTab from "@/components/hospital/detail/FacilityTourTab";
import ReviewsTab from "@/components/hospital/detail/ReviewsTab";
import PrescriptionTab from "@/components/hospital/detail/PrescriptionTab";
import ScopeOfServicesTab from "@/components/hospital/detail/ScopeOfServicesTab";
import PackagesTab from "@/components/hospital/detail/PackagesTab";
import PatientExperienceZoneTab from "@/components/hospital/detail/PatientExperienceZoneTab";
import theme from "@/styles/theme";

const HOSPITALS = {
    "1": { id: 1, name: "City Care Hospital", rating: 4.8, location: "Downtown", distance: "2.4 km", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80" },
    "2": { id: 2, name: "Green Valley Medical", rating: 4.6, location: "Riverside", distance: "3.1 km", image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80" },
    "3": { id: 3, name: "Sunrise Health Center", rating: 4.9, location: "Uptown", distance: "1.8 km", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80" },
    "4": { id: 4, name: "Lakeside Clinic", rating: 4.5, location: "Lake Road", distance: "0.8 km", image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80" },
    "5": { id: 5, name: "Metro General Hospital", rating: 4.7, location: "Central Ave", distance: "1.2 km", image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80" },
    "6": { id: 6, name: "Pinewood Medical", rating: 4.4, location: "Pinewood St", distance: "1.6 km", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80" },
};

const TAB_COMPONENTS = {
    "Why Choose Us": WhyChooseUsTab,
    "Services": ServicesTab,
    "Test": TestTab,
    "Report Doctors": ReportDoctorsTab,
    "Facility Tour": FacilityTourTab,
    "Reviews": ReviewsTab,
    "Prescription": PrescriptionTab,
    "Scope of Services": ScopeOfServicesTab,
    "Packages": PackagesTab,
    "Patient Experience Zone": PatientExperienceZoneTab,
};

export default function HospitalDetailPage() {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState("Why Choose Us");

    const hospital = HOSPITALS[id] || HOSPITALS["1"];
    const ActiveTab = TAB_COMPONENTS[activeTab];

    return (
        <div style={{ margin: "0 auto", position: "relative", minHeight: "100vh", backgroundColor: theme.colors.background }}>
            <HospitalHeroSection hospital={hospital} />
            <HospitalTabsSection activeTab={activeTab} onChange={setActiveTab} />
            <div className="pb-8">
                <ActiveTab />
            </div>
        </div>
    );
}