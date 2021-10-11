import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { Login } from '../pages/Login';

export const AuthRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/entrar" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};
