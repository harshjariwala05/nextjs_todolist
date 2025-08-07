  import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

  export default function SidebarMenuItem({ item, index, isOpen, isActive, isSubmenuOpen, onClick }) {
    return (
      <div
        onClick={onClick}
        className={`group flex items-center justify-between h-12 px-3 rounded-xl cursor-pointer transition-all duration-200
      ${isOpen ? 'w-full' : 'w-[48px] justify-center'} 
      ${isActive ? 'bg-[#EFEFEF]' : 'hover:bg-[#F5F5F5]'}`}
      >

        <div className="flex items-center gap-3">
          <span className={`text-[25px] transition-colors ${isActive ? 'text-black' : 'text-[#6F767E]'} group-hover:text-black`}>
            {item.icon}
          </span>
          {isOpen && (
            <span className={`text-[15px] transition-colors ${isActive ? 'text-black' : 'text-[#6F767E]'} group-hover:text-black`}>
              {item.label}
            </span>
          )}
        </div>

        {item.submenu && isOpen && (
          <span className="text-sm text-[#6F767E]">
            {isSubmenuOpen ? <IoIosArrowUp className="w-4 h-4" /> : <IoIosArrowDown className="w-4 h-4" />}
          </span>
        )}
      </div>
    );
  }
