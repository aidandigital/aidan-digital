import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

function DefaultLayout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title ? title + " |": ""} Aidan Digital</title>
        <meta name="robots" content="all" key="robots" />
        <meta name="description" content={description} key="desc" />
      </Head>
      <div className="fixed w-full z-20">
        <Header />
      </div>
      {/* Put in the header twice since the first one is fixed */}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default DefaultLayout;