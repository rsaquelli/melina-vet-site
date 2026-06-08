import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Dra. Melina Prudente Correa | Médica Veterinária",
    template: "%s | Dra. Melina Prudente Correa",
  },
  description:
    "Atendimento veterinário para cães e gatos, com consultas, vacinação, atendimento especializado para filhotes, cirurgias, procedimentos, laudos para viagens, hotelzinho domiciliar e orientação para tutores.",
  keywords: [
    "Dra. Melina",
    "médica veterinária",
    "veterinária cães e gatos",
    "vacinação pet",
    "consultas veterinárias",
    "atendimento veterinário",
    "filhotes",
    "hotelzinho domiciliar",
    "laudos veterinários para viagens",
    "carteirinha digital pet",
  ],
  authors: [{ name: "Dra. Melina Prudente Correa" }],
  creator: "Dra. Melina Prudente Correa",
  publisher: "Dra. Melina Prudente Correa",
  openGraph: {
    title: "Dra. Melina Prudente Correa | Médica Veterinária",
    description:
      "Cuidado veterinário com experiência, carinho e atenção em cada detalhe. Atendimento para cães e gatos, vacinação, filhotes, laudos para viagens e orientação para tutores.",
    url: "https://melinavet.com.br",
    siteName: "Dra. Melina Prudente Correa",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#f7f1e8]">{children}</body>
    </html>
  );
}