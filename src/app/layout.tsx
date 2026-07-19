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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body suppressHydrationWarning className={`${avocado.variable} ${manrope.variable} antialiased font-sans bg-[#021107] text-white selection:bg-brand-primary selection:text-white min-h-screen overflow-x-hidden`}>
        {/* Global Premium Deep Neon Green Gradient Background */}
        <div className="fixed inset-0 -z-30 bg-gradient-to-br from-[#021107] via-[#010804] to-[#041c0b]" />
        
        {/* Global Animated glow orbs for premium mesh gradient effect */}
        <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden opacity-80">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#39ff14]/15 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#00ff7f]/15 blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
          <div className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] rounded-full bg-[#10b981]/10 blur-[130px] mix-blend-screen animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
        </div>

        <SmoothScroll />
        <Navbar />
        {children}
        <Footer />
        <ChatbotWidget />
      </body>
    </html>
  );
}

