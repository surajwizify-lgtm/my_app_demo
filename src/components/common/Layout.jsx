import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import theme from '@/styles/theme'
import BottomNav from '@/components/common/BottomNav'

export default function Layout() {
    const location = useLocation()

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
            <div style={{ paddingBottom: '80px' }}>
                <AnimatePresence mode="wait">
                    <Outlet key={location.pathname} />
                </AnimatePresence>
            </div>
            <BottomNav />
        </div>
    )
}