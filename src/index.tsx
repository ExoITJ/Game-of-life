import React from 'react';
import { createRoot } from 'react-dom/client';
import { createAppStore } from './app/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './app/app';
import './styles/index.css';
import { getStateFromLocalStorage } from './common/common-utils';

const container = document.getElementById('root');
const root = createRoot(container!);
const state = getStateFromLocalStorage();
const store = createAppStore(state);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
