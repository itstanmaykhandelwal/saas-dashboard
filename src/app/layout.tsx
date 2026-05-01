import "./globals.css";
import Providers from "./providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// 🔤 Font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// 🌐 SEO / Tab title
export const metadata: Metadata = {
  title: "SaaS Analytics Dashboard",
  description: "Track users, revenue, and business insights in one place",
  keywords: ["Dashboard", "Analytics", "SaaS", "Next.js"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans bg-gray-50 text-gray-900 
                    dark:bg-gray-900 dark:text-gray-100`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}