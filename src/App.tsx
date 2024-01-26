import { Provider } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import { store } from '@src/app/store';
import { Router } from '@src/router/Router';

import 'react-toastify/dist/ReactToastify.css';
import '@src/assets/styles/index.css';

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
