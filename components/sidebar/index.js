import SidebarItems from './SidebarItems';

export default function Sidebar({ isOpen, toggleSidebar, open }) {
  return (
    <>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      <div
        className={`fixed top-0 left-0 p-6 h-full bg-white shadow-md z-40 transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
          ${open ? 'w-[96px]' : 'w-[340px]'} md:block flex flex-col`}
      >
   
        <div className="flex items-left mb-12 justify-left ">
          <img
            src="https://ui8-core.herokuapp.com/img/logo-dark.png"
            alt="Logo"
            className="w-12 h-12 rounded-full"
          />
        </div>

  
        <div className="flex-1 overflow-y-auto justify-center items-center text-center">
          <SidebarItems open={!open} />
        </div>
      </div>
    </>
  );
}