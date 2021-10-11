import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { AuthRoutes } from '../modules/auth';
import { HomeRoutes } from '../modules/home';

export const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth/" component={HomeRoutes} />
        <Route path="/" component={AuthRoutes} />
      </Switch>
    </BrowserRouter>
  );
};
