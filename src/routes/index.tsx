import { Route, Routes as Switch } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';

export const Routes = () => (
  <Switch>
    <Route path="/" element={<Dashboard />} />
  </Switch>
);