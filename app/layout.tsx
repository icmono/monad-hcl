import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monad HCL - Hardware Compatibility List",
  description: "Community-driven hardware compatibility list for Monad validators. Find tested and verified hardware configurations for optimal performance.",
  keywords: "Monad, hardware, compatibility, validator, blockchain, CPU, storage, requirements",
  openGraph: {
    title: "Monad HCL - Hardware Compatibility List",
    description: "Community-driven hardware compatibility list for Monad validators",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
