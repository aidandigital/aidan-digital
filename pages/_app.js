/* Global CSS */
import '../styles/globals.css';
import '../styles/animations.css';

import DefaultLayout from '../components/high-level/DefaultLayout'
import AltLayout from '../components/high-level/AltLayout'

function App({ Component, pageProps }) {
  const { useAltLayout, title, description } = Component;

  if (useAltLayout) {
    return (
      <AltLayout title={title}>
        <Component {...pageProps} />
      </AltLayout>
    )
  } else {
    return (
      <DefaultLayout title={title}>
        <Component {...pageProps} />
      </DefaultLayout>
    )
  }
}

export default App;
