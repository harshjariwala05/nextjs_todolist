import SidebarItems from './SidebarItems';
import { FaTimes } from 'react-icons/fa';
import HelpItem from './HelpItem';
import Theme from './Theme';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function Sidebar({ isMobile, isOpen, toggleSidebar, isManuallyOpened }) {
  const sidebarWidth = isOpen ? 'w-[340px]' : 'w-[96px]';
  const translateClass = isMobile
    ? isOpen
      ? 'translate-x-0'
      : '-translate-x-full'
    : 'translate-x-0';

  const showToggleIcon = !isOpen && !isMobile;

  return (
    <>
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-opacity-30 z-30"
          onClick={toggleSidebar}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-screen bg-white shadow-lg z-40 transition-transform duration-300 ease-in-out ${translateClass} ${sidebarWidth} flex flex-col`}
      >
        <div className="relative flex items-center justify-start px-5 py-6 shrink-0">
          <img
            src="https://ui8-core.herokuapp.com/img/logo-dark.png"
            alt="Logo"
            className={`rounded-full transition-all duration-300 ${isOpen ? 'w-12 h-12' : 'w-10 h-10'}`}
          />

          {isManuallyOpened && (
            <button
              onClick={toggleSidebar}
              className="absolute right-4 top-4 text-gray-600 hover:text-black"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          )}
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-hide flex flex-col justify-between px-4 pb-4">
          <div>
            <SidebarItems
              isOpen={isOpen || isMobile}
              toggleSidebar={toggleSidebar}
            />

          </div>
          {showToggleIcon && (
            <div className="flex justify-start mt-12 ml-2 py-2">
              <button
                onClick={toggleSidebar}
                className="w-8 h-8 bg-white cursor-pointer rounded-full flex items-center justify-center shadow"
              >
                <FaArrowRightLong className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          )}

          <div className="mt-4">
            <HelpItem isOpen={isOpen || isMobile} />
            <div className="mt-4">
              <Theme isOpen={isOpen || isMobile} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
