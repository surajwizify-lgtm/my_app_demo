import { Home, Hospital, Megaphone, User, FlaskConical } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import theme from '../../styles/theme'

const navItems = [
    { label: 'Home', icon: Home, path: '/' },
    { label: 'Hospitals', icon: Hospital, path: '/hospitals' },
    { label: 'Pathology', icon: FlaskConical, path: '/pathology' },
    { label: 'Campaigns', icon: Megaphone, path: '/campaigns' },
    { label: 'Profile', icon: User, path: '/profile' },
]

export default function BottomNav() {
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <div
            style={{
                position: 'fixed',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100%',
                maxWidth: '390px',
                backgroundColor: theme.colors.white,
                borderTop: `1px solid ${theme.colors.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                padding: '10px 0 20px 0',
                zIndex: 100,
                boxShadow: '0px -2px 12px rgba(0,0,0,0.06)',
            }}
        >
            {navItems.map(({ label, icon: Icon, path }) => {
                const active = location.pathname === path
                return (
                    <div
                        key={path}
                        onClick={() => navigate(path)}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '4px',
                            cursor: 'pointer',
                            padding: '4px 12px',
                        }}
                    >
                        <div
                            style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: theme.borderRadius.md,
                                backgroundColor: active ? theme.colors.primaryLight : 'transparent',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.2s ease',
                            }}
                        >
                            <Icon size={20} color={active ? theme.colors.primary : theme.colors.textMuted} />
                        </div>
                        <span
                            style={{
                                fontSize: theme.fontSizes.xs,
                                fontWeight: active ? '700' : '500',
                                color: active ? theme.colors.primary : theme.colors.textMuted,
                            }}
                        >
                            {label}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}