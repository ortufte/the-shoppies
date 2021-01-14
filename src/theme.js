import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    // MuiDialogContentText: {
    //   root: {
    //     color: '#202224',
    //     fontFamily: "Montserrat",
    //     fontSize: 'rem',
    //   },
    // },
    MuiGridListTileBar: {
        title: {
            color: '#d4af37',
            size: '1.5rem',
            fontFamily: "Montserrat",
        },
        titleBar: {
            background:
                'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        }
    },
    // MuiIconButton: {
    //     root: {
    //         color: '#ffffff',
    //     },
    // },
    MuiBottomNavigation: {
        root: {
         backgroundColor: '#000000',
         width: '100%',
         marginTop: '5rem'
        },
    },
    MuiButton: {
        root: {
            backgroundColor: '#d4af37',
            color: '#000000',
            "&:hover": {
                backgroundColor: '#d4af37',
              },
        },
        disabled: {
            opacity: '10%',
        },
    },
    MuiInputBase: {
        input: {
            color: '#000000',
            backgroundColor: '#ffffff',
        }
    },
    MuiToolbar: {
        root: {
            marginBottom: '6rem'
        }
    },
},
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#d4af37',
    },
},
  typography: {
    // Search our db, your 2021 nominees
    h1: {
      fontFamily: "'Great Vibes', cursive",
      fontSize: '4rem',
      color: '#d4af37'
    },
    // dialog titles
    subtitle1: {
      fontFamily: "Montserrat",
      fontSize: '1.5rem',
      color: '#000000'
    },
    //header logo
    h3: {
      fontFamily: "Montserrat",
      fontSize: '2rem',
      color: '#d4af37'
    },
    // movie search results
    h4: {
      fontFamily: "Montserrat",
      color: '#d4af37',
      fontSize: '1.5rem'
    },
    //About section "The Shoppies"
    h5: {
      fontFamily: "'Great Vibes', cursive",
      fontStyle: "bold",
      fontSize: '2rem',
    },
    p: {
      fontFamily: "Montserrat",
    },
    //button text
    button: {
      textTransform: 'none',
      fontFamily: "Montserrat",
    },
  },
});

export default theme;
