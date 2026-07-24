import type { Metadata } from "next";
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
        <div className="sticky top-0 z-20 bg-base-100/80 backdrop-blur-lg">
          <Header />
        </div>
        <main className="mx-auto max-w-5xl py-24">
          {children}
        </main>
      </body>
    </html>
  );
}
