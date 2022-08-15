import AltHeader from './AltHeader';
import AltFooter from './AltFooter';
import Head from 'next/head';

function AltLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? title + " |": ""} Aidan Digital</title>
        <meta name="robots" content="noindex" />
      </Head>
      <AltHeader />
      <main>{children}</main>
      <AltFooter />
    </>
  )
}

export default AltLayout;