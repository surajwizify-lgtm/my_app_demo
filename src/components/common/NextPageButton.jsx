import { useNavigate, useLocation } from 'react-router-dom'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import theme from '@/styles/theme'

const PAGE_ORDER = [
    '/',
    "/login",
    '/orders',
    '/profile',
    '/hospitals',
    '/hospitals/1',
    '/cart',
    '/tests',
]

export default function NextPageButton() {
    const navigate = useNavigate()
    const location = useLocation()

    const currentIndex = PAGE_ORDER.indexOf(location.pathname)
    const prevPath = PAGE_ORDER[currentIndex - 1]
    const nextPath = PAGE_ORDER[currentIndex + 1]

    return (
        <div
            style={{
                position: 'fixed',
                bottom: '65px',
                right: '50%',
                transform: 'translateX(calc(195px - 12px))',
                display: 'flex',
                gap: '10px',
                zIndex: 1000,
            }}
        >
            {prevPath && (
                <button
                    onClick={() => navigate(prevPath)}
                    style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        backgroundColor: '#fff',
                        color: theme.colors.primary,
                        border: `2px solid ${theme.colors.primary}`,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
                    }}
                >
                    <ChevronLeft size={20} strokeWidth={2.5} />
                </button>
            )}

            {nextPath && (
                <button
                    onClick={() => navigate(nextPath)}
                    style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        backgroundColor: theme.colors.primary,
                        color: '#fff',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    }}
                >
                    <ChevronRight size={20} strokeWidth={2.5} />
                </button>
            )}
        </div>
    )
}