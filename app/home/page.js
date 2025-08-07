'use client';
import Dashboard from '../../components/DashBoard';
import Header from '../../components/Header';
import Sidebar from '../../components/sidebar';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setOpen] = useState(true);
  const [isManuallyOpened, setManuallyOpened] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const mobile = width < 768;
      setIsMobile(mobile);
      setOpen(mobile ? false : width >= 1260);
      setManuallyOpened(false);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setOpen(prev => {
      const newState = !prev;
      if (!isMobile && newState) {
        setManuallyOpened(true);  
      } else {
        setManuallyOpened(false);
      }
      return newState;
    });
  };

  const marginClass = !isMobile && isOpen && !isManuallyOpened
    ? 'ml-[340px]'
    : !isMobile
      ? 'ml-[96px]'
      : '';

  const fadeClass = !isMobile && isManuallyOpened
    ? 'opacity-50 transition-opacity duration-300'
    : 'opacity-100 transition-opacity duration-300';


  return (
    <div className="flex  relative w-full">
      {!isMobile && isManuallyOpened && (
        <div
          className="fixed inset-0 bg-opacity-30 z-30"
          onClick={toggleSidebar}
        />
      )}

      <Sidebar
        isMobile={isMobile}
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        isManuallyOpened={isManuallyOpened}
      />

      <div className={`flex flex-col min-h-screen w-full ${marginClass} ${fadeClass}`}>
        <Header toggleSidebarCollapse={toggleSidebar} isOpen={isOpen} />
        <main>
          <Dashboard />
        </main>
      </div>
    </div>
  );
}