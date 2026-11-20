import theme from '../../styles/theme'

export default function Loader({ size = 'md', fullScreen = false }) {
    const sizes = {
        sm: '20px',
        md: '32px',
        lg: '48px',
    }

    const spinner = (
        <div
            style={{
                width: sizes[size],
                height: sizes[size],
                borderRadius: '50%',
                border: `3px solid ${theme.colors.border}`,
                borderTop: `3px solid ${theme.colors.primary}`,
                animation: 'spin 0.7s linear infinite',
            }}
        />
    )

    return (
        <>
            <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
            {fullScreen ? (
                <div
                    style={{
                        position: 'fixed',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(255,255,255,0.8)',
                        zIndex: 9999,
                    }}
                >
                    {spinner}
                </div>
            ) : (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: theme.spacing.lg }}>
                    {spinner}
                </div>
            )}
        </>
    )
}