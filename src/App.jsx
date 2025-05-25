import React from 'react';
import Router from './shared/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Provider } from 'react-redux';
import store from './redux/config/configureStore';

const App = () => {
  return (
    <Provider store={store}>
      <Router />
      <ToastContainer
        position='top-center'
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
        theme='dark'
      />
    </Provider>
  );
};

export default App;
