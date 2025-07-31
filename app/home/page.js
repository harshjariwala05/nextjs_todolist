'use client';
import Dashboard from '../../components/DashBoard';
import Header from '../../components/Header';
import Sidebar from '../../components/sidebar';
import { useState } from 'react';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSidebarToggle = () => {
    if (window.innerWidth < 768) {
      setIsMobile(!isMobile);
    } else {
      setOpen(!open);
    }
  };

  return (
    <div className="flex">
      <Sidebar
        isOpen={isMobile}
        toggleSidebar={handleSidebarToggle}
        open={open}
      />

      <div
        className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${open ? 'md:ml-[96px]' : 'md:ml-[340px]'
          }`}
      >
        <Header toggleSidebarCollapse={handleSidebarToggle} open={open} />
        <main className="pt-16 p-4 ">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}