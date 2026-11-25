import { Camera, Edit2, Check, X, User } from "lucide-react";
import theme from "@/styles/theme";

export default function ProfileHeader({ user, isEditing, onToggleEdit, onCancel }) {
    return (
        <div className="pb-3">
            <div
                className="relative h-24 w-full"
                style={{ background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})` }}
            >
                <div className="absolute left-4 top-3">
                    <h1 className="text-base font-bold text-white" style={{ fontFamily: theme.fonts.heading }}>
                        My Profile
                    </h1>
                </div>
            </div>

            <div className="relative z-10 -mt-8 px-4">
                <div
                    className="flex flex-col items-center rounded-2xl p-4"
                    style={{ backgroundColor: theme.colors.surface, boxShadow: theme.shadows.card }}
                >
                    <div className="relative mb-2">
                        <div
                            className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2"
                            style={{ borderColor: theme.colors.surface, backgroundColor: theme.colors.primaryLight }}
                        >
                            {user.avatar ? (
                                <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                            ) : (
                                <User size={24} color={theme.colors.primary} />
                            )}
                        </div>
                        {isEditing && (
                            <button
                                type="button"
                                className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border shadow-sm"
                                style={{ backgroundColor: theme.colors.surface, borderColor: theme.colors.border }}
                            >
                                <Camera size={10} color={theme.colors.primary} />
                            </button>
                        )}
                    </div>

                    <h2
                        className="text-center text-[15px] font-bold leading-tight"
                        style={{ color: theme.colors.textPrimary, fontFamily: theme.fonts.heading }}
                    >
                        {user.name}
                    </h2>
                    <p className="mt-0.5 text-center text-[11px] font-medium" style={{ color: theme.colors.textSecondary }}>
                        {user.phone}
                    </p>

                    <div className="mt-3 flex w-full gap-2">
                        {!isEditing ? (
                            <button
                                type="button"
                                onClick={onToggleEdit}
                                className="flex w-full items-center justify-center gap-1.5 rounded-full py-2 text-[11px] font-bold transition-transform active:scale-95"
                                style={{ backgroundColor: theme.colors.primaryLight, color: theme.colors.primary }}
                            >
                                <Edit2 size={12} />
                                Edit Profile
                            </button>
                        ) : (
                            <>
                                <button
                                    type="button"
                                    onClick={onCancel}
                                    className="flex flex-1 items-center justify-center gap-1.5 rounded-full py-2 text-[11px] font-bold transition-transform active:scale-95"
                                    style={{ backgroundColor: theme.colors.dangerLight, color: theme.colors.danger }}
                                >
                                    <X size={12} />
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    onClick={onToggleEdit}
                                    className="flex flex-1 items-center justify-center gap-1.5 rounded-full py-2 text-[11px] font-bold text-white transition-transform active:scale-95"
                                    style={{ backgroundColor: theme.colors.primary }}
                                >
                                    <Check size={12} />
                                    Save
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}