import { AiOutlineQuestionCircle } from "react-icons/ai";

export default function HelpItem({ isOpen }) {
  return (
    <div
      className={`
        flex items-center h-12 rounded-xl text-[15px] font-semibold text-[#6F767E] gap-2 group justify-start px-3 cursor-pointer transition overflow-x-hidden
        ${!isOpen ? 'hidden md:flex' : ''}
      `}
    >
      <AiOutlineQuestionCircle className="w-6 h-6 fill-[#6F767E] group-hover:text-black transition-colors" />

      {isOpen && (
        <>
          <span className="group-hover:text-black transition-colors">
            Help & getting started
          </span>
          <div className="ml-auto shrink-0 min-w-6 px-2 rounded-md text-center leading-6 text-[#1A1D1F] bg-[#CABDFF]">
            8
          </div>
        </>
      )}
    </div>
  );
}
