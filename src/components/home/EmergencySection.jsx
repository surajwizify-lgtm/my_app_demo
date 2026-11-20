import { Phone, Ambulance } from 'lucide-react'
import theme from '@/styles/theme'
import Card from '@/components/common/Card'

export default function EmergencySection() {
    return (
        <div
            style={{
                background: `linear-gradient(135deg, ${theme.colors.danger} 0%, #C0392B 100%)`,
                borderRadius: theme.borderRadius.xl,
                padding: theme.spacing.lg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.sm }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Ambulance size={20} color={theme.colors.white} />
                    <span
                        style={{
                            fontSize: theme.fontSizes.xs,
                            fontWeight: '600',
                            color: 'rgba(255,255,255,0.8)',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                        }}
                    >
                        Emergency
                    </span>
                </div>
                <h3
                    style={{
                        margin: 0,
                        fontSize: theme.fontSizes.xl,
                        fontWeight: '800',
                        color: theme.colors.white,
                        lineHeight: '1.3',
                    }}
                >
                    Need Urgent Help?
                </h3>
                <p
                    style={{
                        margin: 0,
                        fontSize: theme.fontSizes.sm,
                        color: 'rgba(255,255,255,0.8)',
                    }}
                >
                    Call emergency services immediately
                </p>
                <div
                    onClick={() => window.open('tel:911')}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        backgroundColor: theme.colors.white,
                        color: theme.colors.danger,
                        fontWeight: '700',
                        fontSize: theme.fontSizes.sm,
                        padding: '10px 20px',
                        borderRadius: theme.borderRadius.full,
                        cursor: 'pointer',
                        marginTop: theme.spacing.xs,
                        width: 'fit-content',
                    }}
                >
                    <Phone size={16} />
                    Call 911
                </div>
            </div>
            <div
                style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: theme.borderRadius.full,
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                }}
            >
                <Ambulance size={40} color={theme.colors.white} />
            </div>
        </div>
    )
}