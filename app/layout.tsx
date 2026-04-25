import type { Metadata } from "next";
import { Newsreader, Space_Grotesk, Work_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-newsreader",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-work-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KNIGHTS — 鏡面仕上げ専門",
  description:
    "二十四年の鏡面研磨とガラスポリマーコーティング。暗室レベリングによるクリアコート、JCA認定化学。完全予約制、月間八台。神奈川県中井町。",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${newsreader.variable} ${workSans.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-body bg-background text-on-background min-h-screen flex flex-col antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        <ScrollProgress />
        <Header />
        <main className="flex-grow flex flex-col w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
