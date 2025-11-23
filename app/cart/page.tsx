"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
// import { XMarkIcon } from "@heroicons/react/24/outline"; // Icon for the toast close button

// Define the type for a cart item for better type safety
interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
  clientName: string;
}

// ------------------------------------------
// 1. TOAST COMPONENT
// ------------------------------------------
interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-[100] p-4 rounded-lg bg-green-600 shadow-xl transition-opacity duration-300 ease-in-out opacity-100 flex items-center gap-4">
      <p className="text-white font-semibold">{message}</p>
      <button onClick={onClose} className="text-white hover:text-gray-200">
        x
      </button>
    </div>
  );
};

// ------------------------------------------
// 2. MAIN COMPONENT
// ------------------------------------------
export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showRemoveAllConfirm, setShowRemoveAllConfirm] = useState(false);
  const [itemToRemoveId, setItemToRemoveId] = useState<number | null>(null);

  // New state for Toast
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    // Note: Type assertion to CartItem[] is safe here since we control the storage/parsing
    const cart = JSON.parse(localStorage.getItem("cart") || "[]") as CartItem[];
    setCartItems(cart);
    setIsLoading(false);
  }, []);

  // New function to display toast
  const triggerToast = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000); // Hide after 3 seconds
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      // Trigger confirmation for removal when quantity drops to 0 or less
      setItemToRemoveId(productId);
      return;
    }

    const updated = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));

    // Dispatch custom event to update header (assuming a header component listens for this)
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const removeItem = (productId: number) => {
    const itemTitle =
      cartItems.find((item) => item.id === productId)?.title || "Item";
    const updated = cartItems.filter((item) => item.id !== productId);
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    setItemToRemoveId(null); // Close confirmation dialog after removal

    // 🔥 ADD TOAST TRIGGER
    triggerToast(`"${itemTitle}" removed successfully!`);

    // Dispatch custom event to update header
    window.dispatchEvent(new Event("cartUpdated"));
  };

  // New function to clear the entire cart
  const removeAllItems = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
    setShowRemoveAllConfirm(false); // Close confirmation dialog

    // 🔥 ADD TOAST TRIGGER
    triggerToast("All items removed successfully!");

    // Dispatch custom event to update header
    window.dispatchEvent(new Event("cartUpdated"));
  };

  // Handlers for confirmation dialogues
  const handleRemoveAllConfirm = () => setShowRemoveAllConfirm(true);
  const handleRemoveAllCancel = () => setShowRemoveAllConfirm(false);

  const handleRemoveItemClick = (productId: number) =>
    setItemToRemoveId(productId);
  const handleRemoveItemCancel = () => setItemToRemoveId(null);

  const handleRemoveItemConfirm = (productId: number) => removeItem(productId);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  // Confirmation Dialogue Component (using Tailwind for styling)
  const ConfirmationDialog = ({
    message,
    onConfirm,
    onCancel,
  }: {
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
  }) => (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
      <div className="bg-gray-800 rounded-lg p-8 w-full max-w-sm mx-4 shadow-2xl">
        <p className="text-white text-lg mb-6">{message}</p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition font-semibold"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition font-semibold"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-12 flex justify-between items-center">
          <h1 className="text-5xl font-bold text-white mb-4">Shopping Cart</h1>
          {cartItems.length > 0 && (
            <button
              onClick={handleRemoveAllConfirm}
              className="text-red-500 hover:text-red-400 font-semibold text-lg transition"
            >
              Remove All Items
            </button>
          )}
        </div>
        <Link href="/shop" className="text-orange-500 hover:text-orange-400">
          ← Continue Shopping
        </Link>

        {cartItems.length === 0 ? (
          <div className="bg-gray-900 rounded-lg p-12 text-center mt-12">
            <p className="text-gray-400 text-xl mb-6">Your cart is empty</p>
            <Link
              href="/shop"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-12 mt-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-900 rounded-lg p-6 flex gap-6 items-start hover:bg-gray-800 transition"
                  >
                    {/* Product Image */}
                    <Link href={`/shop/${item.id}`} className="flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-24 h-24 object-cover rounded hover:opacity-80 transition"
                      />
                    </Link>

                    {/* Product Info */}
                    <div className="flex-1">
                      <Link
                        href={`/shop/${item.id}`}
                        className="text-white font-bold text-lg hover:text-orange-500 transition"
                      >
                        {item.title}
                      </Link>
                      <p className="text-gray-400 mb-2">{item.clientName}</p>
                      <p className="text-orange-500 font-semibold mb-4">
                        ${item.price.toFixed(2)} each
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded transition"
                        >
                          −
                        </button>
                        <span className="px-4 py-1 bg-gray-700 text-white font-bold rounded">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded transition"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Item Total & Remove */}
                    <div className="text-right">
                      <p className="text-white font-bold text-lg mb-4">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => handleRemoveItemClick(item.id)} // Use confirmation handler
                        className="text-red-500 hover:text-red-400 transition font-semibold text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900 rounded-lg p-8 sticky top-24">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6 border-b border-gray-700 pb-6">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Tax (10%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between text-white font-bold text-xl mb-6">
                  <span>Total</span>
                  <span className="text-orange-500">${total.toFixed(2)}</span>
                </div>

                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg transition mb-4">
                  Proceed to Checkout
                </button>

                <Link
                  href="/shop"
                  className="block text-center text-gray-400 hover:text-gray-300 transition"
                >
                  Continue Shopping
                </Link>

                <div className="mt-8 pt-8 border-t border-gray-700">
                  <p className="text-gray-500 text-sm mb-3">
                    ✓ Free shipping on orders over $100
                  </p>
                  <p className="text-gray-500 text-sm mb-3">
                    ✓ 30-day money back guarantee
                  </p>
                  <p className="text-gray-500 text-sm">
                    ✓ 24/7 customer support
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Confirmation Dialogs */}
      {showRemoveAllConfirm && (
        <ConfirmationDialog
          message="Are you sure you want to remove ALL items from your cart? This action cannot be undone."
          onConfirm={removeAllItems}
          onCancel={handleRemoveAllCancel}
        />
      )}

      {itemToRemoveId !== null && (
        <ConfirmationDialog
          message={`Are you sure you want to remove this item from your cart?`}
          onConfirm={() => handleRemoveItemConfirm(itemToRemoveId)}
          onCancel={handleRemoveItemCancel}
        />
      )}

      {/* 💥 TOAST NOTIFICATION RENDER 💥 */}
      <Toast
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}
