import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Bernardo Schmitz",
    description: "Portfólio de Bernardo Schmitz, desenvolvedor Fullstack Node.js e TypeScript.",
    keywords: ["portfolio", "developer", "fullstack", "react", "nextjs", "nodejs", "typescript"],
    creator: "Bernardo Schmitz",
    openGraph: {
        title: "Bernardo Schmitz",
        description: "Portfólio de Bernardo Schmitz, desenvolvedor Fullstack Node.js e TypeScript.",
        url: "https://bernardoschmitz.is-a.dev",
        siteName: "Bernardo Schmitz",
        images: [
            {
                url: "/cover.png",
                width: 1200,
                height: 630,
                alt: "Bernardo Schmitz - Portfólio",
            },
        ],
        locale: "pt-BR",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className={cn("font-body antialiased relative")}>
                <ThemeProvider  >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
