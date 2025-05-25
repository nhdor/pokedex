import React from 'react';
import Router from './shared/Router';
import { Toaster } from 'sonner';

const App = () => {
  return (
    <>
      <Router />
      <Toaster richColors position='top-center' />
    </>
  );
};

export default App;
