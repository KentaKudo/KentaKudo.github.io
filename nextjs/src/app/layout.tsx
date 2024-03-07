import type { Metadata } from "next";
import { Permanent_Marker } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const permanentMarker = Permanent_Marker({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-permanent-marker",
});

export const metadata: Metadata = {
  title: { default: "Kenta Kudo", template: "%s | Kenta Kudo" },
  description: "Welcome to my page!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${permanentMarker.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
