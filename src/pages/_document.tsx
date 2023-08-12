import { Html, Head, Main, NextScript } from 'next/document';

/**
 * The Document component represents the HTML structure for a web page.
 * It includes meta tags for SEO and social media sharing.
 */
export default function Document() {
  return (
    <Html lang='pt-BR'>
      <Head>
        {/* SEO meta tags */}
        <meta name='author' content='Bernardo Schmitz dos Santos' />
        <meta name='keywords' content='portfólio, web, desenvolvimento, next js, react, typescript, frontend' />
        <meta httpEquiv='cache-control' content='no-cache' />
        <meta httpEquiv='content-type' content='text/html; charset=UTF-8' />
        <meta name='copyright' content='© 2023 Bernardo Schmitz' />

        {/* Structured data meta tags */}
        <meta name='description' content='Conheça mais sobre mim e alguns de meus projetos exibidos nessa página. ' />
        <meta itemProp='name' content='Bernardo Schmitz' />
        <meta itemProp='description' content='Conheça mais sobre mim e alguns de meus projetos exibidos nessa página. ' />
        <meta itemProp='image' content='https://raw.githubusercontent.com/B-Schmitz/portfolio/main/public/images/cover.webp' />

        {/* Open Graph meta tags */}
        <meta property='og:url' content='https://bernardoschmitz.vercel.app' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Bernardo Schmitz' />
        <meta property='og:description' content='Conheça mais sobre mim e alguns de meus projetos exibidos nessa página. ' />
        <meta property='og:image' content='https://raw.githubusercontent.com/B-Schmitz/portfolio/main/public/images/cover.webp' />

        {/* Twitter meta tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Bernardo Schmitz' />
        <meta name='twitter:description' content='Conheça mais sobre mim e alguns de meus projetos exibidos nessa página. ' />
        <meta name='twitter:image' content='https://raw.githubusercontent.com/B-Schmitz/portfolio/main/public/images/cover.webp' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
