import theme from '../../styles/theme'

export default function Badge({ label, variant = 'primary', size = 'md' }) {
    const variants = {
        primary: {
            backgroundColor: theme.colors.primaryLight,
            color: theme.colors.primary,
        },
        secondary: {
            backgroundColor: theme.colors.secondaryLight,
            color: theme.colors.secondary,
        },
        danger: {
            backgroundColor: theme.colors.dangerLight,
            color: theme.colors.danger,
        },
        accent: {
            backgroundColor: theme.colors.accentLight,
            color: theme.colors.accent,
        },
        muted: {
            backgroundColor: theme.colors.border,
            color: theme.colors.textSecondary,
        },
    }

    const sizes = {
        sm: { fontSize: theme.fontSizes.xs, padding: '2px 8px' },
        md: { fontSize: theme.fontSizes.sm, padding: '4px 12px' },
        lg: { fontSize: theme.fontSizes.md, padding: '6px 16px' },
    }

    return (
        <span
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                fontWeight: '600',
                borderRadius: theme.borderRadius.full,
                ...variants[variant],
                ...sizes[size],
            }}
        >
            {label}
        </span>
    )
}