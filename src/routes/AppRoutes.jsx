import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/common/Layout'
import HomePage from '@/pages/HomePage'
import HospitalsPage from '@/pages/HospitalsPage'
import HospitalDetailPage from '@/pages/HospitalDetailPage'
import PathologyPage from '@/pages/PathologyPage'
import CampaignPage from '@/pages/CampaignPage'
import LoginPage from '@/pages/LoginPage'
import SignupPage from '@/pages/SignupPage'
import ProfilePage from '@/pages/ProfilePage'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/hospitals" element={<HospitalsPage />} />
                    <Route path="/hospitals/:id" element={<HospitalDetailPage />} />
                    <Route path="/pathology" element={<PathologyPage />} />
                    <Route path="/campaigns" element={<CampaignPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
            </Routes>
        </BrowserRouter>
    )
}