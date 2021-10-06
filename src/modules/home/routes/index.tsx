import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { Home } from '../pages/Home';

export const HomeRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
