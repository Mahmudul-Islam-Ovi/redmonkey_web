import "./globals.css";
import { ReactNode } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export const metadata = {
  title: "RedMonkey — Animator Portfolio",
  description: "Where Bangla Stories Come Alive",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Hero />
        {children}
        <Footer />
      </body>
    </html>
  );
}
