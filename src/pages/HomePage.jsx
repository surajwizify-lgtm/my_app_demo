import theme from '../styles/theme'
import Navbar from '../components/common/Navbar'
import BottomNav from '../components/common/BottomNav'
import SearchSection from '../components/home/SearchSection'
import EmergencySection from '../components/home/EmergencySection'
import DepartmentsSection from '../components/home/DepartmentsSection'
import CampaignSection from '../components/home/CampaignSection'
import SpecialistsSection from '../components/home/SpecialistsSection'
import HealthArticlesSection from '../components/home/HealthArticlesSection'
import ArticlesCategorySection from '../components/home/ArticlesCategorySection'

export default function HomePage() {
    return (
        <div
            style={{
                maxWidth: '390px',
                margin: '0 auto',
                backgroundColor: theme.colors.background,
                minHeight: '100vh',
                position: 'relative',
            }}
        >
            <Navbar userName="John Doe" location="New York, US" />
            <div
                style={{
                    padding: `${theme.spacing.md} ${theme.spacing.md}`,
                    paddingBottom: '100px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: theme.spacing.lg,
                }}
            >
                <SearchSection />
                <EmergencySection />
                <DepartmentsSection />
                <CampaignSection />
                <SpecialistsSection />
                <HealthArticlesSection />
                <ArticlesCategorySection />
            </div>
            <BottomNav />
        </div>
    )
}