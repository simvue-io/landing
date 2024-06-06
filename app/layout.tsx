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
    title: "Simvue: Simulation tracking and monitoring",
    description:
      "Organise and gain insights into simulations, data processing or AI/ML training by capturing metadata and data combined with real-time monitoring, logging and alerting.",
    images: [
      {
        url: "https://simvue.io/social.png",
        width: 1200,
        height: 630,
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
