import SearchBar from '../common/SearchBar'
import theme from '../../styles/theme'

export default function SearchSection() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: theme.spacing.sm,
            }}
        >
            <div>
                <h1
                    style={{
                        margin: 0,
                        fontSize: theme.fontSizes.xxl,
                        fontWeight: '800',
                        color: theme.colors.textPrimary,
                        lineHeight: '1.3',
                    }}
                >
                    Find Your
                </h1>
                <h1
                    style={{
                        margin: 0,
                        fontSize: theme.fontSizes.xxl,
                        fontWeight: '800',
                        lineHeight: '1.3',
                        color: theme.colors.primary,
                    }}
                >
                    Doctor & Services
                </h1>
            </div>
            <p
                style={{
                    margin: 0,
                    fontSize: theme.fontSizes.sm,
                    color: theme.colors.textSecondary,
                    lineHeight: '1.6',
                }}
            >
                Book appointments, find hospitals, and access medical services near you.
            </p>
            <div style={{ marginTop: theme.spacing.xs }}>
                <SearchBar placeholder="Search doctors, hospitals, services..." />
            </div>
        </div>
    )
}