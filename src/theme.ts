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
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
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
            }
        }
    }
  },
});

export default theme; 