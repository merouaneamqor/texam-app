import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from './layout-client';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TEXAM - Votre partenaire de prêt à porter ",
  description: "TEXAM offre des services de confection de vêtements de haute qualité pour les professionnels du prêt-à-porter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth overflow-y-scroll overflow-x-clip">
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-50`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}