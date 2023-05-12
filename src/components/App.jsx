import { FeedbackWidget } from './FeedbackWidget/FeedbackWidget';
import { GlobalStyle } from './UI/GlobalStyle';
import { Layout } from './UI/Layout';
import { ThemeProvider } from 'styled-components';
import {theme} from './UI/Themes/theme.js'

export const App = () => {
  return (
    <ThemeProvider theme = {theme}>
      <Layout>
        <GlobalStyle />
        <FeedbackWidget />
      </Layout>
    </ThemeProvider>
  );
};
