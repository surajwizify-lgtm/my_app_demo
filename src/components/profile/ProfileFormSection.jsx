import { User, Phone, Mail, Users, Calendar, Droplet, MapPin, ChevronDown } from "lucide-react";
import theme from "@/styles/theme";

const FIELDS = [
    { key: "name", label: "Full Name", icon: User, type: "text" },
    { key: "phone", label: "Phone Number", icon: Phone, type: "tel" },
    { key: "email", label: "Email Address", icon: Mail, type: "email" },
    { key: "gender", label: "Gender", icon: Users, type: "select", options: ["Male", "Female", "Other"] },
    { key: "dob", label: "Date of Birth", icon: Calendar, type: "date" },
    { key: "bloodGroup", label: "Blood Group", icon: Droplet, type: "select", options: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"] },
    { key: "address", label: "Address", icon: MapPin, type: "textarea" },
];

export default function ProfileFormSection({ formData, isEditing, onChange }) {
    return (
        <div className="px-4 py-5">
            <div
                className="rounded-2xl p-4"
                style={{
                    backgroundColor: theme.colors.surface,
                    border: `1px solid ${theme.colors.border}`,
                    boxShadow: theme.shadows.soft,
                }}
            >
                <h2
                    className="mb-4 text-[14px] font-bold"
                    style={{ color: theme.colors.textPrimary, fontFamily: theme.fonts.heading }}
                >
                    Personal Information
                </h2>

                <div className="flex flex-col gap-3">
                    {FIELDS.map(({ key, label, icon: Icon, type, options }) => (
                        <div key={key}>
                            <label
                                className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider"
                                style={{ color: theme.colors.textMuted }}
                            >
                                <Icon size={11} />
                                {label}
                            </label>

                            {isEditing ? (
                                type === "select" ? (
                                    <div className="relative">
                                        <select
                                            value={formData[key] || ""}
                                            onChange={(e) => onChange(key, e.target.value)}
                                            className="w-full appearance-none rounded-xl px-3 py-2.5 pr-9 text-[13px] font-medium outline-none"
                                            style={{
                                                backgroundColor: theme.colors.background,
                                                border: `1px solid ${theme.colors.border}`,
                                                color: theme.colors.textPrimary,
                                                fontFamily: "Manrope, sans-serif",
                                            }}
                                        >
                                            <option value="">Select {label}</option>
                                            {options.map((opt) => (
                                                <option key={opt} value={opt}>{opt}</option>
                                            ))}
                                        </select>
                                        <ChevronDown
                                            size={16}
                                            color={theme.colors.textMuted}
                                            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                                        />
                                    </div>
                                ) : type === "textarea" ? (
                                    <textarea
                                        value={formData[key] || ""}
                                        onChange={(e) => onChange(key, e.target.value)}
                                        rows={3}
                                        className="w-full resize-none rounded-xl px-3 py-2.5 text-[13px] font-medium outline-none"
                                        style={{
                                            backgroundColor: theme.colors.background,
                                            border: `1px solid ${theme.colors.border}`,
                                            color: theme.colors.textPrimary,
                                            fontFamily: "Manrope, sans-serif",
                                        }}
                                    />
                                ) : (
                                    <input
                                        type={type}
                                        value={formData[key] || ""}
                                        onChange={(e) => onChange(key, e.target.value)}
                                        className="w-full rounded-xl px-3 py-2.5 text-[13px] font-medium outline-none"
                                        style={{
                                            backgroundColor: theme.colors.background,
                                            border: `1px solid ${theme.colors.border}`,
                                            color: theme.colors.textPrimary,
                                            fontFamily: "Manrope, sans-serif",
                                        }}
                                    />
                                )
                            ) : (
                                <p className="text-[13px] font-semibold" style={{ color: theme.colors.textPrimary }}>
                                    {formData[key] || "Not provided"}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}