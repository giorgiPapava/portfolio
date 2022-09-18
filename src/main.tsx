import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, NavLink, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import './index.css';
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import Projects from './pages/Projects';

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    errorElement: (
      <>
        <div className='flex min-h-screen flex-col items-center justify-center gap-8'>
          <h2 className='font-poppins text-4xl'>Something went wrong</h2>
          <NavLink to='/'>
            <button className='btn-arrow btn'>
              <span className='z-10'>Go back home</span>
            </button>
          </NavLink>
        </div>
        <Layout />
      </>
    ),
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
