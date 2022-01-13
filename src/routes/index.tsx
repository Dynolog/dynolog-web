import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import { Summary } from '../pages/Summary';
import { Time } from '../pages/Time';

export const Routes = () => (
  <Switch>
    <Route path="/" element={<Summary />} />
    <Route path="/time" element={<Time />} />
  </Switch>
);