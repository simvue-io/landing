import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PrelineScript from "./components/PrelineScript";
import PlausibleProvider from 'next-plausible';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simvue",
  description: "Unlocking sustainability for any simulation, data processing or AI/ML tasks",
  keywords: [
  "sustainability",
  "ESG",
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
    title: "Simvue: Unlocking sustainability for any simulation, data processing or AI/ML tasks",
    description:
      "Innovative solutions for unlocking sustainability at an environmental, social and economic scale by capturing and tracking metadata, using real-time monitoring, alerting and logging to organise and gain insights.",
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
