import { motion } from 'framer-motion'
import { Heart, Brain, Bone, Eye, Baby, Stethoscope, Pill, Microscope } from 'lucide-react'
import theme from '@/styles/theme'
import SectionHeader from '@/components/common/SectionHeader'

const departments = [
    { label: 'Cardiology', icon: Heart, color: theme.colors.danger, bg: theme.colors.dangerLight },
    { label: 'Neurology', icon: Brain, color: '#8B5CF6', bg: '#F5F3FF' },
    { label: 'Orthopedic', icon: Bone, color: '#F59E0B', bg: '#FFFBEB' },
    { label: 'Ophthalmology', icon: Eye, color: '#06B6D4', bg: '#ECFEFF' },
    { label: 'Pediatrics', icon: Baby, color: '#EC4899', bg: '#FDF2F8' },
    { label: 'General', icon: Stethoscope, color: theme.colors.primary, bg: theme.colors.primaryLight },
    { label: 'Pharmacy', icon: Pill, color: theme.colors.secondary, bg: theme.colors.secondaryLight },
    { label: 'Pathology', icon: Microscope, color: '#F97316', bg: '#FFF7ED' },
]

export default function DepartmentsSection() {
    return (
        <div>
            <SectionHeader title="Departments" actionLabel="See All" onAction={() => { }} />
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: theme.spacing.sm,
                }}
            >
                {departments.map(({ label, icon: Icon, color, bg }, index) => (
                    <motion.div
                        key={label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.07, duration: 0.3, ease: 'easeOut' }}
                        whileTap={{ scale: 0.92 }}
                        onClick={() => { }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '8px',
                            cursor: 'pointer',
                        }}
                    >
                        <div
                            style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: theme.borderRadius.lg,
                                backgroundColor: bg,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Icon size={24} color={color} />
                        </div>
                        <span
                            style={{
                                fontSize: theme.fontSizes.xs,
                                fontWeight: '600',
                                color: theme.colors.textSecondary,
                                textAlign: 'center',
                                lineHeight: '1.3',
                            }}
                        >
                            {label}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}