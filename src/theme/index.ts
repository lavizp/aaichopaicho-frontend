import { createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
declare module "@mui/material/styles" {
  interface Palette {
    backgroundColor: Palette["primary"];
    chartLightPurple: Palette["primary"];
    chartPurple: Palette["primary"];
    chartBlue: Palette["primary"];
  }

  interface PaletteOptions {
    backgroundColor: PaletteOptions["primary"];
    chartLightPurple: PaletteOptions["primary"];
    chartPurple: PaletteOptions["primary"];
    chartBlue: PaletteOptions["primary"];
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
    chartLightPurple: {
      main: "#9D9BF4",
    },
    chartPurple: {
      main: "#4C49ED",
    },
    chartBlue: {
      main: "#141197",
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
