import { Route, Routes } from 'react-router-dom';

import { Login } from '../pages/Login';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="entrar" element={<Login />} />
    </Routes>
  );
};
