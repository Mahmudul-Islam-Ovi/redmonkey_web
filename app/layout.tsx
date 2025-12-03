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
  const isHeroPage = [
    "/cart",
    "/contact",
    "/shop",
    "/comics",
    "/about",
    "/terms",
    "/privacy",
    "/coloring-book",
  ].includes(pathname);

  return (
    <html lang="en">
      <body>
        {!isLoginPage && <Header />}
        {/* {!isLoginPage && !isHeroPage && <Hero />} */}
        {children}
        {!isLoginPage && <Footer />}
      </body>
    </html>
  );
}
