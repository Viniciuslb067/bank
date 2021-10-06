import { AppRoutes } from '../src/routes';

import { AppProvider } from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
