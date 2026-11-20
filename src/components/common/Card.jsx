import theme from '../../styles/theme'

export default function Card({
    children,
    onClick,
    padding = 'md',
    shadow = true,
    radius = 'md',
    style = {},
}) {
    const paddings = {
        none: '0px',
        sm: theme.spacing.sm,
        md: theme.spacing.md,
        lg: theme.spacing.lg,
    }

    return (
        <div
            onClick={onClick}
            style={{
                backgroundColor: theme.colors.surface,
                borderRadius: theme.borderRadius[radius],
                padding: paddings[padding],
                boxShadow: shadow ? '0px 2px 12px rgba(0,0,0,0.06)' : 'none',
                cursor: onClick ? 'pointer' : 'default',
                transition: 'all 0.2s ease',
                ...style,
            }}
        >
            {children}
        </div>
    )
}