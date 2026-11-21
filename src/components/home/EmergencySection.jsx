import { Heart } from 'lucide-react'
import theme from '@/styles/theme'

export default function EmergencySection() {
    return (
        <div
            style={{
                backgroundColor: theme.colors.primaryLight,
                borderRadius: theme.borderRadius.xl,
                padding: theme.spacing.md,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <small
                    style={{
                        fontSize: theme.fontSizes.xs,
                        color: theme.colors.textSecondary,
                        fontWeight: '600',
                    }}
                >
                    Free camp · This Sunday
                </small>
                <p
                    style={{
                        margin: 0,
                        fontSize: theme.fontSizes.md,
                        fontWeight: '800',
                        color: theme.colors.textPrimary,
                        lineHeight: '1.3',
                    }}
                >
                    Heart, sugar & BP check-up
                </p>
                <div
                    onClick={() => { }}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        backgroundColor: theme.colors.primary,
                        color: theme.colors.white,
                        fontSize: theme.fontSizes.xs,
                        fontWeight: '700',
                        padding: '8px 16px',
                        borderRadius: theme.borderRadius.full,
                        cursor: 'pointer',
                        width: 'fit-content',
                        marginTop: '4px',
                    }}
                >
                    Register now
                </div>
            </div>
            <div
                style={{
                    color: theme.colors.primary,
                    opacity: 0.9,
                    flexShrink: 0,
                }}
            >
                <Heart size={72} strokeWidth={1.3} />
            </div>
        </div>
    )
}