import type { Metadata, Viewport } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Isaac Vargas",
  description: "Software Engineer currently based out of Souther California"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="macchiato"
      className={`${firaCode.variable} h-full antialiased`}
    >
      <body
        className={`min-h-full ${firaCode.className} bg-base-100 text-base-content`}
      >
        <div className="sticky top-0 z-20 w-full bg-base-100/80 backdrop-blur-lg">
          <Header />
        </div>
        <main className="page-container py-12 sm:py-16 lg:py-24">
          {children}
        </main>
      </body>
    </html>
  );
}
