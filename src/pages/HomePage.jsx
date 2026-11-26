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
import ArticlesCategorySection2 from '@/components/home/ArticlesCategorySection2'

export default function HomePage() {
    return (
        <div>
            <Navbar userName="John Doe" location="New York, US" />
            <div
                style={{
                    padding: `${theme.spacing.sm} ${theme.spacing.sm}`,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: theme.spacing.lg,
                }}
            >
                {/* <SearchSection /> */}
                <div className='mt-5'>
                    <EmergencySection />
                </div>
                <DepartmentsSection />
                <CampaignSection />
                <SpecialistsSection />
                <HealthArticlesSection />
                <ArticlesCategorySection />
                <ArticlesCategorySection2 />
            </div>
        </div>
    )
}