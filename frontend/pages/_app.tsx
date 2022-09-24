import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import Layout from '../components/Layout/Layout';
import { store } from '../store/store'
import '../styles/globals.css';

const theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(358, 58%, 50%)'
    },
    secondary: {
      main: 'hsl(0, 0%, 91%)'
    }
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>

      </ThemeProvider>
    </Provider>
  );
};

export default MyApp
