import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import theme from '@/styles/theme'
import SectionHeader from '@/components/common/SectionHeader'

const categories = [
    {
        id: 1,
        title: 'Preventive health',
        subtitle: 'Stay ahead of illness',
        image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=200&q=80',
        borderColor: '#0b84c4'
    },
    {
        id: 2,
        title: 'Cancer & surgery',
        subtitle: 'Care and recovery',
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=200&q=80',
        borderColor: '#d97706'
    },
    {
        id: 3,
        title: 'Women health',
        subtitle: 'Every stage of life',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80',
        borderColor: '#2563eb'
    },
    {
        id: 4,
        title: 'Mind & neurology',
        subtitle: 'Brain and nerve health',
        image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=200&q=80',
        borderColor: '#16a34a'
    },
    {
        id: 5,
        title: 'Lungs & breathing',
        subtitle: 'Respiratory wellness',
        image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=200&q=80',
        borderColor: '#7c3aed'
    },
    {
        id: 6,
        title: 'Heart care',
        subtitle: 'Cardio and beyond',
        image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=200&q=80',
        borderColor: '#e11d48'
    },
]

export default function ArticlesCategorySection() {
    return (
        <div>
            <SectionHeader
                title="Article categories"
                subtitle="Browse health topics"
                actionLabel="View all"
                onAction={() => { }}
            />
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: theme.spacing.sm,
                }}
            >
                {categories.map((category, index) => (
                    <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.4, ease: 'easeOut' }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => { }}
                        style={{
                            backgroundColor: theme.colors.white,
                            borderRadius: theme.borderRadius.lg,
                            padding: theme.spacing.md,
                            boxShadow: '0px 2px 12px rgba(0,0,0,0.04)',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: theme.spacing.sm }}>
                            <div
                                style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '50%',
                                    padding: '3px',
                                    backgroundColor: theme.colors.white,
                                    border: `2px solid ${category.borderColor}33`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: '50%',
                                        display: 'block',
                                    }}
                                />
                            </div>
                            <div
                                style={{
                                    width: '24px',
                                    height: '24px',
                                    borderRadius: '50%',
                                    backgroundColor: theme.colors.background,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <ChevronRight size={14} color={theme.colors.textSecondary} strokeWidth={3} />
                            </div>
                        </div>
                        <h4
                            style={{
                                margin: 0,
                                fontSize: theme.fontSizes.md,
                                fontWeight: '700',
                                color: theme.colors.textPrimary,
                                lineHeight: '1.3',
                            }}
                        >
                            {category.title}
                        </h4>
                        <p
                            style={{
                                margin: '4px 0 0 0',
                                fontSize: theme.fontSizes.sm,
                                color: theme.colors.textSecondary,
                                lineHeight: '1.4',
                            }}
                        >
                            {category.subtitle}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}