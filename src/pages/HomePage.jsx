import theme from '@/styles/theme'
import Navbar from '@/components/common/Navbar'
import PageTransition from '@/components/common/PageTransition'
import SearchSection from '@/components/home/SearchSection'
import EmergencySection from '@/components/home/EmergencySection'
import DepartmentsSection from '@/components/home/DepartmentsSection'
import CampaignSection from '@/components/home/CampaignSection'
import SpecialistsSection from '@/components/home/SpecialistsSection'
import HealthArticlesSection from '@/components/home/HealthArticlesSection'
import ArticlesCategorySection from '@/components/home/ArticlesCategorySection'
import BottomNav from '@/components/common/BottomNav'

export default function HomePage() {
    return (
        <PageTransition>
            <Navbar userName="John Doe" location="New York, US" />
            <div
                style={{
                    padding: `${theme.spacing.md} ${theme.spacing.md}`,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: theme.spacing.lg,
                }}
            >
                {/* <SearchSection /> */}
                <EmergencySection />
                <DepartmentsSection />
                <CampaignSection />
                <SpecialistsSection />
                <HealthArticlesSection />
                <ArticlesCategorySection />

            </div>
        </PageTransition>
    )
}