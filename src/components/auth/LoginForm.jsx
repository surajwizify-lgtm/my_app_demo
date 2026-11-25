import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, ArrowRight, ShieldCheck, ChevronLeft } from "lucide-react";
import theme from "@/styles/theme";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const [step, setStep] = useState(1);
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const navigate = useNavigate();

    const handleSendOtp = (e) => {
        e.preventDefault();
        if (phone.length >= 10) setStep(2);
    };

    const handleVerify = (e) => {
        e.preventDefault();
        if (otp.length >= 6) {
            console.log("Verify OTP for", phone);
        }
    };

    return (
        <div className="px-6">
            <AnimatePresence mode="wait">
                {step === 1 ? (
                    <motion.div
                        key="step1"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -20, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <form className="flex flex-col gap-5" onSubmit={handleSendOtp}>
                            <div>
                                <label className="mb-1.5 block text-[12px] font-bold" style={{ color: theme.colors.textSecondary }}>
                                    Phone Number
                                </label>
                                <div
                                    className="flex items-center gap-3 rounded-2xl px-4 py-3.5 transition-colors"
                                    style={{ backgroundColor: theme.colors.background, border: `1px solid ${theme.colors.border}` }}
                                >
                                    <span className="text-sm font-bold" style={{ color: theme.colors.textPrimary }}>+91</span>
                                    <div className="h-4 w-px" style={{ backgroundColor: theme.colors.border }} />
                                    <Smartphone size={18} color={theme.colors.textMuted} />
                                    <input
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                                        placeholder="Enter your mobile number"
                                        className="w-full bg-transparent text-sm outline-none"
                                        style={{ color: theme.colors.textPrimary, fontFamily: "Manrope, sans-serif" }}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={phone.length < 10}
                                className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-sm font-bold text-white transition-transform active:scale-[0.98] disabled:opacity-50"
                                style={{ backgroundColor: theme.colors.primary, boxShadow: `0 8px 24px ${theme.colors.primary}30` }}
                            >
                                Send OTP
                                <ArrowRight size={16} />
                            </button>

                            <p className="mt-4 text-center text-[12px] font-medium leading-relaxed" style={{ color: theme.colors.textMuted }}>
                                By continuing, you agree to our Terms & Conditions.<br />
                                New here? We will automatically create an account for you.
                            </p>
                        </form>
                    </motion.div>
                ) : (
                    <motion.div
                        key="step2"
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 20, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <form className="flex flex-col gap-5" onSubmit={handleVerify}>
                            <div className="flex flex-col items-center mb-2">
                                <div
                                    className="mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                                    style={{ backgroundColor: theme.colors.successLight }}
                                >
                                    <ShieldCheck size={32} color={theme.colors.success} />
                                </div>
                                <h2 className="text-lg font-bold" style={{ color: theme.colors.textPrimary, fontFamily: theme.fonts.heading }}>
                                    Verify OTP
                                </h2>
                                <p className="mt-1 text-center text-sm" style={{ color: theme.colors.textSecondary }}>
                                    We've sent a code to <span className="font-bold" style={{ color: theme.colors.primary }}>+91 {phone}</span>
                                </p>
                            </div>

                            <div>
                                <label className="mb-1.5 block text-[12px] font-bold" style={{ color: theme.colors.textSecondary }}>
                                    Enter 6-digit OTP
                                </label>
                                <input
                                    type="text"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                                    placeholder="------"
                                    className="w-full rounded-2xl px-4 py-4 text-center text-2xl font-bold tracking-[0.5em] outline-none"
                                    style={{ backgroundColor: theme.colors.background, border: `1px solid ${theme.colors.border}`, color: theme.colors.textPrimary }}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={otp.length < 6}
                                onSubmit={() => Navigate('/')}
                                className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-sm font-bold text-white transition-transform active:scale-[0.98] disabled:opacity-50"
                                style={{ backgroundColor: theme.colors.primary, boxShadow: `0 8px 24px ${theme.colors.primary}30` }}
                            >
                                Verify & Continue
                                <ArrowRight size={16} />
                            </button>

                            <div className="flex items-center justify-between mt-2">
                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="flex items-center gap-1 text-[13px] font-bold"
                                    style={{ color: theme.colors.textSecondary }}
                                >
                                    <ChevronLeft size={16} />
                                    Change Number
                                </button>
                                <button
                                    type="button"
                                    className="text-[13px] font-bold"
                                    style={{ color: theme.colors.primary }}
                                >
                                    Resend OTP
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}