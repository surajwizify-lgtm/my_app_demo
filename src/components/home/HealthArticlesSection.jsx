import { motion } from 'framer-motion'
import theme from '@/styles/theme'
import SectionHeader from '@/components/common/SectionHeader'

const articles = [
    {
        id: 1,
        title: 'Air pollution: how it hurts your lungs and how to stay safe Air pollution: how it hurts your lungs and how to stay',
        date: 'Nov 15',
        image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&q=80',
    },
    {
        id: 2,
        title: 'Persistent cough: causes, risks and what to do next',
        date: 'Nov 08',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80',
    },
    {
        id: 3,
        title: 'Heart health: simple habits that make a big difference',
        date: 'Oct 29',
        image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=400&q=80',
    },
    {
        id: 4,
        title: 'Diabetes management: a practical everyday guide',
        date: 'Oct 20',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
    },
]

export default function HealthArticlesSection() {
    return (
        <div>
            <SectionHeader
                title="Health articles"
                subtitle="Latest health updates for you"
                actionLabel="View all"
                onAction={() => { }}
            />
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
                            maxWidth: '300px',
                            width: '100%',
                            backgroundColor: theme.colors.white,
                            borderRadius: theme.borderRadius.lg,
                            overflow: 'hidden',
                            boxShadow: '0px 2px 12px rgba(0,0,0,0.06)',
                            cursor: 'pointer',
                            flexShrink: 0,
                        }}
                    >
                        <div style={{ position: 'relative', }}>
                            <img
                                src={article.image}
                                alt={article.title}
                                style={{
                                    width: '100%',
                                    height: '150px',
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                            />
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '10px',
                                    left: '10px',
                                    backgroundColor: '#2a7a4f',
                                    color: '#fff',
                                    fontSize: theme.fontSizes.xs,
                                    fontWeight: '700',
                                    padding: '4px 10px',
                                    borderRadius: '999px',
                                }}
                            >
                                {article.date}
                            </div>
                        </div>
                        <div style={{ padding: theme.spacing.sm }}>
                            <h4
                                style={{
                                    margin: 0,
                                    fontSize: theme.fontSizes.sm,
                                    fontWeight: '700',
                                    color: theme.colors.textPrimary,
                                    lineHeight: '1.4',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                }}
                            >
                                {article.title}
                            </h4>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}