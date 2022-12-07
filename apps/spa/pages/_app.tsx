import Head from 'next/head';
import { AppPropsWithLayout } from '../types/Layout.type';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import './styles.css';

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <>
      <Head>
        <title>Welcome to spa!</title>
      </Head>
      <main className="app">
        {getLayout(<Component {...pageProps} />)}
      </main>
    </>
  );
}

export default CustomApp;
