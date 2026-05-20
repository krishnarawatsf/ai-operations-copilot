import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

globalThis.__AIOPS_CONFIG__ = {
  appName: import.meta.env.VITE_APP_NAME,
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
  useMocks: import.meta.env.VITE_USE_MOCKS !== 'false',
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
