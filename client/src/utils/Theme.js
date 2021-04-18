import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { SvgIcon } from "@material-ui/core";

const theme = createMuiTheme({
  props: {
    MuiSvgIcon: {
      htmlColor: '#95b4bc',
    }
  },

  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: "#cde1d8",
      },
    },
    overrides: {
      Avatar: {
        root: {
          defaultColor: "#eee7de",
        },
      },
    },
  },
  palette: {
    background: {
      backgroundColor: "#cde1d8",
    },
   
    primary: {
      main: "#113034",
      secondary: {
        main: {
          backgroundColor: "#d39fff",
        },
      },
    },
  },
});

export default theme;
