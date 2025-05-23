import React, { useState, useEffect } from 'react';

import {
  Users,
  FileText,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import useTheme from '../../hooks/useTheme';

const Sidebar = ({ isOpen, setIsOpen, isMobile, setIsMobile }) => {
  const [expandedMenus, setExpandedMenus] = useState({});
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState('buttons');


  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);


  const loc = useLocation();
  const location = loc.pathname;

  const sidemenus = [
    {
      id: 'components',
      title: 'Components',
      icon: <Users size={20} />,
      link: '#',
      subMenu: [
        { id: 'buttons', title: 'Button', link: '/button' },
        { id: 'lists', title: 'Lists', link: '/list' },
        { id: 'radio', title: 'Radio', link: '/radio' },
        { id: 'input', title: 'Input', link: '/input' },
        { id: 'cards', title: 'Cards', link: '/cards' },
        { id: 'alerts', title: 'Alerts', link: '/alerts' },
        { id: 'modals', title: 'Modal', link: '/modal' },
        { id: 'typography', title: 'Typography', link: '/typography' },
        { id: 'tables', title: 'Table', link: '/table' },
        { id: 'dropdowns', title: 'Dropdown', link: '/dropdown' },
        { id: 'accordions', title: 'Accordion', link: '/accordion' },
      ]
    },
    {
      id: 'templates',
      title: 'Templates',
      icon: <FileText size={20} />,
      link: '#',
      subMenu: [
        { id: 'templates1', title: 'Template1', link: '#' },
        { id: 'templates2', title: 'Template2', link: '#' },
        { id: 'templates3', title: 'Template3', link: '#' }
      ]
    }
  ]

  return (
    <>

      {isMenuOpen && (
        <div className={`mt-4 fixed rounded-lg inset-0 z-20 ${theme === 'dark' ? 'bg-gray-900 bg-opacity-80' : 'bg-gray-200 bg-opacity-50'} lg:hidden`}>
          <div className={`w-64 h-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-4 overflow-y-auto`}>
            {
              sidemenus.map((menu) => (
                <>
                  <div className="flex justify-between items-center mb-6" key={menu.id}>
                    <div className="text-xl font-bold text-purple-500">{menu.title}</div>
                    {/* <button className="p-1" onClick={() => setIsMenuOpen(false)}>
                  ✕
                </button> */}
                  </div>
                  <nav>
                    {
                      menu.subMenu.map((submenu) => (
                        <button
                          key={submenu.id}
                          className={`block w-full text-left px-3 py-2 rounded-md mb-1 cursor-pointer transition-all 0.3s ease-in-out ${location === submenu.link
                              ? `${theme === 'dark' ? 'bg-gray-700 text-purple-400' : 'bg-purple-100 text-purple-700'}`
                              : `${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`
                            }`}
                          // onClick={() => {
                          //   setActiveComponent(submenu.id);
                          // }}
                        >
                          {submenu.title}
                        </button>
                      ))
                    }
                  </nav>
                </>
              ))
            }

          </div>
        </div>
      )}

      {/* Sidebar - Desktop */}
      <aside className={`mt-4 hidden shadow-lg rounded-lg lg:block w-64 shrink-0 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-6 sticky top-20 self-start h-screen overflow-y-auto`}>
        <div className="mb-6">
          {
            sidemenus.map((menu) => (
              <>
                <h3 className="text-lg font-semibold mb-4 text-purple-500">{menu.title}</h3>
                <nav>
                  {
                    menu.subMenu.map((submenu) => (
                      <Link
                        key={submenu.id}
                        className={`block w-full text-left px-3 py-2 rounded-md mb-1 cursor-pointer transition-all 0.3s ease-in-out ${location === submenu.link
                            ? `${theme === 'dark' ? 'bg-gray-700 text-purple-400' : 'bg-purple-100 text-purple-700'} font-medium`
                            : `${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`
                          }`}
                        // onClick={() => setActiveComponent(submenu.id)}
                        to={submenu.link}
                      >
                        {submenu.title}

                      </Link>
                    ))
                  }
                </nav>
              </>
            ))
          }
        </div>
      </aside>
    </>

  );
};

export default Sidebar;