import { motion } from "framer-motion";
import { HeartPulse } from "lucide-react";
import theme from "@/styles/theme";

export default function LoginHeader() {
    return (
        <div className="flex flex-col items-center px-6 pb-8 pt-16 text-center">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl"
                style={{
                    background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
                    boxShadow: `0 12px 32px ${theme.colors.primary}40`,
                }}
            >
                <HeartPulse size={40} color="#fff" />
            </motion.div>

            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-2 text-3xl font-bold"
                style={{ color: theme.colors.textPrimary, fontFamily: theme.fonts.heading }}
            >
                Welcome Back
            </motion.h1>

            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm font-medium"
                style={{ color: theme.colors.textSecondary }}
            >
                Sign in to continue to your account
            </motion.p>
        </div>
    );
}