"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Button from "./Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
            width={50}
            height={50}
            className="flex-shrink-0 rounded-full"
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

        {/* Desktop Login */}
        <div className="hidden md:block">
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
