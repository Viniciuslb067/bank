import { Route, Routes } from 'react-router-dom';

import { AuthRoutes } from '../modules/auth';
import { HomeRoutes } from '../modules/home';

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<AuthRoutes />} />
      <Route path="/" element={<HomeRoutes />} />
    </Routes>
  );
};
