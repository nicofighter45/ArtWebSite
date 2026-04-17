import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import EmotionRegistry from "@/components/EmotionRegistry";
import Layout from "@/components/Layout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Serge Fagot",
  description: "Bienvenue sur le portfolio de Serge Fagot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <EmotionRegistry>
          <Layout>{children}</Layout>
        </EmotionRegistry>
      </body>
    </html>
  );
}
