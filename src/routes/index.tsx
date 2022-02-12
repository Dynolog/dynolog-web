import { Route, Routes as Switch } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Reports } from '../pages/Reports';

export const Routes = () => (
  <Switch>
    <Route path="/" element={<Dashboard />} />
    <Route path="/reports" element={<Reports />} />
  </Switch>
);