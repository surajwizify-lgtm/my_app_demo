import { motion } from 'framer-motion'
import theme from '@/styles/theme'
import SectionHeader from '@/components/common/SectionHeader'
import Badge from '@/components/common/Badge'
import { Clock, Eye } from 'lucide-react'

const articles = [
    {
        id: 1,
        title: '10 Tips for a Healthy Heart',
        category: 'Cardiology',
        readTime: '5 min read',
        views: '2.3k',
        variant: 'danger',
        color: '#FEF2F2',
        emoji: '❤️',
    },
    {
        id: 2,
        title: 'Understanding Diabetes: A Complete Guide',
        category: 'General',
        readTime: '8 min read',
        views: '4.1k',
        variant: 'primary',
        color: theme.colors.primaryLight,
        emoji: '🩺',
    },
    {
        id: 3,
        title: 'Benefits of Regular Eye Checkups',
        category: 'Ophthalmology',
        readTime: '4 min read',
        views: '1.8k',
        variant: 'secondary',
        color: theme.colors.secondaryLight,
        emoji: '👁️',
    },
]

export default function HealthArticlesSection() {
    return (
        <div>
            <SectionHeader title="Health Articles" actionLabel="See All" onAction={() => { }} />
            <div
                style={{
                    display: 'flex',
                    gap: theme.spacing.sm,
                    overflowX: 'auto',
                    scrollbarWidth: 'none',
                    paddingBottom: '4px',
                }}
            >
                {articles.map((article, index) => (
                    <motion.div
                        key={article.id}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4, ease: 'easeOut' }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => { }}
                        style={{
                            minWidth: '220px',
                            backgroundColor: theme.colors.white,
                            borderRadius: theme.borderRadius.lg,
                            overflow: 'hidden',
                            boxShadow: '0px 2px 12px rgba(0,0,0,0.06)',
                            cursor: 'pointer',
                            flexShrink: 0,
                        }}
                    >
                        <div
                            style={{
                                height: '100px',
                                backgroundColor: article.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <span style={{ fontSize: '40px' }}>{article.emoji}</span>
                        </div>
                        <div style={{ padding: theme.spacing.sm }}>
                            <Badge label={article.category} variant={article.variant} size="sm" />
                            <h4
                                style={{
                                    margin: `${theme.spacing.xs} 0`,
                                    fontSize: theme.fontSizes.sm,
                                    fontWeight: '700',
                                    color: theme.colors.textPrimary,
                                    lineHeight: '1.4',
                                }}
                            >
                                {article.title}
                            </h4>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <Clock size={12} color={theme.colors.textMuted} />
                                    <span style={{ fontSize: theme.fontSizes.xs, color: theme.colors.textMuted }}>
                                        {article.readTime}
                                    </span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <Eye size={12} color={theme.colors.textMuted} />
                                    <span style={{ fontSize: theme.fontSizes.xs, color: theme.colors.textMuted }}>
                                        {article.views}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}