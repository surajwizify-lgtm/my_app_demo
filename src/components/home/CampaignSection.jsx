import { useState } from 'react'
import theme from '@/styles/theme'
import SectionHeader from '@/components/common/SectionHeader'
import Badge from '@/components/common/Badge'
import { Calendar, ChevronRight } from 'lucide-react'

const campaigns = [
    {
        id: 1,
        title: 'Free Blood Pressure Checkup',
        description: 'Get your blood pressure checked for free at participating hospitals.',
        date: 'Dec 15, 2024',
        variant: 'danger',
        label: 'Free',
        gradient: `linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)`,
    },
    {
        id: 2,
        title: '50% Off Dental Checkup',
        description: 'Special discount on dental checkups at all partnered clinics.',
        date: 'Dec 20, 2024',
        variant: 'secondary',
        label: '50% Off',
        gradient: `linear-gradient(135deg, #10B981 0%, #059669 100%)`,
    },
    {
        id: 3,
        title: 'Free Eye Screening Camp',
        description: 'Annual eye screening camp with free consultation.',
        date: 'Dec 25, 2024',
        variant: 'accent',
        label: 'Free',
        gradient: `linear-gradient(135deg, #F59E0B 0%, #D97706 100%)`,
    },
]

export default function CampaignSection() {
    const [active, setActive] = useState(0)

    return (
        <div>
            <SectionHeader title="Campaigns" actionLabel="See All" onAction={() => { }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.sm }}>
                <div
                    style={{
                        display: 'flex',
                        gap: theme.spacing.sm,
                        overflowX: 'auto',
                        scrollbarWidth: 'none',
                        paddingBottom: '4px',
                    }}
                >
                    {campaigns.map((campaign, index) => (
                        <div
                            key={campaign.id}
                            onClick={() => setActive(index)}
                            style={{
                                minWidth: '280px',
                                background: campaign.gradient,
                                borderRadius: theme.borderRadius.xl,
                                padding: theme.spacing.lg,
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: theme.spacing.sm,
                            }}
                        >
                            <Badge label={campaign.label} variant="primary" size="sm" />
                            <h3
                                style={{
                                    margin: 0,
                                    fontSize: theme.fontSizes.lg,
                                    fontWeight: '700',
                                    color: theme.colors.white,
                                    lineHeight: '1.3',
                                }}
                            >
                                {campaign.title}
                            </h3>
                            <p
                                style={{
                                    margin: 0,
                                    fontSize: theme.fontSizes.sm,
                                    color: 'rgba(255,255,255,0.8)',
                                    lineHeight: '1.5',
                                }}
                            >
                                {campaign.description}
                            </p>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    marginTop: theme.spacing.xs,
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <Calendar size={14} color="rgba(255,255,255,0.8)" />
                                    <span
                                        style={{
                                            fontSize: theme.fontSizes.xs,
                                            color: 'rgba(255,255,255,0.8)',
                                            fontWeight: '500',
                                        }}
                                    >
                                        {campaign.date}
                                    </span>
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '4px',
                                        backgroundColor: 'rgba(255,255,255,0.2)',
                                        padding: '6px 12px',
                                        borderRadius: theme.borderRadius.full,
                                    }}
                                >
                                    <span style={{ fontSize: theme.fontSizes.xs, color: theme.colors.white, fontWeight: '600' }}>
                                        Join Now
                                    </span>
                                    <ChevronRight size={14} color={theme.colors.white} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '6px' }}>
                    {campaigns.map((_, index) => (
                        <div
                            key={index}
                            style={{
                                width: active === index ? '20px' : '6px',
                                height: '6px',
                                borderRadius: theme.borderRadius.full,
                                backgroundColor: active === index ? theme.colors.primary : theme.colors.border,
                                transition: 'all 0.3s ease',
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}