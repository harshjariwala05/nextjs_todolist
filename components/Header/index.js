import { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";

export default function Header({ toggleSidebarCollapse }) {
   const [showMobileSearch, setShowMobileSearch] = useState(false);

   return (
      <header className="relative top-0 left-0 right-0 bg-[#FCFCFC] shadow z-30">
         <div className="flex items-center justify-between h-16 px-4">
            {/* Left side - Search (desktop only) */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-2 w-[300px]">
               <FaSearch className="text-gray-500 mr-2" />
               <input
                  type="text"
                  placeholder="Search or type a command"
                  className="bg-transparent outline-none w-full text-gray-700"
               />
            </div>

            {/* Center - Mobile Sidebar Toggle */}
            <div className="md:hidden">
               <button
                  onClick={toggleSidebarCollapse}
                  className="text-2xl"
               >
                  <FaBars />
               </button>
            </div>

            {/* Right side */}
            <div className="flex items-center justify-end gap-4 md:gap-6 ml-auto">
               {/* Mobile search button */}
               <button
                  onClick={() => setShowMobileSearch(prev => !prev)}
                  className="md:hidden text-gray-700 text-2xl"
               >
                  <FaSearch />
               </button>

               <button className="text-sm font-medium text-black hover:text-[#2A85FF]">
                  Sign in
               </button>

               <button className="bg-[#2A85FF] hover:bg-blue-600 text-white text-sm font-semibold px-5 py-2 rounded-full">
                  Sign up
               </button>
            </div>
         </div>

         {/* Mobile Search Input */}
         {showMobileSearch && (
            <div className="md:hidden px-4 pb-3">
               <input
                  type="text"
                  placeholder="Search..."
                  className="w-full rounded-md border px-3 py-2"
                  autoFocus
               />
            </div>
         )}
      </header>
   );
}