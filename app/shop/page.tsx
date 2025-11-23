"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import shopData from "../../data/shop.json"; // Assuming this is the updated JSON with ispopular and stockOut

// Define the type for a shop item (including the new fields)
interface ShopItem {
  id: number;
  title: string;
  clientName: string;
  description: string;
  price: number;
  image: string;
  category: string;
  specs: string;
  details: string;
  ispopular: boolean;
  stockOut: boolean;
}

// Type assertion for the imported data
const typedShopData: ShopItem[] = shopData as ShopItem[];

export default function ShopPage() {
  const [cartNotification, setCartNotification] = useState<number | null>(null);
  // New state for category filter
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // --- Data & Filters ---

  // Extract all unique categories for the filter dropdown
  const categories = useMemo(() => {
    const allCategories = typedShopData.map((product) => product.category);
    return ["All", ...Array.from(new Set(allCategories))];
  }, []);

  // Filter the main product list based on the selected category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") {
      return typedShopData;
    }
    return typedShopData.filter(
      (product) => product.category === selectedCategory
    );
  }, [selectedCategory]);

  // Separate popular products for the dedicated section
  const popularProducts = useMemo(() => {
    return typedShopData.filter((product) => product.ispopular).slice(0, 4); // Limit to 4 popular items
  }, []);

  // --- Cart & Wishlist Handlers ---

  const handleAddToCart = (productId: number, e: React.MouseEvent) => {
    e.preventDefault();

    // Prevent adding to cart if stock is out (a double-check, though the button should be hidden)
    const product = typedShopData.find((p) => p.id === productId);
    if (product?.stockOut) return;

    // Get existing cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Check if product already exists in cart
    const existingItem = cart.find((item: any) => item.id === productId);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // Dispatch custom event to notify Header
    window.dispatchEvent(new Event("cartUpdated"));

    // Show notification
    setCartNotification(productId);
    setTimeout(() => setCartNotification(null), 2000);
  };

  // Dummy Wishlist function
  const handleAddToWishlist = (productId: number, e: React.MouseEvent) => {
    e.preventDefault();
    // In a real application, you would implement logic here to add to a wishlist in state or storage.
    console.log(`Product ${productId} added to Wishlist.`);
    alert("Item added to Wishlist! (Feature demonstration)");
  };

  // --- Product Card Component ---
  const ProductCard: React.FC<{ product: ShopItem }> = ({ product }) => (
    <Link
      key={product.id}
      href={`/shop/${product.id}`}
      className="shop-card group relative block"
    >
      <div className="bg-gray-900 rounded-lg overflow-hidden h-full flex flex-col hover:shadow-2xl hover:shadow-orange-700/30 transition duration-300">
        {/* Image Container with Badges */}
        <div className="relative h-48 bg-gray-800 overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
          />

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-2">
            {product.ispopular && (
              <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                Popular 🔥
              </span>
            )}
            {product.stockOut && (
              <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                Sold Out 🚫
              </span>
            )}
          </div>

          {/* Overlay with Conditional Button */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
            {product.stockOut ? (
              // Option 1: Stock Out -> Show Wishlist Button
              <button
                onClick={(e) => handleAddToWishlist(product.id, e)}
                className="bg-gray-400 text-black font-bold py-2 px-6 rounded hover:bg-gray-200 transition"
              >
                Add to Wishlist
              </button>
            ) : (
              // Option 2: In Stock -> Show Add to Cart Button
              <button
                onClick={(e) => handleAddToCart(product.id, e)}
                className="bg-white text-black font-bold py-2 px-6 rounded hover:bg-gray-200 transition"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 bg-gray-900 flex-grow">
          <p className="text-gray-400 text-sm mb-2">{product.category}</p>
          <h3 className="text-white font-bold text-lg mb-2 group-hover:text-orange-500 transition">
            {product.title}
          </h3>
        </div>

        {/* Price Section */}
        <div className="p-4 pt-0">
          <p className="text-orange-500 font-bold text-xl">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>
    </Link>
  );

  return (
    <div className="min-h-screen bg-black">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .shop-card { animation: fadeInUp 0.6s ease-out forwards; }
        .shop-card:nth-child(1) { animation-delay: 0.1s; }
        .shop-card:nth-child(2) { animation-delay: 0.2s; }
        .shop-card:nth-child(3) { animation-delay: 0.3s; }
        .shop-card:nth-child(4) { animation-delay: 0.4s; }
        .shop-card:nth-child(5) { animation-delay: 0.5s; }
        .shop-card:nth-child(6) { animation-delay: 0.6s; }
      `}</style>

      <div className="container mx-auto px-4 py-16">
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Shop
          </h1>
          <p className="text-gray-400 text-lg">
            Browse our collection of premium animated content
          </p>
        </div>

        {/* ==================================================================== */}
        {/* 1. POPULAR PRODUCTS SECTION (STATIC DISPLAY) */}
        {/* ==================================================================== */}
        {popularProducts.length > 0 && (
          <section className="mb-20">
            <h2 className="text-2xl md:text-4xl font-bold text-orange-500 mb-8 border-b border-gray-800 pb-4">
              🔥 Popular Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        {/* ==================================================================== */}
        {/* 2. CATEGORY FILTER & MAIN SHOP GRID */}
        {/* ==================================================================== */}
        <h2 className="text-4xl font-bold text-white mb-8 border-b border-gray-800 pb-4">
          All Products
        </h2>

        {/* Category Search/Filter */}
        <div className="mb-10 flex items-center justify-start">
          <label htmlFor="category-select" className="text-white text-lg mr-4">
            Filter by Category:
          </label>
          <select
            id="category-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-gray-800 text-white p-3 rounded-lg border border-gray-700 focus:ring-orange-500 focus:border-orange-500 transition"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Shop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product: ShopItem) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-10 bg-gray-900 rounded-lg">
              <p className="text-gray-400 text-xl">
                No products found in the "{selectedCategory}" category.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Cart Notification */}
      {cartNotification !== null && (
        <div className="fixed bottom-8 right-8 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-pulse">
          ✓ Added to cart!
        </div>
      )}
    </div>
  );
}
