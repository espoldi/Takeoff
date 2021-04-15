import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({ 
    overrides: {
        MuiPaper: {
          root: {
            backgroundColor: "#263039"
          }
        }
      },
    palette: {
    
    background: {
      default: "#263039",
    },
    primary: {
      main: "#7BABC5",
    },
  },
});

export default theme;
