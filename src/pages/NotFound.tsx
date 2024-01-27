import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <>
      <h1 className='text-3xl font-bold mb-4'>The page was not found</h1>
      <Link
        to='/'
        className='bg-indigo-600 hover:bg-indigo-500 text-gray-100 w-full sm:w-fit px-14 py-1.5 font-semibold rounded-lg mt-6'
      >
        Home
      </Link>
    </>
  );
};
