import theme from '../../styles/theme'

export default function Avatar({ src, name, size = 'md', online = false }) {
    const sizes = {
        sm: { width: '32px', height: '32px', fontSize: theme.fontSizes.xs },
        md: { width: '44px', height: '44px', fontSize: theme.fontSizes.md },
        lg: { width: '60px', height: '60px', fontSize: theme.fontSizes.lg },
        xl: { width: '80px', height: '80px', fontSize: theme.fontSizes.xxl },
    }

    const initials = name
        ? name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2)
        : '?'

    return (
        <div style={{ position: 'relative', display: 'inline-flex' }}>
            <div
                style={{
                    ...sizes[size],
                    borderRadius: theme.borderRadius.full,
                    overflow: 'hidden',
                    backgroundColor: theme.colors.primaryLight,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                }}
            >
                {src ? (
                    <img
                        src={src}
                        alt={name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                ) : (
                    <span
                        style={{
                            fontWeight: '700',
                            color: theme.colors.primary,
                            fontSize: sizes[size].fontSize,
                        }}
                    >
                        {initials}
                    </span>
                )}
            </div>
            {online && (
                <span
                    style={{
                        position: 'absolute',
                        bottom: '2px',
                        right: '2px',
                        width: '10px',
                        height: '10px',
                        borderRadius: theme.borderRadius.full,
                        backgroundColor: theme.colors.secondary,
                        border: `2px solid ${theme.colors.white}`,
                    }}
                />
            )}
        </div>
    )
}