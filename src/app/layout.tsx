import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Cantinho Doce | Atacado e Varejo em Piracicaba",
  description: "Há 29 anos com o melhor preço e a maior variedade da cidade. Doces, chocolates, amendoins, salgadinhos e artigos para festa.",
  openGraph: {
    title: "Cantinho Doce | Atacado e Varejo em Piracicaba",
    description: "Há 29 anos com o melhor preço e a maior variedade da cidade.",
    url: "https://cantinho-doce-site.vercel.app",
    siteName: "Cantinho Doce",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-stone-50 text-stone-900`}>
        {children}
      </body>
    </html>
  );
}
