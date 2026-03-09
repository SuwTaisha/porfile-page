import type { Metadata } from "next";
import { cherryBomb, geistSans } from "./fonts";
import { geistMono } from "./fonts";

import "./globals.css";


export const metadata: Metadata = {
  title: "Suw's Portfollio",
  description: "Welcome to my profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cherryBomb.className} ${geistSans.variable} ${geistMono.variable} ${`bg-primary-gradient`} ${`w-full h-dvh`} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
