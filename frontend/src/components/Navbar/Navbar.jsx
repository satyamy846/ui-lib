import React, { useState } from 'react';
import { Menu, Search, Moon, Sun, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import useTheme from '../../hooks/useTheme';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`sticky top-0 z-10 shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={20} />
          </button>
          <div className="text-xl font-bold flex items-center">
            <div className={`h-8 w-8 rounded-md mr-2 ${theme === 'dark' ? 'bg-purple-600' : 'bg-purple-500'} flex items-center justify-center`}>
              <span className="text-white font-bold">UI</span>
            </div>
            ComponentStack
          </div>
        </div>

        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className={`flex items-center w-full rounded-md ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} px-3 py-2`}>
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search components..."
              className={`ml-2 bg-transparent border-none focus:outline-none w-full ${theme === 'dark' ? 'placeholder-gray-400' : 'placeholder-gray-500'}`}
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button
            className={`p-2 rounded-md cursor-pointer ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a href="#" className="flex items-center">
            <Github size={20} className="mr-1" />
            <span className="hidden md:inline">GitHub</span>
          </a>
          <a
            href="#"
            className={`hidden md:inline-flex items-center px-4 py-2 rounded-md text-white ${theme === 'dark' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'}`}
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;