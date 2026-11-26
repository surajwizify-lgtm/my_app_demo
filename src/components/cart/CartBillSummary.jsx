import { ReceiptText, Tag, TicketPercent } from "lucide-react";
import theme from "@/styles/theme";

export default function CartBillSummary({
    subtotal,
    testDiscount = 50,
    couponDiscount = 100,
    tax,
    total,
    appliedCoupon,
    onOpenCoupons,
    onRemoveCoupon
}) {
    const totalDiscount = testDiscount + couponDiscount;

    return (
        <div
            className="rounded-2xl p-5"
            style={{
                backgroundColor: theme.colors.surface,
                border: `1px solid ${theme.colors.border}`,
                boxShadow: theme.shadows.soft,
            }}
        >
            <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <ReceiptText size={16} color={theme.colors.primary} />
                    <h2 className="text-[14px] font-bold" style={{ color: theme.colors.textPrimary }}>
                        Bill Details
                    </h2>
                </div>

                {(
                    <button
                        type="button"
                        onClick={onOpenCoupons}
                        className="flex items-center gap-1 text-[12px] font-bold"
                        style={{ color: theme.colors.primary }}
                    >
                        <TicketPercent size={14} />
                        View Coupons
                    </button>
                )}
            </div>

            {appliedCoupon && (
                <div
                    className="mb-4 flex items-center justify-between rounded-xl p-3"
                    style={{ backgroundColor: theme.colors.successLight, border: `1px dashed ${theme.colors.success}60` }}
                >
                    <div className="flex items-center gap-2.5">
                        <div
                            className="flex h-8 w-8 items-center justify-center rounded-full"
                            style={{ backgroundColor: theme.colors.success }}
                        >
                            <Tag size={14} color={theme.colors.white} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[12px] font-bold" style={{ color: theme.colors.success }}>
                                {appliedCoupon.code} Applied
                            </span>
                            <span className="text-[10px] font-medium" style={{ color: theme.colors.textSecondary }}>
                                You saved ₹{couponDiscount.toLocaleString("en-IN")}
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="text-sm font-bold mb-0.5" style={{ color: theme.colors.success }}>
                            20% off
                        </div>
                        <button
                            type="button"
                            onClick={onRemoveCoupon}
                            className="text-[10px] font-bold underline"
                            style={{ color: theme.colors.danger }}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            )}

            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <span className="text-[12px]" style={{ color: theme.colors.textSecondary }}>
                        Item Total
                    </span>
                    <span className="text-[12px] font-semibold" style={{ color: theme.colors.textPrimary }}>
                        ₹{subtotal.toLocaleString("en-IN")}
                    </span>
                </div>

                {testDiscount > 0 && (
                    <div className="flex items-center justify-between">
                        <span className="text-[12px]" style={{ color: theme.colors.textSecondary }}>
                            Test Discount
                        </span>
                        <span className="text-[12px] font-semibold" style={{ color: theme.colors.success }}>
                            - ₹{testDiscount.toLocaleString("en-IN")}
                        </span>
                    </div>
                )}

                {couponDiscount > 0 && (
                    <div className="flex items-center justify-between">
                        <span className="text-[12px]" style={{ color: theme.colors.textSecondary }}>
                            Coupon Discount
                        </span>
                        <span className="text-[12px] font-semibold" style={{ color: theme.colors.success }}>
                            - ₹{couponDiscount.toLocaleString("en-IN")}
                        </span>
                    </div>
                )}

                {totalDiscount > 0 && (
                    <div className="flex items-center justify-between">
                        <span className="text-[12px] font-bold" style={{ color: theme.colors.textPrimary }}>
                            Total Discount
                        </span>
                        <span className="text-[12px] font-bold" style={{ color: theme.colors.success }}>
                            - ₹{totalDiscount.toLocaleString("en-IN")}
                        </span>
                    </div>
                )}

                <div className="flex items-center justify-between">
                    <span className="text-[12px]" style={{ color: theme.colors.textSecondary }}>
                        Taxes & Charges
                    </span>
                    <span className="text-[12px] font-semibold" style={{ color: theme.colors.textPrimary }}>
                        ₹{tax.toLocaleString("en-IN")}
                    </span>
                </div>

                <div className="my-1 border-t" style={{ borderColor: theme.colors.border }} />

                <div className="flex items-center justify-between">
                    <span className="text-[13px] font-bold" style={{ color: theme.colors.textPrimary }}>
                        To Pay
                    </span>
                    <span className="text-[16px] font-bold" style={{ color: theme.colors.primary }}>
                        ₹{total.toLocaleString("en-IN")}
                    </span>
                </div>
            </div>
        </div>
    );
}