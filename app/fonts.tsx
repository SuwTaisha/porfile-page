import { Geist, Geist_Mono, Cherry_Bomb_One } from "next/font/google";

export const cherryBomb = Cherry_Bomb_One({
  weight: "400",
});

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

