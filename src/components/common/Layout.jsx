import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import theme from '@/styles/theme'
import BottomNav from '@/components/common/BottomNav'
import NextPageButton from '@/components/common/NextPageButton'

const HIDE_NAV_PATHS = [
    '/login',
    '/cart',
    // '/orders',
    '/tests',
    '/pathology'
]

export default function Layout() {
    const location = useLocation()

    const shouldShowNav =
        !HIDE_NAV_PATHS.includes(location.pathname) &&
        !location.pathname.startsWith('/hospitals/')

    return (
        <div
            style={{
                maxWidth: '480px',
                width: '100%',
                margin: '0 auto',
                paddingBottom: '80px',
                backgroundColor: theme.colors.background,
                minHeight: '100vh',
                position: 'relative',
            }}
        >
            <div style={{ paddingBottom: shouldShowNav ? '50px' : '0px' }}>
                <AnimatePresence mode="wait">
                    <Outlet key={location.pathname} />
                </AnimatePresence>
            </div>
            {<BottomNav />}
            {/* {shouldShowNav && <NextPageButton />} */}
        </div>
    )
}