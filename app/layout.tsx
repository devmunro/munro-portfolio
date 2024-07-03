import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "David Munro Portfolio",
  description: "Portfolio of David Munro",
  icons: {
    icon: '/favicon.ico', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ width: '100%', height: '0.5rem', overflow: 'visible' }}
>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
