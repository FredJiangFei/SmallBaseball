import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import Head from 'next/head';
import { NotificationContextProvider } from '../store/notification-context';
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NotificationContextProvider>
      <SessionProvider session={pageProps.session}>
        <Layout>
          <Head>
            <title>Small Baseball</title>
            <meta name="description" content="NextJS Small Baseball" />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </NotificationContextProvider>
  );
}
