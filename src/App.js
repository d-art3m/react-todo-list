import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Container, CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      light: '#cb5e3c',
      main: '#bf360c',
      dark: '#852508',
      contrastText: '#fff',
    },
    secondary: {
      light: '#d1ff33',
      main: '#c6ff00',
      dark: '#8ab200',
      contrastText: '#000',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Header />
        <Container component="main" sx={{ flexGrow: 1 }}>
          <Main />
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
