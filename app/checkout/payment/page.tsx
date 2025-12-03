"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type PaymentMethod = "bkash" | "nagad" | "upay" | "rocket" | null;

interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
    clientName: string;
}

export default function PaymentPage() {
    const router = useRouter();
    const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>(null);
    const [transactionId, setTransactionId] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [deliveryAddress, setDeliveryAddress] = useState("");
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [deliveryLocation, setDeliveryLocation] = useState<"inside" | "outside">("inside");
    const [error, setError] = useState("");

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]") as CartItem[];
        const savedLocation = localStorage.getItem("deliveryLocation") as "inside" | "outside" | null;
        setCartItems(cart);
        if (savedLocation) {
            setDeliveryLocation(savedLocation);
        }

        // Redirect if cart is empty
        if (cart.length === 0) {
            router.push("/cart");
        }
    }, [router]);

    const paymentMethods = [
        { id: "bkash", name: "bKash", icon: "💰", color: "from-pink-600 to-pink-700" },
        { id: "nagad", name: "Nagad", icon: "📱", color: "from-orange-600 to-orange-700" },
        { id: "upay", name: "Upay", icon: "💳", color: "from-blue-600 to-blue-700" },
        { id: "rocket", name: "Rocket", icon: "🚀", color: "from-purple-600 to-purple-700" },
    ];

    const handleProceedToSummary = () => {
        // Validation
        if (!selectedMethod) {
            setError("Please select a payment method");
            return;
        }
        if (!transactionId.trim()) {
            setError("Please enter transaction ID");
            return;
        }
        if (!phoneNumber.trim()) {
            setError("Please enter phone number");
            return;
        }
        if (!/^01[0-9]{9}$/.test(phoneNumber)) {
            setError("Please enter a valid Bangladeshi phone number (01XXXXXXXXX)");
            return;
        }
        if (!deliveryAddress.trim()) {
            setError("Please enter delivery address");
            return;
        }

        // Save payment details to localStorage
        const paymentDetails = {
            method: selectedMethod,
            transactionId: transactionId.trim(),
            phoneNumber: phoneNumber.trim(),
            deliveryAddress: deliveryAddress.trim(),
            deliveryLocation: deliveryLocation,
        };
        localStorage.setItem("paymentDetails", JSON.stringify(paymentDetails));

        // Navigate to summary
        router.push("/checkout/summary");
    };

    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
    const deliveryCharge = deliveryLocation === "inside" ? 60 : 100;
    const total = subtotal + deliveryCharge;

    if (cartItems.length === 0) {
        return null; // Will redirect
    }

    return (
        <div className="min-h-screen bg-black">
            <div className="container mx-auto px-4 py-16 max-w-5xl">
                {/* Header */}
                <div className="mb-12">
                    <Link href="/cart" className="text-orange-500 hover:text-orange-400 mb-4 inline-block">
                        ← Back to Cart
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">Payment Details</h1>
                    <p className="text-gray-400 mt-2">Select your payment method and enter details</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Payment Form */}
                    <div className="lg:col-span-2">
                        {/* Payment Method Selection */}
                        <div className="bg-gray-900 rounded-lg p-8 mb-6">
                            <h2 className="text-2xl font-bold text-white mb-6">Select Payment Method</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {paymentMethods.map((method) => (
                                    <button
                                        key={method.id}
                                        onClick={() => {
                                            setSelectedMethod(method.id as PaymentMethod);
                                            setError("");
                                        }}
                                        className={`p-6 rounded-lg border-2 transition-all transform hover:scale-105 ${selectedMethod === method.id
                                                ? `border-orange-500 bg-gradient-to-br ${method.color}`
                                                : "border-gray-700 bg-gray-800 hover:border-gray-600"
                                            }`}
                                    >
                                        <div className="text-4xl mb-2">{method.icon}</div>
                                        <div className="text-white font-bold text-lg">{method.name}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Payment Details Form */}
                        <div className="bg-gray-900 rounded-lg p-8">
                            <h2 className="text-2xl font-bold text-white mb-6">Enter Payment Details</h2>

                            {error && (
                                <div className="mb-6 p-4 bg-red-600/20 border border-red-600 rounded-lg">
                                    <p className="text-red-400">{error}</p>
                                </div>
                            )}

                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="transactionId" className="block text-white font-semibold mb-2">
                                        Transaction ID <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="transactionId"
                                        value={transactionId}
                                        onChange={(e) => {
                                            setTransactionId(e.target.value);
                                            setError("");
                                        }}
                                        placeholder="Enter your transaction ID"
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition"
                                    />
                                    <p className="text-gray-500 text-sm mt-1">
                                        Enter the transaction ID from your payment confirmation
                                    </p>
                                </div>

                                <div>
                                    <label htmlFor="phoneNumber" className="block text-white font-semibold mb-2">
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="phoneNumber"
                                        value={phoneNumber}
                                        onChange={(e) => {
                                            setPhoneNumber(e.target.value);
                                            setError("");
                                        }}
                                        placeholder="01XXXXXXXXX"
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition"
                                    />
                                    <p className="text-gray-500 text-sm mt-1">
                                        Enter the phone number used for payment
                                    </p>
                                </div>

                                <div>
                                    <label htmlFor="deliveryAddress" className="block text-white font-semibold mb-2">
                                        Delivery Address <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="deliveryAddress"
                                        value={deliveryAddress}
                                        onChange={(e) => {
                                            setDeliveryAddress(e.target.value);
                                            setError("");
                                        }}
                                        placeholder="Enter your complete delivery address"
                                        rows={3}
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition resize-none"
                                    />
                                    <p className="text-gray-500 text-sm mt-1">
                                        Provide detailed address including house/flat number, road, area
                                    </p>
                                </div>

                                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                                    <h3 className="text-white font-semibold mb-2">Payment Instructions:</h3>
                                    <ol className="text-gray-400 text-sm space-y-1 list-decimal list-inside">
                                        <li>Send the exact amount to our merchant number</li>
                                        <li>Save the transaction ID from confirmation message</li>
                                        <li>Enter the transaction ID and your phone number</li>
                                        <li>Provide your delivery address</li>
                                        <li>Proceed to review your order</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-900 rounded-lg p-8 sticky top-24">
                            <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-6 border-b border-gray-700 pb-6">
                                <div className="flex justify-between text-gray-400">
                                    <span>Items ({cartItems.length})</span>
                                    <span>৳ {subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-400">
                                    <span>Delivery ({deliveryLocation === "inside" ? "Inside Dhaka" : "Outside Dhaka"})</span>
                                    <span>৳ {deliveryCharge.toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="flex justify-between text-white font-bold text-xl mb-6">
                                <span>Total</span>
                                <span className="text-orange-500">৳ {total.toFixed(2)}</span>
                            </div>

                            <button
                                onClick={handleProceedToSummary}
                                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg transition mb-4"
                            >
                                See Products Summary
                            </button>

                            <div className="mt-6 pt-6 border-t border-gray-700">
                                <p className="text-gray-500 text-sm mb-2">
                                    🔒 Secure payment processing
                                </p>
                                <p className="text-gray-500 text-sm">
                                    ✓ Your data is encrypted and safe
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
