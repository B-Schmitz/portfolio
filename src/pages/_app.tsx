import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/react';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/bootstrap4-dark-purple/theme.css';
import '../styles/global.css';

/**
 * The main entry point for the Next.js application.
 * Renders the Component passed as a prop along with its pageProps.
 * Includes a Head component for setting the page title and viewport meta tag,
 * an Analytics component for tracking analytics, and a Toaster component for displaying toast notifications.
 * @param {AppProps} props - The props passed to the App component.
 * @returns {JSX.Element} - The rendered App component.
 */
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
