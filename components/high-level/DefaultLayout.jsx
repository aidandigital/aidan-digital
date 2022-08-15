import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

function DefaultLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? title + " |": ""} Aidan Digital</title>
        <meta name="robots" content="all" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default DefaultLayout;