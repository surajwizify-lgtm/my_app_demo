import { Bell, MapPin } from 'lucide-react'
import theme from '../../styles/theme'
import Avatar from './Avatar'

export default function Navbar({ userName = 'John Doe', location = 'New York, US' }) {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: `${theme.spacing.md} ${theme.spacing.md}`,
                backgroundColor: theme.colors.white,
                position: 'sticky',
                top: 0,
                zIndex: 100,
                boxShadow: '0px 1px 8px rgba(0,0,0,0.06)',
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Avatar name={userName} size="md" />
                <div>
                    <p
                        style={{
                            margin: 0,
                            fontSize: theme.fontSizes.xs,
                            color: theme.colors.textSecondary,
                            fontWeight: '500',
                        }}
                    >
                        Good Morning
                    </p>
                    <p
                        style={{
                            margin: 0,
                            fontSize: theme.fontSizes.md,
                            color: theme.colors.textPrimary,
                            fontWeight: '700',
                        }}
                    >
                        {userName}
                    </p>
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        backgroundColor: theme.colors.primaryLight,
                        padding: '6px 10px',
                        borderRadius: theme.borderRadius.full,
                    }}
                >
                    <MapPin size={14} color={theme.colors.primary} />
                    <span
                        style={{
                            fontSize: theme.fontSizes.xs,
                            color: theme.colors.primary,
                            fontWeight: '600',
                        }}
                    >
                        {location}
                    </span>
                </div>

                <div
                    style={{
                        position: 'relative',
                        width: '38px',
                        height: '38px',
                        borderRadius: theme.borderRadius.full,
                        backgroundColor: theme.colors.background,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                    }}
                >
                    <Bell size={18} color={theme.colors.textPrimary} />
                    <span
                        style={{
                            position: 'absolute',
                            top: '6px',
                            right: '6px',
                            width: '8px',
                            height: '8px',
                            borderRadius: theme.borderRadius.full,
                            backgroundColor: theme.colors.danger,
                            border: `2px solid ${theme.colors.white}`,
                        }}
                    />
                </div>
            </div>
        </div>
    )
}