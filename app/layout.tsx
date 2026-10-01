import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bernardo Schmitz | Desenvolvedor Fullstack",
  description:
    "Currículo de Bernardo Schmitz, desenvolvedor fullstack com 5 anos de experiência em React, Next.js, React Native e Node.js.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
