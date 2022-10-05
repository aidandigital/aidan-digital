import AltHeader from './AltHeader';
import AltFooter from './AltFooter';
import Head from 'next/head';

function AltLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? title + " |": ""} Aidan Digital</title>
        {/* Don't index alt pages */}
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>
      <AltHeader />
      <main>{children}</main>
      <AltFooter />
    </>
  )
}

export default AltLayout;