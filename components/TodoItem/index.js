"use client";
import { useState } from "react";
import ActionMenu from "../ActionMenu";
import StatusMenu from "../StatusMenu";

export default function TodoItem({ item, indexNum, todoList, setTodoList, handleEdit, handleDelete }) {
    const [status, setStatus] = useState(item.status || "IN PROGRESS");

    const updateStatus = (newStatus) => {
        setStatus(newStatus);
        const updatedList = [...todoList];
        updatedList[indexNum].status = newStatus;
        setTodoList(updatedList);
    };

    return (
        <li className="bg-white rounded-xl shadow-md p-6 mb-6 max-w-lg mx-auto">
            <div className="flex justify-between items-center mb-4">
                <h3 className={`text-2xl font-semibold ${status === "CLOSED" ? "line-through text-gray-400" : "text-gray-900"}`}>
                    {item.title}
                </h3>
                <ActionMenu
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
            </div>
            <p className={`text-md mb-2 font-medium ${status === "CLOSED" ? "line-through text-gray-400" : "text-gray-700"}`}>
                {item.description}
            </p>
            {item.dueDate && (
                <p className={`text-sm mb-2 ${status === "CLOSED" ? "text-gray-400 line-through" : "text-gray-700"}`}>
                    <span className="font-semibold">Due Date:</span> {new Date(item.dueDate).toLocaleDateString("en-GB")}
                </p>
            )}
            <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">Status:</span>
                <StatusMenu
                    currentStatus={status}
                    onChangeStatus={updateStatus}
                />
            </div>
        </li>
    );
}
