"use client";
import { useRef, useState } from "react";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/zoom.css";
import ActionMenu from "../ActionMenu";
import StatusMenu from "../StatusMenu";

export default function TodoList({ item, handleEdit, handleDelete }) {

    const [status, setStatus] = useState(item.status || "IN PROGRESS");
    
    return (
        <li className="bg-white rounded-xl shadow-md p-6 mb-6 max-w-lg min-h-55 mx-auto">
            <div className="flex justify-between items-center mb-5 flex-wrap gap-y-2">
                <h3 className={`text-2xl font-semibold ${status === "CLOSED" ? "line-through text-gray-400" : "text-gray-900"}`}>
                    {item.title}
                </h3>

                <ActionMenu
                    handleEdit={() => handleEdit(indexNum)}
                    handleDelete={() => handleDelete(indexNum)}
                />
            </div>

            <p className={`text-gray-700 text-md mb-4 font-semibold ${status === "CLOSED" ? "line-through text-gray-400" : ""}`}>
                {item.description}
            </p>

            {item.dueDate && (
                <p className={`mb-4  text-md ${status === "CLOSED" ? "text-gray-400 line-through" : "text-gray-700"}`}>
                    <span className="text-md font-semibold " >Due Date:</span> {new Date(item.dueDate).toLocaleDateString("en-GB")}
                </p>
            )}

            <div className="mt-4 flex items-center flex-wrap gap-3">
                <span className="text-md font-semibold">Status:</span>
                <StatusMenu
                    currentStatus={status}
                    onChangeStatus={(newStatus) => {
                        setStatus(newStatus);
                        const updatedList = [...todoList];
                        updatedList[indexNum].status = newStatus;
                        setTodoList(updatedList);
                    }}
                />
            </div>
        </li>
    );
}
