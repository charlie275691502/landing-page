import type { Metadata } from "next";
import { DotGothic16, DM_Sans, Asap } from "next/font/google";
import "./globals.css";

// Configure Google Fonts
const dotGothic16 = DotGothic16({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dot-gothic",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const asap = Asap({
  subsets: ["latin"],
  variable: "--font-asap",
});

export const metadata: Metadata = {
  title: "Foameo Landing",
  description: "Landing page for Foameo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bauhaus+93&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${dotGothic16.variable} ${dmSans.variable} ${asap.variable}`}>
        {children}
      </body>
    </html>
  );
}