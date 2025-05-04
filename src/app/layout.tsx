import type { Metadata } from "next";
import {  Manrope, Markazi_Text } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const geistSans = Manrope({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMarkazi = Markazi_Text({
  variable: "--font-geist-markazi",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coral Website",
  description: "Landing page built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMarkazi.variable}`} >
        < Header />
        <main className="bg-white text-black">
          {children}
        </main>
        < Footer/> 
      </body>
    </html>
  )
};
