import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PrelineScript from "./components/PrelineScript";
import PlausibleProvider from 'next-plausible';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simvue",
  description: "Redefining simulation science for the AI era",
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
    title: "Simvue: Redefining simulation science for the AI era",
    description:
      "Organise and gain insights into simulations, data processing or AI/ML training by capturing metadata and data combined with real-time monitoring, logging and alerting.",
    images: [
      {
        url: "https://simvue.io/social.png",
        width: 1200,
        height: 912,
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
    <PlausibleProvider domain="simvue.io" customDomain="https://plausible.uryisv.cloud" selfHosted={true} >
    <html lang="en">
      <body className={inter.className}>{children}</body>
       <PrelineScript />
    </html>
    </PlausibleProvider>
  );
}
