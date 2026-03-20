import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata = {
  title: "Sócio DBV | Clube Nações",
  description:
    "Landing page do programa Sócio DBV do Clube Nações com planos e chamada para contribuição.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${bebas.variable}`}>{children}</body>
    </html>
  );
}
