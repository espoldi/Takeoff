import { createMuiTheme } from "@material-ui/core/styles";

export const light = createMuiTheme({
  muiTypography: {
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

  props: {
    MuiSvgIcon: {
      htmlColor: "#C9D1D9",
    },
  },

  overrides: {
    //containers
    MuiPaper: {
      root: {
        backgroundColor: "#2d333b",
      },
    },
    overrides: {
      Avatar: {
        root: {
          defaultColor: "#C9D1D9",
        },
      },
    },
  },
  palette: {
    type: "dark",
    color: "#OD1117",

  },
});

export default light;
