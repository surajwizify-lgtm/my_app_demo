import { useState } from 'react'
import { motion } from 'framer-motion'
import theme from '@/styles/theme'
import SectionHeader from '@/components/common/SectionHeader'
import { Calendar, Tag, Copy } from 'lucide-react'

const campaigns = [
    {
        id: 1,
        title: 'Health Quest Lab Test Discount',
        date: 'Dec 31, 2026',
        label: '40% OFF',
        coupon: 'COUPON_40',
        image: 'https://latest.healthynxt.com/uploads/campaigns/a33f0cc2af8f406633b8a00b8d1b9871.webp',
        accent: '#1A56DB',
        accentLight: '#EEF2FF',
    },
    {
        id: 2,
        title: '50% Off Dental Checkup',
        date: 'Dec 20, 2026',
        label: '50% OFF',
        coupon: 'DENTAL50',
        image: 'https://latest.healthynxt.com/uploads/campaigns/92d98d9d25a7f16377e66df64751ac97.webp',
        accent: '#059669',
        accentLight: '#ECFDF5',
    },
    {
        id: 3,
        title: 'Free Eye Screening Camp',
        date: 'Dec 25, 2026',
        label: 'Free',
        coupon: 'EYECAMP',
        image: 'https://latest.healthynxt.com/uploads/campaigns/ce2b8999d1e4772b363a258246ea40b2.webp',
        accent: '#D97706',
        accentLight: '#FFFBEB',
    },
]

export default function CampaignSection() {
    const [active, setActive] = useState(0)
    const [copied, setCopied] = useState(null)

    const handleCopy = (e, coupon, id) => {
        e.stopPropagation()
        navigator.clipboard.writeText(coupon)
        setCopied(id)
        setTimeout(() => setCopied(null), 1500)
    }

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
                                minWidth: '290px',
                                borderRadius: theme.borderRadius.xl,
                                overflow: 'hidden',
                                cursor: 'pointer',
                                flexShrink: 0,
                                maxWidth: '350px',
                                position: 'relative',
                                height: '190px',
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
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.0) 55%)',
                                }}
                            />

                            <div
                                style={{
                                    position: 'absolute',
                                    top: '10px',
                                    left: '10px',
                                    backgroundColor: campaign.accent,
                                    color: '#fff',
                                    fontSize: '11px',
                                    fontWeight: '800',
                                    padding: '3px 10px',
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
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '8px',
                                }}
                            >
                                <h3
                                    style={{
                                        margin: 0,
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
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <Calendar size={11} color="rgba(255,255,255,0.7)" />
                                        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', fontWeight: '500' }}>
                                            Expires {campaign.date}
                                        </span>
                                    </div>

                                    <button
                                        onClick={(e) => handleCopy(e, campaign.coupon, campaign.id)}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '5px',
                                            backgroundColor: campaign.accentLight,
                                            border: 'none',
                                            borderRadius: '999px',
                                            padding: '5px 10px',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        <Tag size={10} color={campaign.accent} />
                                        <span style={{ fontSize: '11px', fontWeight: '800', color: campaign.accent }}>
                                            {campaign.coupon}
                                        </span>
                                        <Copy size={10} color={campaign.accent} />
                                        {copied === campaign.id && (
                                            <span style={{ fontSize: '10px', fontWeight: '700', color: campaign.accent }}>
                                                Copied!
                                            </span>
                                        )}
                                    </button>
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