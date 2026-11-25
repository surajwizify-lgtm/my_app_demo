import HospitalSearchSection from "@/components/hospital/HospitalSearchSection";
import HospitalFiltersSection from "@/components/hospital/HospitalFiltersSection";
import FeaturedHospitalsSection from "@/components/hospital/FeaturedHospitalsSection";
import NearbyHospitalsSection from "@/components/hospital/NearbyHospitalsSection";
import HospitalListSection from "@/components/hospital/HospitalListSection";

export default function HospitalsPage() {
    return (
        <div style={{ maxWidth: "390px", margin: "0 auto", position: "relative", minHeight: "100vh" }}>
            <HospitalSearchSection />
            <HospitalFiltersSection />
            <FeaturedHospitalsSection />
            <NearbyHospitalsSection />
            <HospitalListSection />
        </div>
    );
}