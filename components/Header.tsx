import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FilmIcon, SparklesIcon, UserCircleIcon } from './icons/Icons';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const activeLinkClass = "font-semibold text-white";
  const inactiveLinkClass = "text-gray-300 hover:text-gray-200";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
             <button className="hidden sm:block mr-6 px-3 py-1 text-sm bg-gray-800 border border-gray-700 text-gray-300 rounded-md hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-red-500">
              Hide preview
            </button>
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-red-500">
              <span className="text-3xl font-black text-red-600 tracking-widest uppercase">IndieFlix</span>
            </Link>
            <nav className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-6">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `${isActive ? activeLinkClass : inactiveLinkClass} text-sm font-medium transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/generate"
                  className={({ isActive }) =>
                    `${isActive ? activeLinkClass : inactiveLinkClass} text-sm font-medium transition-colors flex items-center gap-1.5 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500`
                  }
                >
                  <SparklesIcon className="h-4 w-4 text-red-500" aria-hidden="true" />
                  Generate Ideas
                </NavLink>
              </div>
            </nav>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">View profile</span>
                <UserCircleIcon className="h-8 w-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;