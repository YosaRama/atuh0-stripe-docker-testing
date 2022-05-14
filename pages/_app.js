// Auth
import { SessionProvider } from "next-auth/react";

// Styles
import "antd/dist/antd.css";
import "styles/global.scss";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
