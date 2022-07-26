import { ThemeProvider } from "styled-components";

import { Theme } from "../styles/Theme";
import { Global } from "styles/Global";
import { prefix } from "../prefix.js";

import Navigation from "../components/Navigation";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <Global />
      <Navigation prefix={prefix} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
