import SidebarItems from './SidebarItems';

export default function Sidebar({ isMobile, toggleSidebar, isOpen }) {
  return (
    <>

      {isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        >
          <button>Click</button>
        </div>

      )
      }

      <div
        className={`fixed top-0 left-0 p-4 h-full bg-white shadow-md z-40 transition-all duration-300 ease-in-out
          ${isMobile ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
          
          ${isOpen ? 'w-[96px]' : 'w-[340px]'} md:block flex flex-col`}
      >

        <div className="flex items-left mb-6 justify-left ">
          <img
            src="https://ui8-core.herokuapp.com/img/logo-dark.png"
            alt="Logo"
            className="w-12 h-12 rounded-full"
          />
        </div>


        <div className="flex-1 overflow-y-auto justify-center items-center text-center">
          <SidebarItems isOpen={!isOpen} />
        </div>
      </div>
    </>
  );
}