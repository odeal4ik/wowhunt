import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const barlowSans = localFont({
  src: "./fonts/Barlow/Barlow-Regular.ttf",
  variable: "--font-barlow-sans",
  weight: "400",
});

export const metadata: Metadata = {
  title:
    "Games Boosting Service - Buy Professional & 100% Safe Carry & Leveling Services - Wowhunt",
  description:
    "WoWHUNT is a leading professional game boosting services platform that offers best prices & customer-friendly 24/7 support. Check out our great deals now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlowSans.variable}`}>{children}</body>
    </html>
  );
}
