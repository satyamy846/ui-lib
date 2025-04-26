import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className='px-4'>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-xl">
          <svg width="160" height="50" viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="160" height="50" rx="10" fill="#0F172A"/>
  <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
        fontFamily="Segoe UI, sans-serif" fontSize="20" fontWeight="bold" fill="#F8FAFC">
   Logo
  </text>
</svg>

          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="px-3 py-2 rounded-lg hover:bg-gray-700 font-medium">Home</Link>
              <Link to="/setup" className="px-3 py-2 rounded-lg hover:bg-gray-700 font-medium">Setup Guide</Link>
              <a href="#" className="px-3 py-2 rounded-lg hover:bg-gray-700 font-medium">Services</a>
              <a href="#" className="px-3 py-2 rounded-lg hover:bg-gray-700 font-medium">Blog</a>
              <a href="#" className="px-3 py-2 rounded-lg hover:bg-gray-700 font-medium">Contact</a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="block px-3 py-2 rounded-md hover:bg-gray-700 font-medium">Home</Link>
              <Link to="/setup" className="px-3 py-2 rounded-lg hover:bg-gray-700 font-medium">Setup Guide</Link>
              <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-700 font-medium">Services</a>
              <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-700 font-medium">Blog</a>
              <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-700 font-medium">Contact</a>
            </div>
          </div>
        )}
</div>
    </nav>
  );
};

export default Navbar;