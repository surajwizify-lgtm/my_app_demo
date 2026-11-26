import theme from "@/styles/theme";

export default function SectionHeader({ title, subtitle, actionLabel, onAction }) {
    return (
        <div className="mb-4 mt-5 flex items-start justify-between px-4">
            <div>
                <h2
                    className="text-[22px] font-bold leading-tight"
                    style={{ color: theme.colors.textPrimary, fontFamily: theme.fonts.heading }}
                >
                    {title}
                </h2>
                {subtitle && (
                    <p className="mt-1 text-[13px] font-medium" style={{ color: theme.colors.textSecondary }}>
                        {subtitle}
                    </p>
                )}
            </div>
            {actionLabel && onAction && (
                <button
                    type="button"
                    onClick={onAction}
                    className="shrink-0 bg-blue-100 rounded-3xl py-2 px-4 text-[13px] font-bold transition-transform active:scale-95"
                    style={{ color: theme.colors.primary }}
                >
                    {actionLabel}
                </button>
            )}
        </div>
    );
}