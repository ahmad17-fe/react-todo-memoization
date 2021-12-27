import { ThemeProvider } from "../context/app-theme";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
