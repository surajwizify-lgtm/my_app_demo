import { useState } from 'react'
import theme from '../../styles/theme'

export default function Input({
    label,
    placeholder,
    value,
    onChange,
    type = 'text',
    icon: Icon,
    rightIcon: RightIcon,
    onRightIconClick,
    error,
    disabled = false,
}) {
    const [focused, setFocused] = useState(false)

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
            {label && (
                <label style={{ fontSize: theme.fontSizes.sm, fontWeight: '600', color: theme.colors.textPrimary }}>
                    {label}
                </label>
            )}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    backgroundColor: theme.colors.white,
                    border: `1.5px solid ${error ? theme.colors.danger : focused ? theme.colors.primary : theme.colors.border}`,
                    borderRadius: theme.borderRadius.md,
                    padding: '12px 16px',
                    transition: 'all 0.2s ease',
                }}
            >
                {Icon && <Icon size={18} color={focused ? theme.colors.primary : theme.colors.textMuted} />}
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={disabled}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    style={{
                        flex: 1,
                        border: 'none',
                        outline: 'none',
                        fontSize: theme.fontSizes.md,
                        color: theme.colors.textPrimary,
                        backgroundColor: 'transparent',
                        opacity: disabled ? 0.5 : 1,
                    }}
                />
                {RightIcon && (
                    <RightIcon
                        size={18}
                        color={theme.colors.textMuted}
                        onClick={onRightIconClick}
                        style={{ cursor: 'pointer' }}
                    />
                )}
            </div>
            {error && (
                <span style={{ fontSize: theme.fontSizes.xs, color: theme.colors.danger }}>{error}</span>
            )}
        </div>
    )
}