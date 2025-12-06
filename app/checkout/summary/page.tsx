"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
    clientName: string;
}

interface PaymentDetails {
    method: string;
    transactionId: string;
    phoneNumber: string;
    deliveryAddress: string;
    deliveryLocation: "inside" | "outside";
}

export default function SummaryPage() {
    const router = useRouter();
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [paymentDetails, setPaymentDetails] = useState<PaymentDetails | null>(null);
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]") as CartItem[];
        const payment = JSON.parse(localStorage.getItem("paymentDetails") || "null") as PaymentDetails | null;

        setCartItems(cart);
        setPaymentDetails(payment);

        // Redirect if cart is empty or payment details missing
        if (cart.length === 0) {
            router.push("/cart");
        } else if (!payment) {
            router.push("/checkout/payment");
        }
    }, [router]);

    const handleSubmitOrder = async () => {
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/send-order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    cartItems,
                    paymentDetails,
                    subtotal,
                    deliveryCharge,
                    total,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setShowSuccessDialog(true);
            } else {
                alert(data.error || "Failed to submit order. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting order:", error);
            alert("An error occurred while submitting your order. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCloseSuccessDialog = () => {
        setShowSuccessDialog(false);
        // Clear cart and payment details
        localStorage.removeItem("cart");
        localStorage.removeItem("paymentDetails");
        localStorage.removeItem("deliveryLocation");
        window.dispatchEvent(new Event("cartUpdated"));
        // Redirect to shop page
        router.push("/shop");
    };

    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
    const deliveryCharge = paymentDetails ? (paymentDetails.deliveryLocation === "inside" ? 60 : 100) : 60;
    const total = subtotal + deliveryCharge;

    const getPaymentMethodName = (method: string) => {
        const methods: { [key: string]: string } = {
            bkash: "bKash",
            nagad: "Nagad",
            upay: "Upay",
            rocket: "Rocket",
        };
        return methods[method] || method;
    };

    if (!paymentDetails || cartItems.length === 0) {
        return null; // Will redirect
    }

    return (
        <div className="min-h-screen bg-black">
            <div className="container mx-auto px-4 py-16 max-w-5xl">
                {/* Header */}
                <div className="mb-12">
                    <Link href="/checkout/payment" className="text-orange-500 hover:text-orange-400 mb-4 inline-block">
                        ← Back to Payment
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">Order Summary</h1>
                    <p className="text-gray-400 mt-2">Review your order before submission</p>
                </div>

                {/* Order Details */}
                <div className="space-y-6">
                    {/* Products Section */}
                    <div className="bg-gray-900 rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-white mb-6">Products</h2>
                        <div className="space-y-4">
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex gap-4 items-center pb-4 border-b border-gray-800 last:border-b-0"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-20 h-20 object-cover rounded"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-white font-semibold">{item.title}</h3>
                                        <p className="text-gray-400 text-sm">{item.clientName}</p>
                                        <p className="text-gray-400 text-sm">Quantity: {item.quantity}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-white font-semibold">
                                            ৳ {(item.price * item.quantity).toFixed(2)}
                                        </p>
                                        <p className="text-gray-500 text-sm">
                                            ৳ {item.price.toFixed(2)} each
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Payment Details Section */}
                    <div className="bg-gray-900 rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-white mb-6">Payment Information</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <p className="text-gray-400 mb-2">Payment Method</p>
                                <p className="text-white font-semibold text-lg">
                                    {getPaymentMethodName(paymentDetails.method)}
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-400 mb-2">Transaction ID</p>
                                <p className="text-white font-semibold text-lg font-mono">
                                    {paymentDetails.transactionId}
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-400 mb-2">Phone Number</p>
                                <p className="text-white font-semibold text-lg">
                                    {paymentDetails.phoneNumber}
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-400 mb-2">Payment Status</p>
                                <p className="text-yellow-500 font-semibold text-lg">
                                    Pending Verification
                                </p>
                            </div>
                        </div>

                        {/* Delivery Address */}
                        <div className="mt-6 pt-6 border-t border-gray-700">
                            <p className="text-gray-400 mb-2">Delivery Address</p>
                            <p className="text-white font-semibold text-lg">
                                {paymentDetails.deliveryAddress}
                            </p>
                            <p className="text-gray-400 text-sm mt-2">
                                {paymentDetails.deliveryLocation === "inside" ? "Inside Dhaka" : "Outside Dhaka"}
                            </p>
                        </div>
                    </div>

                    {/* Order Total Section */}
                    <div className="bg-gray-900 rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-white mb-6">Order Total</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between text-gray-400">
                                <span>Subtotal ({cartItems.length} items)</span>
                                <span>৳ {subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-400">
                                <span>Delivery Charge ({paymentDetails.deliveryLocation === "inside" ? "Inside Dhaka" : "Outside Dhaka"})</span>
                                <span>৳ {deliveryCharge.toFixed(2)}</span>
                            </div>
                            <div className="pt-4 border-t border-gray-700">
                                <div className="flex justify-between text-white font-bold text-2xl">
                                    <span>Total</span>
                                    <span className="text-orange-500">৳ {total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Submit Order Button */}
                    <div className="bg-gray-900 rounded-lg p-8">
                        <button
                            onClick={handleSubmitOrder}
                            disabled={isSubmitting}
                            className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition text-lg"
                        >
                            {isSubmitting ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Processing Order...
                                </span>
                            ) : (
                                "Submit Order"
                            )}
                        </button>
                        <p className="text-gray-500 text-sm text-center mt-4">
                            By submitting, you agree to our terms and conditions
                        </p>
                    </div>
                </div>
            </div>

            {/* Success Dialog */}
            {showSuccessDialog && (
                <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
                    <div className="bg-gray-900 rounded-lg p-8 max-w-md w-full border-2 border-green-500 shadow-2xl animate-scale-in">
                        <div className="text-center">
                            {/* Success Icon */}
                            <div className="mb-6 flex justify-center">
                                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                                    <svg
                                        className="w-12 h-12 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={3}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* Success Message */}
                            <h2 className="text-3xl font-bold text-white mb-4">Order Successful!</h2>
                            <p className="text-gray-400 mb-2">
                                Your order has been placed successfully.
                            </p>
                            <p className="text-gray-400 mb-8">
                                We'll verify your payment and send you a confirmation email shortly.
                            </p>

                            {/* Order Details */}
                            <div className="bg-gray-800 rounded-lg p-4 mb-6 text-left">
                                <p className="text-gray-500 text-sm mb-2">Transaction ID</p>
                                <p className="text-white font-mono font-semibold">
                                    {paymentDetails.transactionId}
                                </p>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={handleCloseSuccessDialog}
                                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg transition"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
        @keyframes scale-in {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
        </div>
    );
}
