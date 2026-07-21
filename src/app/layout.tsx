import type { Metadata } from "next";
import ChatbotWidget from "@/components/ChatbotWidget";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexGenius Solutions",
  description: "A premium AI company building intelligent systems for the future.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GlobalBackground from "@/components/GlobalBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body suppressHydrationWarning className={`antialiased font-sans bg-transparent text-white selection:bg-brand-primary selection:text-black min-h-screen overflow-x-hidden`}>
        <GlobalBackground />
        <SmoothScroll />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        <ChatbotWidget />
      </body>
    </html>
  );
}
