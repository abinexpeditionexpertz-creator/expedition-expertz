import type { Metadata } from "next";
import { Be_Vietnam_Pro, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--font-be-vietnam-pro",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ['600', '700'],
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Expedition Expertz",
  description: "Discover the Extraordinary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${beVietnamPro.variable} ${plusJakartaSans.variable} scroll-smooth`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-surface text-on-surface font-body-md overflow-x-hidden min-h-full flex flex-col relative">
        <Navbar />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
