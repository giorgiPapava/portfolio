import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='min-h-screen bg-zinc-900 px-6 md:px-0'>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
