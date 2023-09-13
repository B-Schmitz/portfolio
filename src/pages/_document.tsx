import { Html, Head, Main, NextScript } from 'next/document';
import { theme } from 'theme/theme';
import { TITLE, DESCRIPTION, COVER_IMG, URL, AUTHOR, COPYRIGHT, KEYWORDS } from 'utils';

export default function Document() {
  return (
    <Html lang='pt-BR'>
      <Head>
        <meta content={DESCRIPTION} property='description' />
        <meta content={TITLE} property='og:title' />
        <meta content={DESCRIPTION} property='og:description' />
        <meta content={COVER_IMG} property='og:image' />
        <meta content={TITLE} property='twitter:title' />
        <meta content={DESCRIPTION} property='twitter:description' />
        <meta content={COVER_IMG} property='twitter:image' />
        <meta content='summary_large_image' property='twitter:card' />
        <meta content='website' property='og:type' />
        <meta content={URL} property='og:url' />
        <meta property='theme-color' content={theme.onBackground} />

        <meta name='author' content={AUTHOR} />
        <meta name='keywords' content={KEYWORDS.join(',')} />
        <meta httpEquiv='content-type' content='text/html; charset=UTF-8' />
        <meta name='copyright' content={COPYRIGHT} />

        <link rel='icon' type='image/x-icon' href='/favicon.ico'></link>
        <link rel='shortcut icon' href='/favicon.ico'></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
