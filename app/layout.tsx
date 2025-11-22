import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AIChat } from "@/components/AIChat";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "3.1ST Engineering | Construction Excellence Since 2011",
  description: "Professional construction services across commercial, residential, and engineering sectors. Well driven Artisans, full of resilience to get the job done competently. Quality and efficiency is our hallmark!",
  keywords: ["Construction", "Engineering", "Commercial Construction", "Residential Construction", "Ground Work", "Drilling", "Mechanical & Electrical", "Drylining", "Fire Stop", "Construction Company"],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: "/LOBO.png",
    shortcut: "/LOBO.png",
    apple: "/LOBO.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navigation />
          {children}
          <Footer />
          <AIChat />
        </ThemeProvider>
      </body>
    </html>
  );
}
