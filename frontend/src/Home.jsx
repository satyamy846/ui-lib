import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import CodeEditor from './utils/CodeEditor';
import Button from './components/Buttons/Button';
import { Outlet, useLocation } from 'react-router-dom';
import ParentViewEditor from './utils/ParentViewEditor';
import Footer from './Footer';
import useTheme from './hooks/useTheme';

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const { theme, toggleTheme } = useTheme();
  // const [location, setLocation] = useState('');

  useEffect(() => {
    async function handleFetch() {
      const result = await fetch("http://localhost:8080/api/v1/healthz");
      const res = await result.json();
      console.log(res)
    }
    handleFetch();
  }, [])
  const loc = useLocation();
  const location = loc.pathname;
  return (
    <>
      <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
        <Navbar />
        <div className="main-container mx-auto px-4 flex max-w-7xl">
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} isMobile={isMobile} setIsMobile={setIsMobile} />
          <main className="flex-1 py-8 px-4 lg:px-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2 text-center">{location.split('/')[1]?.charAt(0)?.toUpperCase() + location.split('/')[1]?.slice(1)} Components</h1>
              <p className={`text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                A collection of {location.split('/')[1]?.charAt(0)?.toUpperCase() + location.split('/')[1]?.slice(1)} components with different styles, sizes and states.
              </p>
            </div>
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>

    </>
  )
}

export default Home