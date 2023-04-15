import React, { Suspense, lazy } from 'react';
import ErrorBoundary from '@/common/error-boundary';
import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from '@/common/routes';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { useAppSelector } from './store';
import { selectIsLogin } from '@/features/system/system-selectors';

const MainPage = lazy(() => import('../common/pages/main-page'));
const LoginPage = lazy(() => import('../common/pages/login-page'));

const App = () => {
  const isAuth = useAppSelector(selectIsLogin);

  return (
    <ErrorBoundary>
      <Suspense fallback={<PacmanLoader />}>
        <Routes>
          <Route
            path={AppRoutes.Any}
            element={isAuth ? <MainPage /> : <LoginPage />}
          />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
