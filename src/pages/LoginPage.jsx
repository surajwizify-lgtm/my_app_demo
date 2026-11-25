import LoginHeader from "@/components/auth/LoginHeader";
import LoginForm from "@/components/auth/LoginForm";
import theme from "@/styles/theme";

export default function LoginPage() {
    return (
        <div
            className="relative flex min-h-screen flex-col overflow-hidden"
            style={{ backgroundColor: theme.colors.background }}
        >
            <div
                className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl"
                style={{ backgroundColor: theme.colors.primaryLight, opacity: 0.6 }}
            />
            <div
                className="pointer-events-none absolute -left-20 top-40 h-64 w-64 rounded-full blur-3xl"
                style={{ backgroundColor: theme.colors.secondaryLight, opacity: 0.4 }}
            />

            <div className="relative z-10 flex flex-1 flex-col justify-center py-10">
                <LoginHeader />
                <LoginForm />
            </div>
        </div>
    );
}