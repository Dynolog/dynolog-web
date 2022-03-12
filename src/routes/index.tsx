import { Route, Routes as Switch } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Reports } from '../pages/Reports';
import { Login } from '../pages/Login';

export function Routes() {
  return (
    <Switch>
      {/* <Route path="/" element={<Dashboard />} />
      <Route path="/reports" element={<Reports />} /> */}

      <Route path="/" element={<Login />} />
    </Switch>
  );
}
