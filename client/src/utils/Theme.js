import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
// import  AWConquerorStdDidotBoldWoff from "../Fonts/AWConquerorStdDidotBold.woff";


 
// const awconquerordidot = {
//   fontFamily: 'aw-conqueror-didot, serif',
//   fontStyle: 'normal',
//   fontDisplay: 'swap',
//   fontWeight: '600',
//   src: `
//     local('aw-conqueror-didot'),
//     local('aw-conqueror-didot-bold'),
//     url(${AWConquerorStdDidotBoldWoff}) format('opentype')
//   `,
//   unicodeRange:
//     'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
//  };


export const light = createMuiTheme({
  typography: {
    h1: {
    fontFamily: ['"Serif"','aw-conqueror-didot', 'Roboto'].join(','),
    }
  },
  // overrides: {
  //   MuiCssBaseline: {
  //     '@global': {
  //       '@font-face': [awconquerordidot],
  //     },
  //   }
  // },

  props: {
    MuiSvgIcon: {
      htmlColor: "#95b4bc",
    },
  },

  overrides: { //containers
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
    fontFamily: ['"Serif"','aw-conqueror-didot', 'Roboto'].join(','),
    }
  },
  // overrides: {
  //   MuiCssBaseline: {
  //     '@global': {
  //       '@font-face': [awconquerordidot],
  //     },
  //   }
  // },

  props: {
    MuiSvgIcon: {
      htmlColor: "#95b4bc",
    },
  },

  overrides: { //containers
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
    type: "dark"
  },
})

export default light
// return (
//   <ThemeProvider theme={theme}>
//     {children}
//   </ThemeProvider>
// );

