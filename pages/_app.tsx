import type { AppProps } from "next/app";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { theme } from "@/src/theme";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}
