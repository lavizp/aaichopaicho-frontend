import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightMode } from "@/styles/theme/lightMode";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightMode}>
      <CssBaseline enableColorScheme />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}
