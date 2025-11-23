"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import shopData from "../../../data/shop.json";

export default function ShopDetailPage() {
  const params = useParams();
  const productId = parseInt(params.id as string);
  const product = shopData.find((p: any) => p.id === productId);
  const [quantity, setQuantity] = useState(1);
  const [cartNotification, setCartNotification] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">
            Product not found
          </h1>
          <Link href="/shop" className="text-orange-500 hover:text-orange-400">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingItem = cart.find((item: any) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setCartNotification(true);
    setTimeout(() => setCartNotification(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-gray-400 text-sm">
          <Link href="/" className="hover:text-orange-600 transition">
            Home
          </Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-orange-600 transition">
            Shop
          </Link>
          <span>/</span>
          <span className="text-white">{product.title}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-96 md:h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <p className="text-orange-500 font-semibold mb-2">
                {product.category}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {product.title}
              </h1>
              <p className="text-gray-400 text-lg">{product.clientName}</p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-orange-500">
                ${product.price}
              </span>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              {product.description}
            </p>

            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-white font-bold mb-3">Specifications</h3>
              <p className="text-gray-400">{product.specs}</p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-white font-bold mb-3">Details</h3>
              <p className="text-gray-400">{product.details}</p>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="text-white font-semibold">Quantity:</span>
              <div className="flex items-center border border-gray-700 rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-gray-400 hover:text-white transition"
                >
                  −
                </button>
                <span className="px-4 py-2 text-white font-bold">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-gray-400 hover:text-white transition"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-lg transition duration-300 text-lg"
            >
              Add to Cart
            </button>

            {/* Back Link */}
            <Link
              href="/shop"
              className="block text-orange-500 hover:text-orange-400 transition font-semibold"
            >
              ← Back to Shop
            </Link>
          </div>
        </div>
      </div>

      {/* Cart Notification */}
      {cartNotification && (
        <div className="fixed bottom-8 right-8 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-pulse">
          ✓ Added {quantity} item(s) to cart!
        </div>
      )}
    </div>
  );
}
