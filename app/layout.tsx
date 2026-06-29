import type { Metadata } from "next";
import { Zilla_Slab, DM_Mono, Inter } from "next/font/google";
import "@/styles/globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BottomNav } from "@/components/BottomNav";

const zilla = Zilla_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-zilla",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Prarambha Bashyal — Ecosystem Founder & OSS Builder',
  description: 'Founder of Butwal Hacks, GNOME Nepal maintainer, and open-source builder from Butwal, Nepal. 15 years old. Building the tech infrastructure that didn\'t exist in his city.',
  openGraph: {
    title: 'Prarambha Bashyal',
    description: 'Ecosystem Founder · Open-Source Builder · Butwal, Nepal',
    url: 'https://prarambha.xyz',
    siteName: 'Prarambha.xyz',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prarambha Bashyal',
    description: 'Ecosystem Founder · OSS Builder · Butwal, Nepal',
  },
  keywords: [
    'Prarambha Bashyal', 'Butwal Hacks', 'GNOME Nepal',
    'Nepal developer', 'open source Nepal', 'student developer Nepal',
    'NextEra Development', 'MisterBashyal'
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${zilla.variable} ${dmMono.variable} ${inter.variable} font-sans bg-bg text-text min-h-screen flex flex-col`}>
        <Nav />
        <main className="flex-grow">{children}</main>
        <BottomNav />
        <Footer />
      </body>
    </html>
  );
}
