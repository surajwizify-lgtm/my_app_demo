import { useState } from 'react'
import { Home, Calendar, Phone, BookOpen, Menu } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import MenuDrawer from './MenuDrawer'

const navItems = [
    { label: 'Home', icon: Home, path: '/' },
    { label: 'Hospitals', icon: BookOpen, path: '/hospitals' },
    { label: 'Help', icon: Phone, path: null, sos: true },
    { label: 'Orders', icon: Calendar, path: '/orders' },
    { label: 'Menu', icon: Menu, isMenu: true },
]

export default function BottomNav() {
    const location = useLocation()
    const navigate = useNavigate()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            <div
                style={{
                    position: 'fixed',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    bottom: 'calc(env(safe-area-inset-bottom, 0px) + 5px)',
                    width: 'calc(100% - 28px)',
                    maxWidth: '460px',
                    height: '70px',
                    background: 'rgba(255,255,255,0.9)',
                    backdropFilter: 'blur(16px)',
                    borderRadius: '35px',
                    boxShadow: '0 14px 36px rgba(18,59,144,0.25)',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 80px 1fr 1fr',
                    alignItems: 'center',
                    zIndex: 100,
                }}
            >
                {navItems.map(({ label, icon: Icon, path, sos, isMenu }) => {
                    const active = path && location.pathname === path

                    if (sos) {
                        return (
                            <div
                                key={label}
                                onClick={() => window.open('tel:911')}
                                style={{
                                    width: '64px',
                                    height: '64px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg,#fd9a8f,#FA8072)',
                                    color: '#fff',
                                    justifySelf: 'center',
                                    marginTop: '-30px',
                                    display: 'grid',
                                    placeItems: 'center',
                                    alignContent: 'center',
                                    boxShadow: '0 12px 24px rgba(250,128,114,0.5)',
                                    border: '4px solid #f6f6f6',
                                    cursor: 'pointer',
                                    flexDirection: 'column',
                                    gap: '2px',
                                }}
                            >
                                <Icon size={22} strokeWidth={2.2} />
                                <span style={{ fontSize: '10.5px', fontWeight: '800' }}>{label}</span>
                            </div>
                        )
                    }

                    return (
                        <div
                            key={label}
                            onClick={() => {
                                if (isMenu) setIsMenuOpen(true)
                                else if (path) navigate(path)
                            }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '3px',
                                fontSize: '11px',
                                fontWeight: '700',
                                color: active ? '#1169CA' : '#5f7788',
                                cursor: 'pointer',
                            }}
                        >
                            <Icon size={24} strokeWidth={1.9} />
                            {label}
                        </div>
                    )
                })}
            </div>

            <MenuDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    )
}