import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/Layout';
import { NotificationContextProvider } from '../store/notification';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <NotificationContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NotificationContextProvider>
    </ChakraProvider>);
}

export default MyApp
