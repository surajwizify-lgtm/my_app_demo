import { Camera, Edit2, Check, X, User } from "lucide-react";
import theme from "@/styles/theme";

export default function ProfileHeader({ user, isEditing, onToggleEdit, onCancel }) {
    return (
        <div
            className="relative overflow-hidden px-5 pt-12 pb-6"
            style={{ background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})` }}
        >
            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-white/10" />
            <div className="absolute -left-4 bottom-0 h-20 w-20 rounded-full bg-white/5" />

            <div className="relative z-10 flex items-center gap-4">
                <div className="relative shrink-0">
                    <div
                        className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2"
                        style={{ borderColor: "rgba(255,255,255,0.4)", backgroundColor: "rgba(255,255,255,0.15)" }}
                    >
                        {user.avatar ? (
                            <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                        ) : (
                            <User size={26} color="#fff" />
                        )}
                    </div>
                    {isEditing && (
                        <button
                            type="button"
                            className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border shadow-sm"
                            style={{ backgroundColor: theme.colors.surface, borderColor: theme.colors.border }}
                        >
                            <Camera size={11} color={theme.colors.primary} />
                        </button>
                    )}
                </div>

                <div className="flex-1 min-w-0">
                    <h2
                        className="truncate text-[17px] font-bold text-white leading-tight"
                        style={{ fontFamily: theme.fonts.heading }}
                    >
                        {user.name}
                    </h2>
                    <p className="truncate text-[11px] text-white/70 mt-0.5">
                        {user.phone}
                    </p>
                    <div className="mt-2.5 flex gap-2">
                        {!isEditing ? (
                            <button
                                type="button"
                                onClick={onToggleEdit}
                                className="flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[11px] font-bold transition-transform active:scale-95"
                                style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "#fff" }}
                            >
                                <Edit2 size={11} />
                                Edit Profile
                            </button>
                        ) : (
                            <>
                                <button
                                    type="button"
                                    onClick={onCancel}
                                    className="flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[11px] font-bold transition-transform active:scale-95"
                                    style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#fff" }}
                                >
                                    <X size={11} />
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    onClick={onToggleEdit}
                                    className="flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[11px] font-bold transition-transform active:scale-95"
                                    style={{ backgroundColor: "#fff", color: theme.colors.primary }}
                                >
                                    <Check size={11} />
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