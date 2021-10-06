import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { HomeRoutes } from '../modules/home';

export const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomeRoutes} />
      </Switch>
    </BrowserRouter>
  );
};
