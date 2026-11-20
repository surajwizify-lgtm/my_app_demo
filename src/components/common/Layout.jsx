import { Outlet } from 'react-router-dom'
import theme from '@/styles/theme'
import BottomNav from '@/components/common/BottomNav'

export default function Layout() {
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
                <Outlet />
            </div>
            <BottomNav />
        </div>
    )
}