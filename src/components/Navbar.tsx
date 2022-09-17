import { MdEmail, MdHome } from 'react-icons/md';
import { RiUserFill } from 'react-icons/ri';
import { GoBriefcase } from 'react-icons/go';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const NAVIGATIONS = [
  {
    id: 1,
    name: 'Home',
    icon: <MdHome />,
    link: '/',
  },
  {
    id: 2,
    name: 'About',
    icon: <RiUserFill />,
    link: '/about',
  },
  {
    id: 3,
    name: 'Portfolio',
    icon: <GoBriefcase />,
    link: '/portfolio',
  },
  {
    id: 4,
    name: 'Contact',
    icon: <MdEmail />,
    link: '/contact',
  },
];

const Navbar = () => {
  return (
    <div className='fixed right-8 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-5'>
      {NAVIGATIONS.map((nav) => (
        <NavLink
          end
          to={nav.link}
          key={nav.id}
          className={({ isActive }) =>
            clsx(
              isActive ? 'bg-primary' : 'bg-zinc-700',
              'group relative cursor-pointer rounded-full p-4 text-white transition-all duration-300',
            )
          }
        >
          {nav.icon}
          <NavLink
            end
            to={nav.link}
            className={({ isActive }) =>
              clsx(
                isActive ? 'bg-primary' : 'bg-zinc-700',
                'absolute top-0 right-0 -z-10 rounded-3xl p-3 opacity-0 transition-all duration-300 group-hover:pr-12 group-hover:opacity-100',
              )
            }
          >
            {nav.name}
          </NavLink>
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
