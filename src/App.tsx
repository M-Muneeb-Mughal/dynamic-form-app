import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { store } from '@src/app/store';
import { Router } from '@src/router/Router';

import '@src/assets/styles/index.css';
import 'react-toastify/dist/ReactToastify.css';

window.showToast = (message, type) => {
  if (type === 'success') {
    toast.success(message);
  } else if (type === 'error') {
    toast.error(message);
  }
};

export const App = () => {
  return (
    <Provider store={store}>
      <ToastContainer autoClose={1000} />
      <Router />
    </Provider>
  );
};

export const WrappedApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ToastContainer autoClose={1000} />
        <Router />
      </Provider>
    </BrowserRouter>
  );
};
