"use client";
import { useRef, useState } from "react";
import { ControlledMenu, MenuItem, useMenuState } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/zoom.css";
import { FaAngleDown, FaAngleUp, FaCheckCircle } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";

const statusColor = {
    "OPEN": "#999999",
    "PENDING": "#f0ad4e",
    "IN PROGRESS": "#d63384",
    "COMPLETED": "#000000",
    "IN REVIEW": "#fd7e14",
    "ACCEPTED": "#d9534f",
    "REJECTED": "#800080",
    "CLOSED": "#28a745",
};

export default function TodoListItems({ item, indexNum, todoList, setTodoList, handleEdit }) {
    const [status, setStatus] = useState(item.status || "IN PROGRESS");
    const [filter, setFilter] = useState("");
    const [statusMenuState, toggleStatusMenu] = useMenuState({ transition: true });
    const [actionMenuState, setActionMenuState] = useState({ state: "closed" });

    const actionRef = useRef(null);
    const statusRef = useRef(null);

    const toggleActionMenu = () => {
        setActionMenuState((prev) => ({
            state: prev.state === "open" ? "closed" : "open",
        }));
    };

    const updateStatus = (newStatus) => {
        setStatus(newStatus);
        const updatedList = [...todoList];
        updatedList[indexNum].status = newStatus;
        setTodoList(updatedList);
        toggleStatusMenu(false);
    };

    const delRow = () => {
        const finalData = todoList.filter((_, index) => index !== indexNum);
        setTodoList(finalData);
    };

    const groupedStatus = [
        { title: "Not started", statuses: ["OPEN"] },
        {
            title: "Active",
            statuses: ["PENDING", "IN PROGRESS", "COMPLETED", "IN REVIEW", "ACCEPTED", "REJECTED"],
        },
    ];

    return (
        <li className="bg-white rounded-xl shadow-md p-6 mb-6 max-w-lg min-h-65 mx-auto">
            <h3 className={`text-xl font-semibold mb-10 ${status === "CLOSED" ? "line-through text-gray-400" : "text-gray-900"}`}>
                {item.title}
            </h3>

            <div className="flex items-start mb-2 justify-between gap-4 flex-wrap">
                <p className={`text-gray-700 text-md ${status === "CLOSED" ? "line-through text-gray-400" : ""}`}>
                    {item.description}
                </p>

                <div className="relative">
                    <span
                        ref={actionRef}
                        onClick={toggleActionMenu}
                        className="text-blue-600 mb-6 font-medium flex items-center gap-1 cursor-pointer"
                    >
                        Action {actionMenuState.state === "open" ? <FaAngleUp /> : <FaAngleDown />}
                    </span>

                    <ControlledMenu
                        {...actionMenuState}
                        anchorRef={actionRef}
                        onClose={() => setActionMenuState({ state: "closed" })}
                        direction="right"
                        className="z-50"
                    >
                        <MenuItem onClick={() => handleEdit(indexNum)} className="text-green-600">
                            <AiFillEdit className="mr-2" />
                            Edit
                        </MenuItem>
                        <MenuItem onClick={delRow} className="text-red-600">
                            <RiDeleteBinLine className="mr-2" />
                            Delete
                        </MenuItem>
                    </ControlledMenu>
                </div>
            </div>

            {item.dueDate && (
                <p className={`mb-6 text-md ${status === "CLOSED" ? "text-gray-400 line-through" : "text-gray-700"}`}>
                    <strong>Due Date:</strong> {new Date(item.dueDate).toLocaleDateString("en-GB")}
                </p>
            )}

            <div className="mt-4 flex items-center flex-wrap gap-3">
                <span className="text-md font-semibold">Status:</span>

                <span  
                    ref={statusRef}
                    onClick={() => toggleStatusMenu(true)}
                    className="cursor-pointer text-white px-3 py-1 rounded-full text-sm shadow"
                    style={{ backgroundColor: statusColor[status] }}
                >
                    {status}
                </span>

                <ControlledMenu
                    {...statusMenuState}
                    anchorRef={statusRef}
                    onClose={() => toggleStatusMenu(false)}
                    direction="top"
                    align="start"
                    position="anchor"
                    className="z-50"
                >
                    <div className="px-3 py-2">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="w-full px-3 py-1 border rounded text-sm mb-2"
                        />
                    </div>

                    {groupedStatus.map((section, i) => (
                        <div key={section.title}>
                            <div className="text-xs font-bold px-4 py-1 text-gray-500 bg-gray-100">
                                {section.title}
                            </div>

                            {section.statuses
                                .filter((s) => s.toLowerCase().includes(filter.toLowerCase()))
                                .map((statusOpt) => (
                                    <MenuItem key={statusOpt} onClick={() => updateStatus(statusOpt)}>
                                        <div className="flex justify-between items-center w-full">
                                            <div className="flex items-center gap-2">
                                                <span
                                                    className="h-2 w-2 rounded-full"
                                                    style={{ backgroundColor: statusColor[statusOpt] }}
                                                />
                                                <span className={`text-sm ${status === statusOpt ? "font-semibold" : ""}`}>
                                                    {statusOpt}
                                                </span>
                                            </div>
                                            {status === statusOpt && <FaCheckCircle className="text-gray-400" />}
                                        </div>
                                    </MenuItem>
                                ))}
                        </div>
                    ))}

                    {"CLOSED".toLowerCase().includes(filter.toLowerCase()) && (
                        <MenuItem onClick={() => updateStatus("CLOSED")}>
                            <div className="flex justify-between items-center w-full">
                                <div className="flex items-center gap-2">
                                    <span
                                        className="h-2 w-2 rounded-full"
                                        style={{ backgroundColor: statusColor["CLOSED"] }}
                                    />
                                    <span className={`text-sm ${status === "CLOSED" ? "font-semibold" : ""}`}>
                                        CLOSED
                                    </span>
                                </div>
                                {status === "CLOSED" && <FaCheckCircle className="text-gray-400" />}
                            </div>
                        </MenuItem>
                    )}
                </ControlledMenu>
            </div>
        </li>
    );
}
