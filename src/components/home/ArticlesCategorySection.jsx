import theme from '@/styles/theme'
import SectionHeader from '@/components/common/SectionHeader'
import { Heart, Brain, Bone, Eye, Baby, Stethoscope, Pill, Microscope } from 'lucide-react'

const categories = [
    { label: 'Cardiology', icon: Heart, color: theme.colors.danger, bg: theme.colors.dangerLight, count: 24 },
    { label: 'Neurology', icon: Brain, color: '#8B5CF6', bg: '#F5F3FF', count: 18 },
    { label: 'Orthopedic', icon: Bone, color: '#F59E0B', bg: '#FFFBEB', count: 15 },
    { label: 'Ophthalmology', icon: Eye, color: '#06B6D4', bg: '#ECFEFF', count: 12 },
    { label: 'Pediatrics', icon: Baby, color: '#EC4899', bg: '#FDF2F8', count: 20 },
    { label: 'General', icon: Stethoscope, color: theme.colors.primary, bg: theme.colors.primaryLight, count: 32 },
    { label: 'Pharmacy', icon: Pill, color: theme.colors.secondary, bg: theme.colors.secondaryLight, count: 10 },
    { label: 'Pathology', icon: Microscope, color: '#F97316', bg: '#FFF7ED', count: 8 },
]

export default function ArticlesCategorySection() {
    return (
        <div>
            <SectionHeader title="Browse by Category" actionLabel="See All" onAction={() => { }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.sm }}>
                {categories.map(({ label, icon: Icon, color, bg, count }) => (
                    <div
                        key={label}
                        onClick={() => { }}
                        style={{
                            backgroundColor: theme.colors.white,
                            borderRadius: theme.borderRadius.lg,
                            padding: `${theme.spacing.sm} ${theme.spacing.md}`,
                            display: 'flex',
                            alignItems: 'center',
                            gap: theme.spacing.md,
                            boxShadow: '0px 2px 12px rgba(0,0,0,0.06)',
                            cursor: 'pointer',
                        }}
                    >
                        <div
                            style={{
                                width: '44px',
                                height: '44px',
                                borderRadius: theme.borderRadius.md,
                                backgroundColor: bg,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                            }}
                        >
                            <Icon size={20} color={color} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <h4
                                style={{
                                    margin: 0,
                                    fontSize: theme.fontSizes.md,
                                    fontWeight: '700',
                                    color: theme.colors.textPrimary,
                                }}
                            >
                                {label}
                            </h4>
                            <p
                                style={{
                                    margin: 0,
                                    fontSize: theme.fontSizes.xs,
                                    color: theme.colors.textSecondary,
                                }}
                            >
                                {count} articles
                            </p>
                        </div>
                        <div
                            style={{
                                backgroundColor: bg,
                                color: color,
                                fontSize: theme.fontSizes.xs,
                                fontWeight: '700',
                                padding: '4px 10px',
                                borderRadius: theme.borderRadius.full,
                            }}
                        >
                            {count}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}