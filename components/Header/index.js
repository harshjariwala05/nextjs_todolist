import { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";

export default function Header({ toggleSidebarCollapse, isOpen }) {
   const [showMobileSearch, setShowMobileSearch] = useState(false);

   return (
      <header
         className={`fixed top-0 right-0 left-0 bg-[#FCFCFC] shadow z-30 transition-all duration-300
        ${isOpen ? "md:ml-[96px]" : "md:ml-[340px]"}`}
      >
         <div className="flex items-center justify-between h-16 px-4">
            <button onClick={toggleSidebarCollapse} className="text-2xl">
               <FaBars />
            </button>

            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-2 w-[300px] mx-auto">
               <FaSearch className="text-gray-500 mr-2" />
               <input
                  type="text"
                  placeholder="Search or type a command"
                  className="bg-transparent outline-none w-full text-gray-700"
               />
            </div>

            <div className="flex items-center justify-end gap-4 md:gap-6">
               <button
                  onClick={() => setShowMobileSearch(prev => !prev)}
                  className="md:hidden text-gray-700 text-2xl cursor-pointer"
                  aria-label="Toggle mobile search"
               >
                  <FaSearch />
               </button>

               <button className="cursor-pointer text-sm font-medium text-black hover:text-[#2A85FF] transition-colors">
                  Sign in
               </button>

               <button className="cursor-pointer bg-[#2A85FF] hover:bg-blue-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-all w-full md:w-auto">
                  Sign up
               </button>
            </div>

         </div>

         {showMobileSearch && (
            <div className="md:hidden px-4 pb-3">
               <input
                  type="text"
                  placeholder="Search..."
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
                  autoFocus
               />
            </div>
         )}
      </header>
   );
}
