'use client';
import Dashboard from '../../components/DashBoard';
import Header from '../../components/Header';
import Sidebar from '../../components/sidebar';
import { useState } from 'react';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleSidebarToggle = () => {
    if (window.innerWidth < 768) {
      setIsMobile(!isMobile);
    } else {
      setOpen(!isOpen);
    }
  };

  return (
    <div className="flex">
      <Sidebar
        isMobile={isMobile}
        toggleSidebar={handleSidebarToggle}
        isOpen={isOpen}
      />

      <div
        className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${isOpen ? 'md:ml-[96px]' : 'md:ml-[340px]'
          }`}
      >
        <Header toggleSidebarCollapse={handleSidebarToggle} isOpen={isOpen} />
        <main className="p-10  ">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}