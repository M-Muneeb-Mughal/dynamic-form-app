import React from 'react';
import ReactDOM from 'react-dom/client';
// App
import { App } from '@src/App';
// Styles
import '@src/assets/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
