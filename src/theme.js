import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiDialogContentText: {
      // Name of the rule
      root: {
        // Some CSS
        color: '#202224',
        fontFamily: "Montserrat",
        fontSize: '1rem',
      },
    },
    MuiGridListTileBar: {
        title: {
            color: '#d4af37',
            size: '1.5rem',
        },
        titleBar: {
            background:
                'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        }
    },
    MuiIconButton: {
        root: {
            color: '#d4af37',
        },
    },
    MuiBottomNavigation: {
        root: {
            backgroundColor: '#000000'
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
    }
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
    // website description heading
    h1: {
      fontFamily: "Montserrat",
      fontSize: '3rem',
      color: '#ffffff'
    },
    // Nominees Heading
    subtitle1: {
      fontFamily: "'Great Vibes', cursive",
      fontSize: '4rem',
      color: '#d4af37'
    },
    //header logo and movie search results
    h3: {
      fontFamily: "Montserrat",
      fontSize: '2rem',
      color: '#d4af37'
    },

    h4: {
      color: '#d4af37',
      fontFamily: "Montserrat",
    //   fontSize: '1.5rem'
    },
    //button text
    button: {
      textTransform: 'none',
      fontFamily: "'Great Vibes', cursive",
      fontSize: '1.5rem'
    },
  },
});

export default theme;
