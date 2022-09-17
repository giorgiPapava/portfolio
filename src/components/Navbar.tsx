import { MdEmail, MdHome } from 'react-icons/md';
import { RiUserFill } from 'react-icons/ri';
import { GoBriefcase } from 'react-icons/go';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav role='navigation'>
        {/* Mobile */}
        <div className='sm:hidden'>
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className='absolute top-6 right-6 z-30 block cursor-pointer'
          >
            {Array(3)
              .fill(1)
              .map((_, i) => (
                <span
                  key={i}
                  // eslint-disable-next-line tailwindcss/no-contradicting-classname
                  className={clsx(
                    `
                  first:[origin-[0%_0%]]
                  relative
                   z-10 mb-1 block h-1 w-8 origin-[4px_0px] rounded-sm transition-all duration-500 ease-in-out
                   odd:origin-[0%_100%]`,
                    menuOpen ? 'bg-zinc-700' : 'bg-zinc-500',
                    menuOpen &&
                      `
                    translate-x-[-2px] -translate-y-1 rotate-45
                    even:-translate-x-1 even:translate-y-2 even:-rotate-45
                    [&:nth-child(3)]:rotate-0 [&:nth-child(3)]:scale-[0.2] [&:nth-child(3)]:opacity-0
                    `,
                  )}
                />
              ))}
          </div>
          <div
            className={clsx(
              `absolute z-20 -ml-6 h-screen w-screen bg-zinc-800 transition-transform duration-500 ease-in-out`,
              menuOpen ? 'translate-x-0' : '-translate-x-full',
            )}
          >
            <div className='mx-4 mt-16 flex flex-col gap-4'>
              {NAVIGATIONS.map((nav) => (
                <div
                  className='flex items-center border-b-[1px] border-stone-700 pb-2 font-bold uppercase'
                  key={nav.id}
                >
                  <NavLink
                    onClick={() => setMenuOpen(false)}
                    end
                    to={nav.link}
                    key={nav.id}
                    className={({ isActive }) =>
                      clsx(
                        isActive ? 'text-primary' : '',
                        'flex items-center gap-3',
                      )
                    }
                  >
                    {nav.icon}
                    <p>{nav.name}</p>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className='fixed right-8 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-5 sm:flex'>
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
      </nav>
    </>
  );
};

export default Navbar;
