import { ThemeProvider } from "styled-components";

import { Theme } from "../styles/Theme";
import { Global } from "styles/Global";

import Navigation from "../components/Navigation";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <Global />
      <Navigation />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
