import SidebarItems from './SidebarItems';
import { FaTimes } from 'react-icons/fa';

export default function Sidebar({ isMobile, toggleSidebar, isOpen }) {
  return (
    <>
      {isMobile && (
        <div
          className="fixed inset-0 bg-opacity-40 z-30 md:hidden items-center "
          onClick={toggleSidebar}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-40 transition-transform duration-300 ease-in-out
          ${isMobile ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
          ${isOpen ? 'w-[96px]' : 'w-[340px]'} flex flex-col`}
      >
        <div className="flex items-center justify-between px-4 py-4 md:hidden border-b">
          <img
            src="https://ui8-core.herokuapp.com/img/logo-dark.png"
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
          <button onClick={toggleSidebar} className="text-xl text-gray-600">
            <FaTimes />
          </button>
        </div>

        <div className="hidden md:flex items-center justify-start px-4 py-6 ml-2">
          <img
            src="https://ui8-core.herokuapp.com/img/logo-dark.png"
            alt="Logo"
            className="w-12 h-12 rounded-full"
          />
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <SidebarItems isOpen={!isOpen} />
        </div>
      </div>
    </>
  );
}