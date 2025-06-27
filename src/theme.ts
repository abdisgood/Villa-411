import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#333333', // A dark grey for primary elements
    },
    secondary: {
      main: '#f5f5f5', // A light grey for backgrounds
    },
    background: {
      default: '#ffffff', // A clean white background
      paper: '#ffffff',
    },
    text: {
      primary: '#000000', // Black for primary text
      secondary: '#555555', // A softer grey for secondary text
    },
  },
  typography: {
    fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Felipa", cursive',
      fontWeight: 400,
      fontSize: '3rem',
      letterSpacing: '0.02em',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontFamily: '"Felipa", cursive',
      fontWeight: 400,
      fontSize: '2.5rem',
      letterSpacing: '0.02em',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontFamily: '"Felipa", cursive',
      fontWeight: 400,
      fontSize: '2rem',
      letterSpacing: '0.02em',
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h4: {
      fontFamily: '"Felipa", cursive',
      fontWeight: 400,
      fontSize: '1.75rem',
      letterSpacing: '0.02em',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h5: {
      fontFamily: '"Felipa", cursive',
      fontWeight: 400,
      fontSize: '1.5rem',
      letterSpacing: '0.02em',
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
      },
    },
    h6: {
      fontFamily: '"Felipa", cursive',
      fontWeight: 400,
      fontSize: '1.25rem',
      letterSpacing: '0.02em',
      '@media (max-width:600px)': {
        fontSize: '1.1rem',
      },
    },
    body1: {
      fontWeight: 400,
      lineHeight: 1.7,
      fontSize: '1rem',
      letterSpacing: '0.01em',
    },
    body2: {
      fontWeight: 400,
      lineHeight: 1.6,
      fontSize: '0.875rem',
      letterSpacing: '0.01em',
    },
    button: {
      fontWeight: 500,
      letterSpacing: '0.02em',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#000000',
          boxShadow: 'none',
          borderBottom: '1px solid #e0e0e0',
        },
      },
    },
    MuiCard: {
        styleOverrides: {
            root: {
                boxShadow: 'none',
                border: '1px solid #e0e0e0',
                borderRadius: '0',
            }
        }
    },
    MuiButton: {
        styleOverrides: {
            root: {
                borderRadius: '0',
                textTransform: 'none',
                fontFamily: '"Open Sans", sans-serif',
                fontWeight: 500,
            }
        }
    }
  },
});

export default theme; 