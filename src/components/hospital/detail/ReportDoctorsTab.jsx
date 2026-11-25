import { useState } from "react";
import { Star, Clock, X, Phone, GraduationCap, Briefcase } from "lucide-react";
import theme from "@/styles/theme";

const DOCTORS = [
    { id: 1, name: "Dr. Aisha Kapoor", title: "Cardiologist", experience: "15 yrs exp", rating: 4.9, available: "Mon-Fri, 10am - 4pm", fee: "₹800", qualification: "MBBS, MD (Cardiology)", about: "Specialized in interventional cardiology with 15+ years of experience treating complex heart conditions." },
    { id: 2, name: "Dr. Rohan Mehta", title: "Neurologist", experience: "12 yrs exp", rating: 4.8, available: "Tue-Sat, 9am - 3pm", fee: "₹900", qualification: "MBBS, DM (Neurology)", about: "Expert in stroke management and neuro-rehabilitation with extensive clinical experience." },
    { id: 3, name: "Dr. Priya Sharma", title: "Pediatrician", experience: "10 yrs exp", rating: 4.9, available: "Mon-Sat, 11am - 5pm", fee: "₹700", qualification: "MBBS, MD (Pediatrics)", about: "Compassionate pediatric care with focus on child development and preventive medicine." },
    { id: 4, name: "Dr. Vikram Rao", title: "Orthopedic Surgeon", experience: "18 yrs exp", rating: 4.7, available: "Wed-Sun, 10am - 6pm", fee: "₹1000", qualification: "MBBS, MS (Ortho)", about: "Joint replacement and sports injury specialist with 18+ years of surgical expertise." },
];

export default function ReportDoctorsTab() {
    const [selected, setSelected] = useState(null);

    return (
        <div className="px-4 py-4">
            <div className="mb-4">
                <h2 className="text-lg font-bold" style={{ color: theme.colors.textPrimary, fontFamily: theme.fonts.heading }}>
                    Our Specialists
                </h2>
                <p className="mt-1 text-xs" style={{ color: theme.colors.textSecondary }}>
                    Meet our team of experienced doctors.
                </p>
            </div>

            <div className="flex flex-col gap-3">
                {DOCTORS.map((doc) => (
                    <button
                        key={doc.id}
                        type="button"
                        onClick={() => setSelected(doc)}
                        className="flex w-full items-start gap-3 rounded-2xl p-3 text-left transition-transform active:scale-[0.99]"
                        style={{ backgroundColor: theme.colors.surface, border: `1px solid ${theme.colors.border}`, boxShadow: theme.shadows.soft }}
                    >
                        <div
                            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-lg font-bold"
                            style={{ background: `linear-gradient(135deg, ${theme.colors.primaryLight}, ${theme.colors.secondaryLight})`, color: theme.colors.primary }}
                        >
                            {doc.name.split(" ")[1]?.[0] || "D"}
                        </div>
                        <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-2">
                                <h3 className="truncate text-sm font-bold" style={{ color: theme.colors.textPrimary }}>{doc.name}</h3>
                                <span
                                    className="flex shrink-0 items-center gap-0.5 rounded-full px-2 py-0.5 text-[10px] font-bold"
                                    style={{ backgroundColor: theme.colors.accentLight, color: theme.colors.textPrimary }}
                                >
                                    <Star size={9} fill={theme.colors.accent} color={theme.colors.accent} /> {doc.rating}
                                </span>
                            </div>
                            <p className="mt-0.5 text-[11px] font-semibold" style={{ color: theme.colors.secondary }}>{doc.title}</p>
                            <div className="mt-1 flex items-center gap-2 text-[10px]" style={{ color: theme.colors.textMuted }}>
                                <span className="flex items-center gap-0.5"><Briefcase size={10} /> {doc.experience}</span>
                                <span className="flex items-center gap-0.5"><Clock size={10} /> {doc.fee}</span>
                            </div>
                        </div>
                    </button>
                ))}
            </div>

            {selected && (
                <div
                    className="fixed inset-0 z-50 flex items-end justify-center"
                    style={{ backgroundColor: "rgba(15,42,58,0.55)" }}
                    onClick={() => setSelected(null)}
                >
                    <div
                        className="w-full max-w-[390px] rounded-t-3xl"
                        style={{ backgroundColor: theme.colors.surface }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-center pt-3">
                            <div className="h-1 w-10 rounded-full" style={{ backgroundColor: theme.colors.border }} />
                        </div>
                        <div className="flex justify-end px-4 pt-2">
                            <button type="button" onClick={() => setSelected(null)}>
                                <X size={20} color={theme.colors.textMuted} />
                            </button>
                        </div>
                        <div className="flex flex-col items-center px-6 pb-4">
                            <div
                                className="flex h-20 w-20 items-center justify-center rounded-full text-2xl font-bold"
                                style={{ background: `linear-gradient(135deg, ${theme.colors.primaryLight}, ${theme.colors.secondaryLight})`, color: theme.colors.primary }}
                            >
                                {selected.name.split(" ")[1]?.[0] || "D"}
                            </div>
                            <h3 className="mt-3 text-lg font-bold" style={{ color: theme.colors.textPrimary, fontFamily: theme.fonts.heading }}>
                                {selected.name}
                            </h3>
                            <p className="text-xs font-semibold" style={{ color: theme.colors.secondary }}>{selected.title}</p>
                            <div className="mt-2 flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={12} fill={theme.colors.accent} color={theme.colors.accent} />
                                ))}
                                <span className="ml-1 text-[11px] font-semibold" style={{ color: theme.colors.textPrimary }}>{selected.rating}</span>
                            </div>
                        </div>
                        <div className="px-6">
                            <p className="text-xs leading-relaxed" style={{ color: theme.colors.textSecondary }}>{selected.about}</p>
                            <div className="mt-4 flex flex-col gap-2">
                                <div className="flex items-center gap-2 rounded-xl p-3" style={{ backgroundColor: theme.colors.background }}>
                                    <GraduationCap size={16} color={theme.colors.primary} />
                                    <span className="text-[12px]" style={{ color: theme.colors.textPrimary }}>{selected.qualification}</span>
                                </div>
                                <div className="flex items-center gap-2 rounded-xl p-3" style={{ backgroundColor: theme.colors.background }}>
                                    <Clock size={16} color={theme.colors.primary} />
                                    <span className="text-[12px]" style={{ color: theme.colors.textPrimary }}>{selected.available}</span>
                                </div>
                                <div className="flex items-center gap-2 rounded-xl p-3" style={{ backgroundColor: theme.colors.background }}>
                                    <Briefcase size={16} color={theme.colors.primary} />
                                    <span className="text-[12px]" style={{ color: theme.colors.textPrimary }}>Consultation: {selected.fee}</span>
                                </div>
                            </div>
                            <button
                                type="button"
                                className="mt-4 flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-bold text-white"
                                style={{ backgroundColor: theme.colors.primary }}
                            >
                                <Phone size={16} /> Call Now
                            </button>
                            <div className="h-6" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}