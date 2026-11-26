import { Camera, Edit2, Check, X, User } from "lucide-react";
import theme from "@/styles/theme";

export default function ProfileHeader({ user, isEditing, onToggleEdit, onCancel }) {
    return (
        <div className={` relative overflow-hidden rounded-bl-3xl rounded-br-3xl px-5 py-5 `}
            style={{ backgroundColor: theme.colors.primary }}
        >
            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-white/10" />
            <div className="absolute -right-4 bottom-0 h-20 w-20 rounded-full bg-white/5" />

            <div className="relative z-10 flex items-start gap-3.5">
                <div className="relative shrink-0">
                    <div
                        className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2"
                        style={{ borderColor: "rgba(255,255,255,0.4)", backgroundColor: "rgba(255,255,255,0.15)" }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
                            alt={user.name}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    {isEditing && (
                        <button
                            type="button"
                            className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border shadow-sm"
                            style={{ backgroundColor: theme.colors.surface, borderColor: theme.colors.border }}
                        >
                            <Camera size={10} color={theme.colors.primary} />
                        </button>
                    )}
                </div>

                <div className="flex-1 min-w-0">
                    <h2
                        className="truncate text-[16px] font-bold leading-tight"
                        style={{ fontFamily: theme.fonts.heading, color: theme.colors.white }}
                    >
                        {user.name}
                    </h2>
                    <p className="truncate text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.7)" }}>
                        {user.phone}
                    </p>
                    <div className="mt-2 flex gap-2">
                        {!isEditing ? (
                            <button
                                type="button"
                                onClick={onToggleEdit}
                                className="flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-bold transition-transform active:scale-95"
                                style={{ backgroundColor: "rgba(255,255,255,0.2)", color: theme.colors.white }}
                            >
                                <Edit2 size={10} />
                                Edit Profile
                            </button>
                        ) : (
                            <>
                                <button
                                    type="button"
                                    onClick={onCancel}
                                    className="flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-bold transition-transform active:scale-95"
                                    style={{ backgroundColor: "rgba(255,255,255,0.15)", color: theme.colors.white }}
                                >
                                    <X size={10} />
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    onClick={onToggleEdit}
                                    className="flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-bold transition-transform active:scale-95"
                                    style={{ backgroundColor: theme.colors.white, color: theme.colors.primary }}
                                >
                                    <Check size={10} />
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