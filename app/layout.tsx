import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PrelineScript from "./components/PrelineScript";
import Footer from "./components/Footer";
import PlausibleProvider from 'next-plausible';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simvue",
  description: "Simulation tracking and monitoring platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PlausibleProvider domain="simvue.io">
    <html lang="en">
      <body className={inter.className}>{children}<Footer /></body>
       <PrelineScript />
    </html>
    </PlausibleProvider>
  );
}
