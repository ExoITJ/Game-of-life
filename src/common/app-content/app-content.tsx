import React, { FC, Suspense, lazy } from 'react';
import ErrorBoundary from '../error-boundary';
import { Routes, Route } from 'react-router-dom';
import { AppRoutes } from '../routes';

const GameScreen = lazy(() => import('../../features/game/game-screen'));
const RulesScreen = lazy(() => import('../../features/rules/rules-screen'));

const AppContent: FC = () => {
  return (
    <Suspense>
      <ErrorBoundary>
        <Routes>
          <Route path={AppRoutes.Any} element={<div>Страница 404</div>} />
          <Route path={AppRoutes.Index} element={<GameScreen />} />
          <Route path={AppRoutes.Rules} element={<RulesScreen />} />
        </Routes>
      </ErrorBoundary>
    </Suspense>
  );
};

export default AppContent;
