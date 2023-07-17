import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='pt-BR'>
      <Head>
        <meta name='author' content='Bernardo Schmitz dos Santos' />
        <meta name='keywords' content='portfólio, web, desenvolvimento, next js, react, typescript, frontend' />
        <meta httpEquiv='cache-control' content='no-cache' />
        <meta httpEquiv='content-type' content='text/html; charset=UTF-8' />
        <meta name='copyright' content='© 2023 Bernardo Schmitz' />

        <meta name="description" content="Conheça mais sobre mim e alguns de meus projetos exibidos nessa página. " />
        <meta itemProp="name" content="Bernardo Schmitz" />
        <meta itemProp="description" content="Conheça mais sobre mim e alguns de meus projetos exibidos nessa página. " />
        <meta itemProp="image" content="https://raw.githubusercontent.com/B-Schmitz/portfolio/main/public/images/cover.webp" />

        <meta property="og:url" content="https://bernardoschmitz.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bernardo Schmitz" />
        <meta property="og:description" content="Conheça mais sobre mim e alguns de meus projetos exibidos nessa página. " />
        <meta property="og:image" content="https://raw.githubusercontent.com/B-Schmitz/portfolio/main/public/images/cover.webp" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bernardo Schmitz" />
        <meta name="twitter:description" content="Conheça mais sobre mim e alguns de meus projetos exibidos nessa página. " />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/B-Schmitz/portfolio/main/public/images/cover.webp" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
