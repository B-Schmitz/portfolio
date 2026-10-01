import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bernardo Schmitz",
  description:
    "Currículo de Bernardo Schmitz, desenvolvedor fullstack com 5 anos de experiência em React, Next.js, React Native e Node.js.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "icon0.svg", sizes: "any", type: "image/svg+xml" },
      { url: "icon1.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "apple-icon.png",
  },
  manifest: "manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
