import { createMuiTheme } from "@material-ui/core/styles";

export const light = createMuiTheme({
  typography: {
    h1: {
      fontFamily: ['"Serif"', "aw-conqueror-didot", "Roboto"].join(","),
    },
  },

  props: {
    MuiSvgIcon: {
      htmlColor: "#95b4bc",
    },
  },

  overrides: {
    //containers
    MuiPaper: {
      root: {
        backgroundColor: "#ccc8c1",
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
      default: "#fffef9",
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

export const dark = createMuiTheme({
  typography: {
    h1: {
      fontFamily: ['"Serif"', "aw-conqueror-didot", "Roboto"].join(","),
    },
  },
  

  props: {
    MuiSvgIcon: {
      htmlColor: "#95b4bc",
    },
  },

  overrides: {
    //containers
    MuiPaper: {
      root: {
        backgroundColor: "#ccc8c1",
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
    type: "dark",

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

export const simpledark = createMuiTheme({
  palette: {
    type: "dark",
  },
});

export default light;
