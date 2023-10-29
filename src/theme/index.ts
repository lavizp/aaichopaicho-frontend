import { createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
declare module "@mui/material/styles" {
  interface Palette {
    backgroundColor: Palette["primary"];
  }

  interface PaletteOptions {
    backgroundColor: PaletteOptions["primary"];
  }
}
export const theme = createTheme({
  palette: {
    primary: {
      main: "#83E462",
    },
    secondary: {
      main: "#017B54",
    },
    backgroundColor: {
      main: "#F7FAEF",
      light: "#F7FAEF",
      dark: "#1A2009",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          fontFamily: "Inter",
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        fontFamily: '"Inter"',
      },
    },
  },
});
