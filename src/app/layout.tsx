import type { Metadata } from "next";
import { Inter, Cutive_Mono, Courier_Prime, Atkinson_Hyperlegible_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const mono = Atkinson_Hyperlegible_Mono ({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
});



export const metadata: Metadata = {
  title: "About Logan",
  description: "about.logan.pm",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${mono.variable} bg-zinc-950 text-zinc-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
