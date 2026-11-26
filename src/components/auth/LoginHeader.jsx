import { motion } from "framer-motion";
import theme from "@/styles/theme";

export default function LoginHeader() {
    return (
        <div className="flex flex-col items-center px-6 pb-8 pt-16 text-center">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mb-6 p-4 flex h-30 w-30 items-center justify-center overflow-hidden rounded-3xl"
                style={{
                    boxShadow: `0 12px 32px ${theme.colors.primary}40`,
                }}
            >
                <img
                    src="https://latest.healthynxt.com/uploads/logo/logo.webp"
                    alt="Logo"
                    className="h-full w-full object-cover"
                />
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