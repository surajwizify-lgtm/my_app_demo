import { useState } from 'react'
import { motion } from 'framer-motion'
import theme from '@/styles/theme'
import SectionHeader from '@/components/common/SectionHeader'
import { Calendar, ChevronRight } from 'lucide-react'

const campaigns = [
    {
        id: 1,
        title: 'Free Blood Pressure Checkup',
        subtitle: 'Limited slots available',
        date: 'Dec 15, 2024',
        label: 'Free',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
        accent: '#1A56DB',
    },
    {
        id: 2,
        title: '50% Off Dental Checkup',
        subtitle: 'All partnered clinics',
        date: 'Dec 20, 2024',
        label: '50% Off',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
        accent: '#059669',
    },
    {
        id: 3,
        title: 'Free Eye Screening Camp',
        subtitle: 'Walk-in welcome',
        date: 'Dec 25, 2024',
        label: 'Free',
        image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=600&q=80',
        accent: '#D97706',
    },
]

export default function CampaignSection() {
    const [active, setActive] = useState(0)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
        >
            <SectionHeader title="Campaigns" actionLabel="View all" onAction={() => { }} />
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
                        <motion.div
                            key={campaign.id}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.4, ease: 'easeOut' }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setActive(index)}
                            style={{
                                minWidth: '300px',
                                borderRadius: theme.borderRadius.xl,
                                overflow: 'hidden',
                                cursor: 'pointer',
                                flexShrink: 0,
                                position: 'relative',
                                height: '180px',
                            }}
                        >
                            <img
                                src={campaign.image}
                                alt={campaign.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                            />
                            <div
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%)',
                                }}
                            />
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '12px',
                                    left: '12px',
                                    backgroundColor: campaign.accent,
                                    color: '#fff',
                                    fontSize: theme.fontSizes.xs,
                                    fontWeight: '700',
                                    padding: '4px 12px',
                                    borderRadius: '999px',
                                }}
                            >
                                {campaign.label}
                            </div>
                            <div
                                style={{
                                    position: 'absolute',
                                    bottom: '12px',
                                    left: '12px',
                                    right: '12px',
                                }}
                            >
                                <h3
                                    style={{
                                        margin: '0 0 2px',
                                        fontSize: theme.fontSizes.md,
                                        fontWeight: '700',
                                        color: '#fff',
                                        lineHeight: '1.3',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                    }}
                                >
                                    {campaign.title}
                                </h3>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        marginTop: '6px',
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                        <Calendar size={12} color="rgba(255,255,255,0.8)" />
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
                                            gap: '3px',
                                            backgroundColor: 'rgba(255,255,255,0.2)',
                                            backdropFilter: 'blur(4px)',
                                            padding: '5px 10px',
                                            borderRadius: '999px',
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: theme.fontSizes.xs,
                                                color: '#fff',
                                                fontWeight: '600',
                                            }}
                                        >
                                            Claim now
                                        </span>
                                        <ChevronRight size={12} color="#fff" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '6px' }}>
                    {campaigns.map((_, index) => (
                        <motion.div
                            key={index}
                            animate={{
                                width: active === index ? '20px' : '6px',
                                backgroundColor: active === index ? theme.colors.primary : theme.colors.border,
                            }}
                            transition={{ duration: 0.3 }}
                            style={{ height: '6px', borderRadius: '999px' }}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    )
}