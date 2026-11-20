import theme from '@/styles/theme'
import SectionHeader from '@/components/common/SectionHeader'
import Avatar from '@/components/common/Avatar'
import Badge from '@/components/common/Badge'
import { Star, Clock } from 'lucide-react'

const specialists = [
    {
        id: 1,
        name: 'Dr. Sarah Johnson',
        specialty: 'Cardiologist',
        rating: 4.9,
        experience: '12 years',
        available: true,
    },
    {
        id: 2,
        name: 'Dr. Michael Chen',
        specialty: 'Neurologist',
        rating: 4.8,
        experience: '9 years',
        available: true,
    },
    {
        id: 3,
        name: 'Dr. Emily Davis',
        specialty: 'Pediatrician',
        rating: 4.7,
        experience: '7 years',
        available: false,
    },
    {
        id: 4,
        name: 'Dr. James Wilson',
        specialty: 'Orthopedic',
        rating: 4.9,
        experience: '15 years',
        available: true,
    },
]

export default function SpecialistsSection() {
    return (
        <div>
            <SectionHeader title="Top Specialists" actionLabel="See All" onAction={() => { }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.sm }}>
                {specialists.map((doctor) => (
                    <div
                        key={doctor.id}
                        onClick={() => { }}
                        style={{
                            backgroundColor: theme.colors.white,
                            borderRadius: theme.borderRadius.lg,
                            padding: theme.spacing.md,
                            display: 'flex',
                            alignItems: 'center',
                            gap: theme.spacing.md,
                            boxShadow: '0px 2px 12px rgba(0,0,0,0.06)',
                            cursor: 'pointer',
                        }}
                    >
                        <Avatar name={doctor.name} size="lg" online={doctor.available} />
                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <h4
                                    style={{
                                        margin: 0,
                                        fontSize: theme.fontSizes.md,
                                        fontWeight: '700',
                                        color: theme.colors.textPrimary,
                                    }}
                                >
                                    {doctor.name}
                                </h4>
                                <Badge
                                    label={doctor.available ? 'Available' : 'Busy'}
                                    variant={doctor.available ? 'secondary' : 'muted'}
                                    size="sm"
                                />
                            </div>
                            <p
                                style={{
                                    margin: '2px 0 8px 0',
                                    fontSize: theme.fontSizes.sm,
                                    color: theme.colors.textSecondary,
                                    fontWeight: '500',
                                }}
                            >
                                {doctor.specialty}
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.md }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <Star size={14} color={theme.colors.accent} fill={theme.colors.accent} />
                                    <span
                                        style={{
                                            fontSize: theme.fontSizes.xs,
                                            fontWeight: '600',
                                            color: theme.colors.textPrimary,
                                        }}
                                    >
                                        {doctor.rating}
                                    </span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <Clock size={14} color={theme.colors.textMuted} />
                                    <span
                                        style={{
                                            fontSize: theme.fontSizes.xs,
                                            color: theme.colors.textSecondary,
                                            fontWeight: '500',
                                        }}
                                    >
                                        {doctor.experience}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}