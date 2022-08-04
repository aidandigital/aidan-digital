import AltHeader from './AltHeader';
import AltFooter from './AltFooter';

function AltLayout({ children }) {
  return (
    <>
      <AltHeader />
        <main>{children}</main>
      <AltFooter />
    </>
  )
}

export default AltLayout;