import { Route, Routes } from 'react-router-dom';
import { AppLayout } from '@src/layouts/AppLayout';
import { Home } from '@src/pages/Home';
import { ThankYou } from '@src/pages/ThankYou';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path='thank-you' element={<ThankYou />} />
      </Route>
    </Routes>
  );
};
