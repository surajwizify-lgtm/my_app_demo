import { motion } from 'framer-motion'
import theme from '@/styles/theme'
import SectionHeader from '@/components/common/SectionHeader'

const categories = [
    {
        id: 1,
        title: 'Preventive',
        image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=200&q=80',
        borderColor: '#f43f5e'
    },
    {
        id: 2,
        title: 'Cancer',
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=200&q=80',
        borderColor: '#fdba74'
    },
    {
        id: 3,
        title: 'Women',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80',
        borderColor: '#bfdbfe'
    },
    {
        id: 4,
        title: 'Mind',
        image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=200&q=80',
        borderColor: '#bbf7d0'
    },
    {
        id: 5,
        title: 'Lungs',
        image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=200&q=80',
        borderColor: '#ddd6fe'
    },
]

export default function ArticlesCategorySection2() {
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
                    display: 'flex',
                    gap: theme.spacing.md,
                    overflowX: 'auto',
                    scrollbarWidth: 'none',
                    paddingBottom: '8px',
                }}
            >
                {categories.map((category, index) => (
                    <motion.div
                        key={category.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.4, ease: 'easeOut' }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => { }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            cursor: 'pointer',
                            flexShrink: 0,
                            width: '72px',
                        }}
                    >
                        <div
                            style={{
                                width: '72px',
                                height: '72px',
                                borderRadius: '50%',
                                padding: '4px',
                                backgroundColor: theme.colors.white,
                                border: `3px solid ${category.borderColor}`,
                                marginBottom: theme.spacing.sm,
                                boxShadow: '0px 4px 10px rgba(0,0,0,0.05)',
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
                        <span
                            style={{
                                fontSize: theme.fontSizes.sm,
                                fontWeight: '600',
                                color: theme.colors.textPrimary,
                                textAlign: 'center',
                                lineHeight: '1.2',
                            }}
                        >
                            {category.title}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}