import { FaBars } from "react-icons/fa";

export default function Header({ toggleSidebarCollapse, isOpen }) {
    return (
        <header
            className={`fixed top-0 right-0 h-16 bg-[#FCFCFC] flex items-center justify-between px-4 z-30 shadow transition-all duration-300
          ${isOpen ? 'md:ml-[96px]' : 'md:ml-[340px]'} left-0`}
        >
            <button onClick={toggleSidebarCollapse} className="text-2xl">
                <FaBars style={{ cursor: 'pointer' }} />
            </button>
        </header>
    );
}