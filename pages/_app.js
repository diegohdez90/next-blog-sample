import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/Layout';
import { NotificationContextProvider } from '../store/notification';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <NotificationContextProvider>
        <Layout>
          <Head>
            <title>Diego&apos;s Friends</title>
            <meta name='description' content='Where you can find the latest trends in programming'/> 
          </Head>
          <Component {...pageProps} />
        </Layout>
      </NotificationContextProvider>
    </ChakraProvider>);
}

export default MyApp
