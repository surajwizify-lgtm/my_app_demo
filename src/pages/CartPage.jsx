import { useState } from "react";
import CartHeader from "@/components/cart/CartHeader";
import CartItemCard from "@/components/cart/CartItemCard";
import CartEmptyState from "@/components/cart/CartEmptyState";
import CartBillSummary from "@/components/cart/CartBillSummary";
import CartCheckoutBar from "@/components/cart/CartCheckoutBar";
import theme from "@/styles/theme";

const INITIAL_CART = [
    { id: 1, name: "Comprehensive Health Checkup", category: "Health Package", price: 2500, qty: 1 },
    { id: 2, name: "CBC (Complete Blood Count)", category: "Lab Test", price: 350, qty: 2 },
    { id: 3, name: "Home Nursing Care", category: "Home Service", price: 1500, qty: 1 },
];

export default function CartPage() {
    const [cartItems, setCartItems] = useState(INITIAL_CART);

    const handleQtyChange = (id, newQty) => {
        setCartItems((prev) =>
            prev.map((item) => (item.id === id ? { ...item, qty: newQty } : item))
        );
    };

    const handleRemove = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
    const discount = subtotal / 4;
    const tax = Math.round(subtotal * 0.05);
    const total = subtotal - discount + tax;

    return (
        <div
            style={{
                margin: "0 auto",
                position: "relative",
                minHeight: "100vh",
                backgroundColor: theme.colors.background,
            }}
        >
            <CartHeader />

            {cartItems.length === 0 ? (
                <CartEmptyState />
            ) : (
                <div className="flex flex-col gap-4 px-4 py-4 pb-28">
                    <div className="flex flex-col gap-3">
                        {cartItems.map((item) => (
                            <CartItemCard
                                key={item.id}
                                item={item}
                                onQtyChange={handleQtyChange}
                                onRemove={handleRemove}
                            />
                        ))}
                    </div>

                    <CartBillSummary
                        subtotal={subtotal}
                        discount={discount}
                        tax={tax}
                        total={total}
                        appliedCoupon="ABC"
                    />

                    <CartCheckoutBar total={total} />
                </div>
            )}
        </div>
    );
}