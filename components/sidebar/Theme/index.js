import { useState } from "react";
import { BsSunFill, BsMoon } from "react-icons/bs";

export default function Theme({ isOpen }) {
  const [isLight, setIsLight] = useState(true);

  const toggleTheme = () => {
    setIsLight((prev) => !prev);
  };

  if (!isOpen) {
    return (
      <div
        className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md cursor-pointer transition hover:scale-105"
        onClick={toggleTheme}
      >
        {isLight ? (
          <BsSunFill className="w-6 h-6 text-black" />
        ) : (
          <BsMoon className="w-6 h-6 text-black" />
        )}
      </div>
    );
  }
  return (
    <div className="flex items-center mt-4 overflow-x-hidden">
      <div className="flex relative py-1 px-0.5 rounded-[20px] bg-[#F1F1F1] transition w-full">
        <button
          onClick={() => setIsLight(true)}
          className={`flex items-center justify-center cursor-pointer h-8 m-0.5 rounded-2xl text-[15px] px-4 py-1 w-full transition ${isLight ? "bg-white shadow text-black" : "text-gray-500"
            }`}
        >
          <BsSunFill className="text-xs mr-2 w-6 h-6 transition" />
          Light
        </button>

        <button
          onClick={() => setIsLight(false)}
          className={`flex items-center justify-center cursor-pointer h-8 m-0.5 rounded-2xl text-[15px] px-4 py-1 w-full transition ${!isLight ? "bg-white shadow text-black" : "text-gray-500"
            }`}
        >
          <BsMoon className="text-xs mr-2 w-6 h-6 transition" />
          Dark
        </button>
      </div>
    </div>
  );
}