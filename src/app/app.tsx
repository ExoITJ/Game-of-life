import React, { Suspense, lazy } from 'react';
import ErrorBoundary from '@/common/error-boundary';
import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from '@/common/routes';
import PacmanLoader from 'react-spinners/PacmanLoader';

const MainPage = lazy(() => import('../common/pages/main-page'));

const App = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<PacmanLoader />}>
        <Routes>
          <Route path={AppRoutes.Any} element={<MainPage />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
