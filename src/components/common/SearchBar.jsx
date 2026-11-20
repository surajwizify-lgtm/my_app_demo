import { Search, X } from 'lucide-react'
import { useState } from 'react'
import theme from '../../styles/theme'

export default function SearchBar({ placeholder = 'Search...', onSearch, onChange }) {
    const [value, setValue] = useState('')
    const [focused, setFocused] = useState(false)

    const handleChange = (e) => {
        setValue(e.target.value)
        if (onChange) onChange(e.target.value)
    }

    const handleClear = () => {
        setValue('')
        if (onChange) onChange('')
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && onSearch) onSearch(value)
    }

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: theme.colors.white,
                border: `1.5px solid ${focused ? theme.colors.primary : theme.colors.border}`,
                borderRadius: theme.borderRadius.full,
                padding: '12px 16px',
                transition: 'all 0.2s ease',
                boxShadow: focused ? `0 0 0 3px ${theme.colors.primaryLight}` : 'none',
            }}
        >
            <Search size={18} color={focused ? theme.colors.primary : theme.colors.textMuted} />
            <input
                type="text"
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder={placeholder}
                style={{
                    flex: 1,
                    border: 'none',
                    outline: 'none',
                    fontSize: theme.fontSizes.md,
                    color: theme.colors.textPrimary,
                    backgroundColor: 'transparent',
                }}
            />
            {value.length > 0 && (
                <X
                    size={16}
                    color={theme.colors.textMuted}
                    onClick={handleClear}
                    style={{ cursor: 'pointer' }}
                />
            )}
        </div>
    )
}