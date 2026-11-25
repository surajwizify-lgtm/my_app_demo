import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Stethoscope, Eye, Sparkles, User, ChevronDown, ChevronUp } from 'lucide-react'
import theme from '@/styles/theme'
import SectionHeader from '@/components/common/SectionHeader'

const SPECIALTIES = [
    {
        id: 1,
        name: 'Dental',
        subtitle: 'Teeth & gum care',
        icon: Stethoscope,
        bg: '#e8f0fe',
        color: '#1a3fa8',
        treatments: ['Braces', 'Root canal', 'Implants', 'Cleaning'],
    },
    {
        id: 2,
        name: 'Eyes',
        subtitle: 'Vision & eye care',
        icon: Eye,
        bg: '#f3e8ff',
        color: '#7e22ce',
        treatments: ['Cataract', 'Glaucoma', 'Lasik', 'Checkup'],
    },
    {
        id: 3,
        name: 'Skin & Cosmetic',
        subtitle: 'Skin, hair & beauty',
        icon: Sparkles,
        bg: '#ffe4e6',
        color: '#be123c',
        treatments: ['Acne', 'Anti-aging', 'Hair loss', 'Laser'],
    },
    {
        id: 4,
        name: 'Gynecology',
        subtitle: "Women's health",
        icon: User,
        bg: '#ccfbf1',
        color: '#0f766e',
        treatments: ['Pregnancy', 'PCOS', 'Infertility', 'Checkup'],
    },
]

export default function SpecialistsSection() {
    const [expandedId, setExpandedId] = useState(1)

    return (
        <div className="py-4">
            <SectionHeader
                title="Top Specialties"
                subtitle="Choose a specialty to see its doctors"
                actionLabel="View all"
                onAction={() => { }}
            />

            <div className="flex flex-col gap-3">
                {SPECIALTIES.map((specialty) => {
                    const isExpanded = expandedId === specialty.id
                    const Icon = specialty.icon

                    return (
                        <div
                            key={specialty.id}
                            className="overflow-hidden rounded-2xl transition-all"
                            style={{
                                backgroundColor: theme.colors.surface,
                                border: `1px solid ${isExpanded ? theme.colors.border : theme.colors.border}`,
                                boxShadow: isExpanded ? theme.shadows.soft : 'none',
                            }}
                        >
                            <button
                                type="button"
                                onClick={() => setExpandedId(isExpanded ? null : specialty.id)}
                                className="flex w-full items-center gap-4 p-4 text-left"
                            >
                                <div
                                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                                    style={{ backgroundColor: specialty.bg, color: specialty.color }}
                                >
                                    <Icon size={24} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-base font-bold" style={{ color: theme.colors.textPrimary }}>
                                        {specialty.name}
                                    </h3>
                                    <p className="text-xs" style={{ color: theme.colors.textSecondary }}>
                                        {specialty.subtitle}
                                    </p>
                                </div>
                                <div
                                    className="flex h-8 w-8 items-center justify-center rounded-full"
                                    style={{ backgroundColor: isExpanded ? theme.colors.primaryLight : theme.colors.background }}
                                >
                                    {isExpanded ? (
                                        <ChevronUp size={16} color={theme.colors.primary} />
                                    ) : (
                                        <ChevronDown size={16} color={theme.colors.textSecondary} />
                                    )}
                                </div>
                            </button>

                            <AnimatePresence>
                                {isExpanded && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="px-4 pb-4">
                                            <div className="mb-4 flex flex-wrap gap-2">
                                                {specialty.treatments.map((treatment) => (
                                                    <span
                                                        key={treatment}
                                                        className="rounded-full px-3 py-1.5 text-xs font-bold"
                                                        style={{ backgroundColor: theme.colors.background, color: theme.colors.textPrimary }}
                                                    >
                                                        {treatment}
                                                    </span>
                                                ))}
                                            </div>
                                            <button
                                                type="button"
                                                className="w-full rounded-full py-3 text-sm font-bold text-white transition-transform active:scale-[0.98]"
                                                style={{ backgroundColor: theme.colors.primary }}
                                            >
                                                View all
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}