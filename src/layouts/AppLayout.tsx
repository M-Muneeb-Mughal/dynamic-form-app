import { Outlet, useLocation } from 'react-router-dom';

export const AppLayout = () => {
  const { pathname } = useLocation();

  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='container mx-auto py-6 lg:py-12 px-4 sm:px-8 md:px-12 lg:px-16 '>
        {pathname === '/' && (
          <h1 className='text-3xl font-bold mb-4'>Dynamic Form</h1>
        )}
        {pathname === '/thank-you' && (
          <h1 className='text-3xl font-bold mb-4'>Thank You</h1>
        )}
        <Outlet />
      </div>
    </div>
  );
};
