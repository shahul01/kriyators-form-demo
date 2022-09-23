import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import '../styles/globals.css';

const theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(358, 58%, 50%)'
    }
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>

    </ThemeProvider>
  );
};

export default MyApp
