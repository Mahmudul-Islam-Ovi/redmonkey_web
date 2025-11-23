"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Button from "./Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Update cart count on mount and when storage changes
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const count = cart.reduce(
        (total: number, item: any) => total + item.quantity,
        0
      );
      setCartCount(count);
    };

    updateCartCount();

    // Listen for storage changes
    window.addEventListener("storage", updateCartCount);

    // Custom event listener for local updates
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-gradient-to-r from-black to-gray-900 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="RedMonkey Logo"
            width={100}
            height={100}
            className="flex-shrink-0 "
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Desktop Navigation */}
        <nav className="space-x-4 hidden md:flex items-center">
          <Button href="/works" isActive={isActive("/works")}>
            Work
          </Button>
          <Button href="/services" isActive={isActive("/services")}>
            Services
          </Button>
          <Button href="/streaming" isActive={isActive("/streaming")}>
            Streaming
          </Button>
          <Button href="/comics" isActive={isActive("/comics")}>
            Comics
          </Button>
          <Button href="/coloring-book" isActive={isActive("/coloring-book")}>
            Coloring Book
          </Button>
          <Button href="/shop" isActive={isActive("/shop")}>
            Shop
          </Button>
          <Button href="/about" isActive={isActive("/about")}>
            About
          </Button>
          <Button href="/contact" isActive={isActive("/contact")}>
            Contact
          </Button>
        </nav>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center gap-4">
          {/* Cart Icon */}
          <Link
            href="/cart"
            className="relative text-white hover:text-orange-500 transition text-2xl"
          >
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <Button href="/login" variant="primary">
            Login
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            <Button
              href="/works"
              isActive={isActive("/works")}
              onClick={() => setIsOpen(false)}
            >
              Work
            </Button>
            <Button
              href="/services"
              isActive={isActive("/services")}
              onClick={() => setIsOpen(false)}
            >
              Services
            </Button>
            <Button
              href="/streaming"
              isActive={isActive("/streaming")}
              onClick={() => setIsOpen(false)}
            >
              Streaming
            </Button>
            <Button
              href="/comics"
              isActive={isActive("/comics")}
              onClick={() => setIsOpen(false)}
            >
              Comics
            </Button>
            <Button
              href="/coloring-book"
              isActive={isActive("/coloring-book")}
              onClick={() => setIsOpen(false)}
            >
              Coloring Book
            </Button>
            <Button
              href="/shop"
              isActive={isActive("/shop")}
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Button>
            <Button
              href="/about"
              isActive={isActive("/about")}
              onClick={() => setIsOpen(false)}
            >
              About
            </Button>
            <Button
              href="/contact"
              isActive={isActive("/contact")}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Button>
            <Link
              href="/cart"
              className="text-white hover:text-orange-500 transition py-2"
            >
              🛒 Cart ({cartCount})
            </Link>
            <Button
              href="/login"
              variant="primary"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
