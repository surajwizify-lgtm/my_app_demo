import { Heart, Brain, Wind, User, Bone, Baby } from 'lucide-react'
import theme from '@/styles/theme'
import SectionHeader from '@/components/common/SectionHeader'

const departments = [
    { label: 'Cardiology', icon: Heart, color: '#e5484d', bg: 'linear-gradient(145deg,#ffd9dc,#fff 130%)' },
    { label: 'Neurology', icon: Brain, color: '#3f8a14', bg: 'linear-gradient(145deg,#dff2c4,#fff 130%)' },
    { label: 'Pulmonology', icon: Wind, color: '#5b45d1', bg: 'linear-gradient(145deg,#e0dafb,#fff 130%)' },
    { label: 'Gynecology', icon: User, color: '#0b84c4', bg: 'linear-gradient(145deg,#d1ecfa,#fff 130%)' },
    { label: 'Orthopedics', icon: Bone, color: '#d4621f', bg: 'linear-gradient(145deg,#fddfc4,#fff 130%)' },
    { label: 'Pediatrics', icon: Baby, color: '#0b8a7e', bg: 'linear-gradient(145deg,#cdf2ec,#fff 130%)' },
]

export default function DepartmentsSection() {
    return (
        <div>
            <SectionHeader title="Departments" subtitle="Find a specialist by department" actionLabel="View all" onAction={() => { }} />
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: theme.spacing.sm,
                }}
            >
                {departments.map(({ label, icon: Icon, color, bg }) => (
                    <div
                        key={label}
                        onClick={() => { }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '8px',
                            cursor: 'pointer',
                            backgroundColor: theme.colors.white,
                            borderRadius: theme.borderRadius.lg,
                            padding: theme.spacing.md,
                            boxShadow: theme.shadows.soft,
                        }}
                    >
                        <div
                            style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: theme.borderRadius.md,
                                background: bg,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: color,
                            }}
                        >
                            <Icon size={27} color={color} strokeWidth={1.9} />
                        </div>
                        <span
                            style={{
                                fontSize: theme.fontSizes.sm,
                                fontWeight: '600',
                                color: theme.colors.textPrimary,
                                textAlign: 'center',
                                lineHeight: '1.3',
                            }}
                        >
                            {label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}