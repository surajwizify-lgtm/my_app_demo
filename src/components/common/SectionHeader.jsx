import theme from '../../styles/theme'

export default function SectionHeader({ title, subtitle, actionLabel, onAction }) {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: theme.spacing.md,
            }}
        >
            <div>
                <h2
                    style={{
                        fontSize: theme.fontSizes.lg,
                        fontWeight: '700',
                        color: theme.colors.textPrimary,
                        margin: 0,
                    }}
                >
                    {title}
                </h2>
                {subtitle && (
                    <p
                        style={{
                            fontSize: theme.fontSizes.sm,
                            color: theme.colors.textSecondary,
                            margin: '2px 0 0 0',
                        }}
                    >
                        {subtitle}
                    </p>
                )}
            </div>
            {actionLabel && (
                <span
                    onClick={onAction}
                    style={{
                        fontSize: theme.fontSizes.sm,
                        fontWeight: '600',
                        color: theme.colors.primary,
                        cursor: 'pointer',
                    }}
                >
                    {actionLabel}
                </span>
            )}
        </div>
    )
}