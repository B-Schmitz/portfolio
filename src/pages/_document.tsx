import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='pt-BR'>
      <Head />
      <meta name='author' content='Bernardo Schmitz dos Santos' />
      <meta name='keywords' content='portfólio, web, desenvolvimento, next js, react, typescript, frontend' />
      <meta name='description' content='Conheça mais sobre mim e alguns de meus projetos exibidos nessa página. ' />
      <meta httpEquiv='cache-control' content='no-cache' />
      <meta httpEquiv='content-type' content='text/html; charset=UTF-8' />
      <meta name='copyright' content='© 2023 Bernardo Schmitz' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
