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
  keywords: [
  "simulations",
  "tracking",
  "metrics",
  "experiment management",
  "data management",
  "metadata",
  "alerting"
  ],
  openGraph: {
    url: "https://simvue.io",
    type: "website",
    title: "Simvue",
    description:
      "Simulation tracking and monitoring platform",
    images: [
      {
        url: "https://raw.githubusercontent.com/simvue-io/.github/main/simvue-black.png",
        width: 780,
        height: 171,
        alt: "Simvue"
      }
    ]
  },
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
