import type { AppProps } from 'next/app';
import '../styles/global.css';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bernardo Schmitz</title>
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Component {...pageProps} />
      <Analytics />
      <Toaster />
    </>
  );
}
