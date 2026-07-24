import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import ChatbotWidget from "@/components/ChatbotWidget";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const avocado = localFont({
  src: [
    {
      path: './fonts/LTAvocado-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/LTAvocado-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-avocado',
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NexGenius - AI Automation Agency",
  description: "Automate, Optimize, Scale With AI. Custom AI workflows and systems.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalBackground from "@/components/GlobalBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body suppressHydrationWarning className={`${avocado.variable} ${manrope.variable} antialiased font-sans bg-[#021107] text-white selection:bg-brand-primary selection:text-white min-h-screen overflow-x-hidden`}>
        {/* Global Neural Network & Aurora Canvas Background from Hasnain */}
        <GlobalBackground />

        <SmoothScroll />
        <Navbar />
        {children}
        <Footer />
        <ChatbotWidget />
      </body>
    </html>
  );
}

