import { motion } from 'framer-motion'
import theme from '@/styles/theme'
import SectionHeader from '@/components/common/SectionHeader'

const categories = [
    {
        id: 1,
        title: 'Preventive health',
        subtitle: 'Stay ahead of illness',
        bg: '#FDECEA',
        image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=200&q=80',
    },
    {
        id: 2,
        title: 'Cancer & surgery',
        subtitle: 'Care and recovery',
        bg: '#FEF3E2',
        image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=200&q=80',
    },
    {
        id: 3,
        title: 'Women health',
        subtitle: 'Every stage of life',
        bg: '#E8F0FE',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&q=80',
    },
    {
        id: 4,
        title: 'Mind & neurology',
        subtitle: 'Brain and nerve health',
        bg: '#EAFAF1',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&q=80',
    },
    {
        id: 5,
        title: 'Lungs & breathing',
        subtitle: 'Respiratory wellness',
        bg: '#EDE7F6',
        image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=200&q=80',
    },
    {
        id: 6,
        title: 'Heart care',
        subtitle: 'Cardio and beyond',
        bg: '#E3F2FD',
        image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=200&q=80',
    },
]

export default function ArticlesCategorySection() {
    return (
        <div>
            <SectionHeader
                title="Article categories"
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
                {categories.map((cat, index) => (
                    <motion.div
                        key={cat.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.07, duration: 0.3, ease: 'easeOut' }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => { }}
                        style={{
                            backgroundColor: cat.bg,
                            borderRadius: theme.borderRadius.lg,
                            padding: theme.spacing.sm,
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: theme.spacing.sm,
                        }}
                    >
                        <img
                            src={cat.image}
                            alt={cat.title}
                            style={{
                                width: '72px',
                                height: '72px',
                                objectFit: 'cover',
                                borderRadius: theme.borderRadius.md,
                            }}
                        />
                        <div>
                            <h4
                                style={{
                                    margin: 0,
                                    fontSize: theme.fontSizes.md,
                                    fontWeight: '700',
                                    color: theme.colors.textPrimary,
                                    lineHeight: '1.3',
                                }}
                            >
                                {cat.title}
                            </h4>
                            <p
                                style={{
                                    margin: '2px 0 0',
                                    fontSize: theme.fontSizes.sm,
                                    color: theme.colors.textSecondary,
                                }}
                            >
                                {cat.subtitle}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}