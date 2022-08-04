/* Global CSS */
import '../styles/globals.css'
import '../styles/gradient-logo.css'
import '../styles/animations.css'

import DefaultLayout from '../components/high-level/DefaultLayout'
import AltLayout from '../components/high-level/AltLayout'

function App({ Component, pageProps }) {
  const useAltLayout = Component.useAltLayout;

  if (useAltLayout) {
    return (
      <AltLayout>
        <Component {...pageProps} />
      </AltLayout>
    )
  } else {
    return (
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    )
  }
}

export default App
