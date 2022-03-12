import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyle } from './styles/global';

import { Routes } from './routes';
import { Providers } from './hooks';

export function App() {
  return (
    <Providers>
      <Router>
        <Routes />
        <GlobalStyle />
      </Router>
    </Providers>
  );
}
