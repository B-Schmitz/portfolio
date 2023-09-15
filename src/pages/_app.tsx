import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/react';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/bootstrap4-dark-purple/theme.css';
import '../styles/global.css';
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Bernardo Schmitz</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <PrimeReactProvider>
        <Component {...pageProps} />
      </PrimeReactProvider>
      <Analytics />
      <Toaster />
    </>
  );
}
