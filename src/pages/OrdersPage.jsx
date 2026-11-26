import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import OrderCard from "@/components/orders/OrderCard";
import theme from "@/styles/theme";

const ORDERS = [
    { id: 1, date: "2026-11-16", orderNo: "42PBDC6QSL", labName: "Healthquest Diagnostic", amount: "₹300", status: "Open", bookingType: "Pathology Test" },
    { id: 2, date: "2026-08-06", orderNo: "XV1PR5HWCO", labName: "Health Quest Labs", amount: "₹22499.25", status: "Open", bookingType: "Full Body Checkup" },
    { id: 3, date: "2026-07-23", orderNo: "X1DUTNYHHF", labName: "The Health County Labs", amount: "₹87.50", status: "Open", bookingType: "Blood Test" },
    { id: 4, date: "2026-07-13", orderNo: "PUM2GTK603", labName: "Pratham Ultrasound and Diagnostics centre", amount: "₹605", status: "Open", bookingType: "Ultrasound" },
];

export default function OrdersPage() {
    const navigate = useNavigate();

    return (
        <div
            className="flex flex-col w-full"
            style={{
                backgroundColor: theme.colors.background,
                height: '100vh',
                overflow: 'hidden'
            }}
        >
            <div
                className="shrink-0 relative overflow-hidden flex items-center rounded-bl-3xl rounded-br-3xl gap-3 px-4 py-4"
                style={{ backgroundColor: theme.colors.primary, borderBottom: `1px solid ${theme.colors.border}` }}
            >
                <div
                    className="absolute -top-6 -right-6 w-48 h-48 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.1)' }}
                />
                <div
                    className="absolute top-10 right-10 w-28 h-28 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.08)' }}
                />
                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full"
                    style={{ backgroundColor: theme.colors.background }}
                >
                    <ArrowLeft size={18} color={theme.colors.textPrimary} />
                </button>
                <div className="relative z-10 flex flex-col">
                    <h1 className="text-base font-bold leading-tight" style={{ color: theme.colors.white, fontFamily: theme.fonts.heading }}>
                        My Tests
                    </h1>
                    <p className="text-[11px]" style={{ color: theme.colors.white }}>
                        {ORDERS.length} orders found
                    </p>
                </div>
            </div>

            <div className="flex-1 w-full overflow-y-auto overflow-x-hidden">
                <div className="flex flex-col gap-3 px-4 py-4 pb-28">
                    {ORDERS.map((order) => (
                        <OrderCard key={order.id} order={order} />
                    ))}
                </div>
            </div>
        </div>
    );
}