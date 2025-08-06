'use client';
import Dashboard from '../../components/DashBoard';
import Header from '../../components/Header';
import Sidebar from '../../components/sidebar';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setOpen] = useState(true); // original name

  // 👉 Detect screen size changes
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768); // mobile under 768px
      setOpen(width >= 768 ? width >= 1260 : false); // open if >= 1260, else collapsed/closed
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 👉 Toggle for mobile only
  const toggleSidebar = () => {
    if (isMobile) {
      setOpen(prev => !prev);
    }
  };

  return (
    <div className="flex">
      <Sidebar
        isMobile={isMobile}
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
      />

      <div
        className={`flex flex-col min-h-screen transition-all duration-300 ${
          !isMobile && isOpen ? 'ml-[340px]' : !isMobile ? 'ml-[96px]' : ''
        }`}
      >
        <Header toggleSidebarCollapse={toggleSidebar} isOpen={isOpen} />
        <main className="">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}