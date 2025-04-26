import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Users, 
  Settings, 
  HelpCircle, 
  FileText, 
  Menu, 
  X, 
  ChevronRight, 
  ChevronDown 
} from 'lucide-react';

const Sidebar = ({ isOpen, setIsOpen, isMobile, setIsMobile}) => {
  const [expandedMenus, setExpandedMenus] = useState({});

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

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (menuKey) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuKey]: !prev[menuKey]
    }));
  };

  // Menu items with nested structure
  const menuItems = [
    {
      title: 'Dashboard',
      icon: <Home size={20} />,
      link: '#'
    },
    {
      title: 'Users',
      icon: <Users size={20} />,
      link: '#',
      subMenu: [
        { title: 'User List', link: '#' },
        { title: 'Add User', link: '#' },
        { title: 'User Groups', link: '#' }
      ]
    },
    {
      title: 'Reports',
      icon: <FileText size={20} />,
      link: '#',
      subMenu: [
        { title: 'Monthly', link: '#' },
        { title: 'Quarterly', link: '#' },
        { title: 'Annual', link: '#' }
      ]
    },
    {
      title: 'Settings',
      icon: <Settings size={20} />,
      link: '#'
    },
    {
      title: 'Help',
      icon: <HelpCircle size={20} />,
      link: '#'
    }
  ];

  return (
    <>
      {/* Sidebar */}
      <div 
        className={`bg-gray-800 text-white transition-all duration-300 ${
          isOpen ? 'w-64' : 'w-0 md:w-16'
        } fixed md:relative h-full z-20`}
      >
        {/* Sidebar Header */}
        <div className={`flex items-center justify-between h-16 px-4 ${!isOpen && 'md:justify-center'}`}>
          {isOpen && <div className="font-bold text-xl">Sidebar</div>}
          <button 
            onClick={toggleSidebar} 
            className={`p-1 rounded-md hover:bg-gray-700 focus:outline-none ${!isOpen && 'hidden md:block'}`}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Sidebar Menu */}
        <div className={`overflow-y-auto h-[calc(100%-4rem)] ${!isOpen && 'hidden md:block'}`}>
          <ul className="py-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <div>
                  <div 
                    className={`flex items-center px-4 py-3 cursor-pointer hover:bg-gray-700 ${
                      !isOpen && 'md:justify-center'
                    }`}
                    onClick={() => item.subMenu ? toggleSubMenu(item.title) : null}
                  >
                    <div className={`${isOpen ? 'mr-2':''}`}>{item.icon}</div>
                    {isOpen && (
                      <>
                        <div className="flex-grow">{item.title}</div>
                        {item.subMenu && (
                          <div>
                            {expandedMenus[item.title] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                  
                  {/* SubMenu Items */}
                  {isOpen && item.subMenu && expandedMenus[item.title] && (
                    <ul className="bg-gray-900 py-2">
                      {item.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a 
                            href={subItem.link}
                            className="flex items-center pl-12 py-2 hover:bg-gray-700"
                          >
                            {subItem.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Mobile Toggle Button (Outside Sidebar) */}
      {isMobile && !isOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-20 md:hidden p-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 focus:outline-none"
        >
          <Menu size={24} />
        </button>
      )}
      </>

  );
};

export default Sidebar;