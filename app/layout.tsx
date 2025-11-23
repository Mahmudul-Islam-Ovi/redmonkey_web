"use client";

import "./globals.css";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";
  const isContactPage = pathname === "/contact";
  const isCartPage = pathname === "/cart";
  const isShopPage = pathname === "/shop";

  return (
    <html lang="en">
      <body>
        {!isLoginPage && <Header />}
        {!isLoginPage && !isContactPage && !isCartPage && !isShopPage && (
          <Hero />
        )}
        {children}
        {!isLoginPage && <Footer />}
      </body>
    </html>
  );
}
