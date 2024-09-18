import type { Metadata } from "next";
import { Permanent_Marker } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { GTag } from "./GTag";

const permanentMarker = Permanent_Marker({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-permanent-marker",
});

export const metadata: Metadata = {
  title: { default: "Kenta Kudo", template: "%s | Kenta Kudo" },
  description: "Welcome to my page!",
  openGraph: {
    title: "Kenta Kudo",
    description: "Welcome to my page!",
    images: "https://kentakudo.com/images/river-themes.jpg",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@___________k_k_",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${permanentMarker.variable} scroll-pt-24`}>
      <head>
        <GTag />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
