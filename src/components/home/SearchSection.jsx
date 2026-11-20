import { motion } from 'framer-motion'
import SearchBar from '@/components/common/SearchBar'
import theme from '@/styles/theme'

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.4, ease: 'easeOut' },
    }),
}

export default function SearchSection() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.sm }}>
            <motion.h1
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                style={{
                    margin: 0,
                    fontSize: theme.fontSizes.xxl,
                    fontWeight: '800',
                    color: theme.colors.textPrimary,
                    lineHeight: '1.3',
                }}
            >
                Find Your
            </motion.h1>
            <motion.h1
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                style={{
                    margin: 0,
                    fontSize: theme.fontSizes.xxl,
                    fontWeight: '800',
                    lineHeight: '1.3',
                    color: theme.colors.primary,
                }}
            >
                Doctor & Services
            </motion.h1>
            <motion.p
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                style={{
                    margin: 0,
                    fontSize: theme.fontSizes.sm,
                    color: theme.colors.textSecondary,
                    lineHeight: '1.6',
                }}
            >
                Book appointments, find hospitals, and access medical services near you.
            </motion.p>
            <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                style={{ marginTop: theme.spacing.xs }}
            >
                <SearchBar placeholder="Search doctors, hospitals, services..." />
            </motion.div>
        </div>
    )
}