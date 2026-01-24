import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Bernardo Schmitz | Desenvolvedor Fullstack",
    description: "Portfólio profissional de Bernardo Schmitz, desenvolvedor Fullstack especializado em Node.js, React, Next.js e TypeScript. Veja projetos, experiências e entre em contato.",
    keywords: [
        "portfolio", "desenvolvedor", "fullstack", "react", "nextjs", "nodejs", "typescript", "javascript", "frontend", "backend", "Bernardo Schmitz"
    ],
    creator: "Bernardo Schmitz",
    openGraph: {
        title: "Bernardo Schmitz | Desenvolvedor Fullstack",
        description: "Portfólio profissional de Bernardo Schmitz, desenvolvedor Fullstack especializado em Node.js, React, Next.js e TypeScript.",
        url: "https://bernardoschmitz.is-a.dev",
        siteName: "Bernardo Schmitz Portfolio",
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
    twitter: {
        card: "summary_large_image",
        title: "Bernardo Schmitz | Desenvolvedor Fullstack",
        description: "Portfólio profissional de Bernardo Schmitz, desenvolvedor Fullstack especializado em Node.js, React, Next.js e TypeScript.",
        creator: "@bernardoschmitz",
        images: ["/cover.png"],
    },
    alternates: {
        canonical: "https://bernardoschmitz.is-a.dev",
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
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
                {/* SEO extra */}
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Bernardo Schmitz" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="pt_BR" />
                <meta property="og:site_name" content="Bernardo Schmitz Portfolio" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="@bernardoschmitz" />
            </head>
            <body className={cn("font-body antialiased relative")}>
                <ThemeProvider  >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
