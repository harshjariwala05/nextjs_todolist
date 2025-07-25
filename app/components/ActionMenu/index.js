"use client";
import { useRef, useState } from "react";
import { ControlledMenu, MenuItem } from "@szhsin/react-menu";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/zoom.css";

export default function ActionMenu({ onEdit, onDelete }) {
  const [menuState, setMenuState] = useState({ state: "closed" });
  const actionRef = useRef(null);

  const toggleMenu = () => {
    setMenuState((prev) => ({
      state: prev.state === "open" ? "closed" : "open",
    }));
  };

  return (
    <div className="relative flex-shrink-0">
      <span
        ref={actionRef}
        onClick={toggleMenu}
        className="text-blue-600 font-medium flex items-center gap-1 cursor-pointer transition hover:text-blue-800"
      >
        Action {menuState.state === "open" ? <FaAngleUp /> : <FaAngleDown />}
      </span>

      <ControlledMenu
        {...menuState}
        anchorRef={actionRef}
        onClose={() => setMenuState({ state: "closed" })}
        direction="right"
        className="z-50 border border-gray-200 shadow-md rounded-lg p-1 bg-white"
      >
        <MenuItem
          onClick={onEdit}
          className="text-green-600 flex items-center hover:bg-green-50 px-3 py-2 text-sm"
        >
          <AiFillEdit className="mr-2" />
          Edit
        </MenuItem>
        <MenuItem
          onClick={onDelete}
          className="text-red-600 flex items-center hover:bg-red-50 px-3 py-2 text-sm"
        >
          <RiDeleteBinLine className="mr-2" />
          Delete
        </MenuItem>
      </ControlledMenu>
    </div>
  );
}
