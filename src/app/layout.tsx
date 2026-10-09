import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import ChatbotWidget from "@/components/ChatbotWidget";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "NexGenius Systems — Intelligent Systems & AI Engineering",
  description: "From AI-powered operations to enterprise software, we design, build and support the technology that moves your business forward.",
  icons: {
    icon: "/images/nexgenius-icon.png",
    shortcut: "/images/nexgenius-icon.png",
    apple: "/images/nexgenius-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${ibmPlexMono.variable} antialiased font-sans bg-white text-[#111827] selection:bg-[#14532D] selection:text-white min-h-screen overflow-x-hidden`}
      >
        <SmoothScroll />
        <Navbar />
        {children}
        <Footer />
        <ChatbotWidget />
      </body>
    </html>
  );
}
