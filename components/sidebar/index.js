import SidebarItems from './SidebarItems';
import { FaTimes } from 'react-icons/fa';
import { AiOutlineQuestionCircle } from "react-icons/ai";
import HelpItem from './HelpItem';
import Theme from './Theme';

export default function Sidebar({ isMobile, isOpen, toggleSidebar }) {
  const sidebarWidth = isOpen ? 'w-[340px]' : 'w-[96px]';
  const translateClass = isMobile
    ? isOpen ? 'translate-x-0' : '-translate-x-full'
    : 'translate-x-0';

  return (
    <>
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-opacity-30 z-30"
          onClick={toggleSidebar}
        />
      )}

      <div
        className={`fixed flex top-0 left-0 h-screen bg-white shadow-lg z-40 transition-transform duration-300 ease-in-out ${translateClass} ${sidebarWidth} flex flex-col`}
      >
        {isMobile ? (
          <div className="flex items-center justify-between px-4 py-4">
            <img
              src="https://ui8-core.herokuapp.com/img/logo-dark.png"
              alt="Logo"
              className="w-10 h-10 rounded-full"
            />
            <button onClick={toggleSidebar} className="text-xl text-gray-600">
              <FaTimes />
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-start px-4 py-6">
            <img
              src="https://ui8-core.herokuapp.com/img/logo-dark.png"
              alt="Logo"
              className={`rounded-full transition-all duration-300 ${isOpen ? 'w-12 h-12' : 'w-10 h-10'}`}
            />
          </div>
        )}

        <div className="flex overflow-y-auto p-4 mb">
          <SidebarItems isOpen={isOpen || isMobile} />
        </div>

        <div className='p-4 mt-auto'>
          <HelpItem isOpen={isOpen || isMobile} />
          <Theme isOpen={isOpen || isMobile} />
        </div>

      </div>
    </>
  );
}