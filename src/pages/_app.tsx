import type { AppProps } from 'next/app';
import '../styles/global.css';
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  <Head>
 <title>Bernardo Schmitz</title>
  return <Component {...pageProps} />;
  </Head>
}
