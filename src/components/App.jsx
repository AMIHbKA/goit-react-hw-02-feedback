import { FeedbackWidget } from './FeedbackWidget/FeedbackWidget';
import { GlobalStyle } from './UI/GlobalStyle';
import { Layout } from './UI/Layout';

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <FeedbackWidget />
    </Layout>
  );
};
