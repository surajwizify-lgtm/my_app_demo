import { Star } from 'lucide-react'
import theme from '@/styles/theme'
import SectionHeader from '@/components/common/SectionHeader'

const specialists = [
    {
        id: 1,
        name: 'Dr. Anita Sharma',
        specialty: 'Cardiologist',
        rating: 4.9,
        experience: '12 yrs',
        initial: 'A',
        bg: '#d6ebfb',
        gradient: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
    },
    {
        id: 2,
        name: 'Dr. Rahul Verma',
        specialty: 'Neurologist',
        rating: 4.8,
        experience: '9 yrs',
        initial: 'R',
        bg: '#e6dffb',
        gradient: 'linear-gradient(135deg, #5b45d1, #8a6cf0)',
    },
    {
        id: 3,
        name: 'Dr. Sana Khan',
        specialty: 'Gynecologist',
        rating: 4.9,
        experience: '15 yrs',
        initial: 'S',
        bg: '#d3f3ec',
        gradient: 'linear-gradient(135deg, #0b8a7e, #27c1ae)',
    },
]

export default function SpecialistsSection() {
    return (
        <div>
            <SectionHeader title="Top Specialists" subtitle="Sample doctors, replace with live data" actionLabel="View all" onAction={() => { }} />
            <div
                style={{
                    display: 'flex',
                    gap: theme.spacing.md,
                    overflowX: 'auto',
                    scrollbarWidth: 'none',
                    paddingBottom: '4px',
                }}
            >
                {specialists.map((doctor) => (
                    <div
                        key={doctor.id}
                        style={{
                            minWidth: '160px',
                            borderRadius: theme.borderRadius.xl,
                            backgroundColor: doctor.bg,
                            padding: theme.spacing.md,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                            flexShrink: 0,
                        }}
                    >
                        <div style={{ position: 'relative', width: 'fit-content' }}>
                            <div
                                style={{
                                    width: '52px',
                                    height: '52px',
                                    borderRadius: '50%',
                                    background: doctor.gradient,
                                    color: theme.colors.white,
                                    display: 'grid',
                                    placeItems: 'center',
                                    fontWeight: '800',
                                    fontSize: '20px',
                                }}
                            >
                                {doctor.initial}
                            </div>
                            <span
                                style={{
                                    position: 'absolute',
                                    bottom: '2px',
                                    right: '0px',
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    backgroundColor: theme.colors.success,
                                    border: `2px solid ${theme.colors.white}`,
                                }}
                            />
                        </div>
                        <div>
                            <p
                                style={{
                                    margin: 0,
                                    fontSize: theme.fontSizes.sm,
                                    fontWeight: '700',
                                    color: theme.colors.textPrimary,
                                    lineHeight: '1.3',
                                }}
                            >
                                {doctor.name}
                            </p>
                            <p
                                style={{
                                    margin: '2px 0 0 0',
                                    fontSize: theme.fontSizes.xs,
                                    color: theme.colors.textSecondary,
                                    fontWeight: '500',
                                }}
                            >
                                {doctor.specialty}
                            </p>
                        </div>
                        <div
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px',
                                backgroundColor: theme.colors.white,
                                padding: '4px 8px',
                                borderRadius: theme.borderRadius.full,
                                width: 'fit-content',
                            }}
                        >
                            <Star size={12} color={theme.colors.accent} fill={theme.colors.accent} />
                            <span
                                style={{
                                    fontSize: theme.fontSizes.xs,
                                    fontWeight: '700',
                                    color: theme.colors.textPrimary,
                                }}
                            >
                                {doctor.rating} · {doctor.experience}
                            </span>
                        </div>
                        <div
                            onClick={() => { }}
                            style={{
                                backgroundColor: theme.colors.primary,
                                color: theme.colors.white,
                                fontSize: theme.fontSizes.xs,
                                fontWeight: '700',
                                padding: '8px 12px',
                                borderRadius: theme.borderRadius.full,
                                textAlign: 'center',
                                cursor: 'pointer',
                            }}
                        >
                            Book now
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}