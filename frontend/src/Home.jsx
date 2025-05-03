import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import CodeEditor from './utils/CodeEditor';
import Button from './components/Buttons/Button';
import { Outlet } from 'react-router-dom';
import ParentViewEditor from './utils/ParentViewEditor';

const Home = () => {
      const [isMobile, setIsMobile] = useState(false);
        const [isOpen, setIsOpen] = useState(true);
      useEffect(() =>{
       async function handleFetch(){
        const result = await fetch("http://localhost:8080/api/v1/healthz");
        const res = await result.json();
        console.log(res)
       }
       handleFetch();
      }, [])
    
  return (
    <>
    <div className='container'>
    <Navbar/>
        <div className="flex h-screen">
        <Sidebar  isOpen={isOpen} setIsOpen={setIsOpen} isMobile={isMobile} setIsMobile={setIsMobile}/>
       {/* Content Area */}
      <div className={`flex-1 transition-all duration-300 ${isMobile && isOpen ? 'opacity-50' : 'opacity-100'}`}>
        {/* <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Main Content Area</h1>
          <p>This is where your main content would go. The sidebar can be collapsed or expanded.</p>
          <CodeEditor renderPreview={<Button />} fileName="Button" />
        </div> */}
        {/* <ParentViewEditor renderPreview={<Button />}/> */}
        <Outlet/>
      </div>
        </div>
    </div>
       
        
    </>
  )
}

export default Home