import type { Metadata } from "next";
import { Mulish, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer";
import { ReactLenis } from "@/lib/lenis";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Shiptos",
  description: "Shiptos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning
      lang="en"
      className={`${mulish.className} ${plexMono.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col text-text-color overflow-x-hidden max-w-full" suppressHydrationWarning>
        <ReactLenis root>
          <Navbar />
          {children}
          <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}
