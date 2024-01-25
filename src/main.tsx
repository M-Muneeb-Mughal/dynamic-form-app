import React from 'react';
import ReactDOM from 'react-dom/client';
// App
import { App } from '@src/App';
// Styles
import '@src/assets/styles/index.css';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import formReducer from '@src/features/formSlice';

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
