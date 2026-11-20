import theme from '../../styles/theme'

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    disabled = false,
    onClick,
    type = 'button',
}) {
    const base = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        fontWeight: '600',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        border: 'none',
        outline: 'none',
        transition: 'all 0.2s ease',
        width: fullWidth ? '100%' : 'auto',
        borderRadius: theme.borderRadius.full,
    }

    const sizes = {
        sm: { padding: '8px 16px', fontSize: theme.fontSizes.sm },
        md: { padding: '12px 24px', fontSize: theme.fontSizes.md },
        lg: { padding: '14px 32px', fontSize: theme.fontSizes.lg },
    }

    const variants = {
        primary: {
            backgroundColor: theme.colors.primary,
            color: theme.colors.white,
        },
        secondary: {
            backgroundColor: theme.colors.secondary,
            color: theme.colors.white,
        },
        outline: {
            backgroundColor: 'transparent',
            color: theme.colors.primary,
            border: `2px solid ${theme.colors.primary}`,
        },
        danger: {
            backgroundColor: theme.colors.danger,
            color: theme.colors.white,
        },
        ghost: {
            backgroundColor: theme.colors.primaryLight,
            color: theme.colors.primary,
        },
    }

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            style={{ ...base, ...sizes[size], ...variants[variant] }}
        >
            {children}
        </button>
    )
}