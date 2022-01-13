import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyle } from './styles/global';

import { Routes } from './routes';

export const App = () => (
  <Router>
    <Routes />
    <GlobalStyle />
  </Router>
);