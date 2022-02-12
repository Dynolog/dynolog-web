import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyle } from './styles/global';

import { Routes } from './routes';
import { Providers } from './hooks';

export const App = () => (
  <Providers>
    <Router>
      <Routes />
      <GlobalStyle />
    </Router>
  </Providers>
);