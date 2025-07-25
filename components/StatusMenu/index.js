"use client";
import { useRef, useState } from "react";
import { ControlledMenu, MenuItem, useMenuState } from "@szhsin/react-menu";
import { FaCheckCircle } from "react-icons/fa";

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

const groupedStatus = [
    { title: "Not started", statuses: ["OPEN"] },
    {
        title: "Active",
        statuses: ["PENDING", "IN PROGRESS", "COMPLETED", "IN REVIEW", "ACCEPTED", "REJECTED",],
    },
];

export default function StatusMenu({ currentStatus, onChangeStatus }) {
    const [filter, setFilter] = useState("");
    const statusRef = useRef(null);
    const [menuState, toggleMenuState] = useMenuState({ transition: true });

    const handleChange = (newStatus) => {
        onChangeStatus(newStatus);
        toggleMenuState(false);
    };

    return (
        <div className="relative">
            <span
                ref={statusRef}
                onClick={() => toggleMenuState(true)}
                className="cursor-pointer text-white px-3 py-1 rounded-full text-sm shadow"
                style={{ backgroundColor: statusColor[currentStatus] }}
            >
                {currentStatus}
            </span>

            <ControlledMenu
                {...menuState}
                anchorRef={statusRef}
                onClose={() => toggleMenuState(false)}
                direction="top"
                align="start"
                position="anchor"
                className="z-50 border border-gray-200 shadow-lg rounded-md bg-white w-56"
            >
                <div className="px-3 py-2">
                    <input
                        type="text"
                        placeholder="Search status..."
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="w-full px-3 py-1 border rounded text-sm"
                    />
                </div>

                {groupedStatus.map((section) => (
                    <div key={section.title}>
                        <div className="text-xs font-semibold text-gray-500 px-4 py-1 bg-gray-50">
                            {section.title}
                        </div>
                        {section.statuses
                            .filter((status) =>
                                status.toLowerCase().includes(filter.toLowerCase())
                            )
                            .map((status) => (
                                <MenuItem
                                    key={status}
                                    onClick={() => handleChange(status)}
                                    className="px-4 py-2"
                                >
                                    <div className="flex justify-between items-center w-full">
                                        <div className="flex items-center gap-2">
                                            <span
                                                className="h-2 w-2 rounded-full"
                                                style={{ backgroundColor: statusColor[status] }}
                                            />
                                            <span
                                                className={`text-sm ${currentStatus === status ? "font-semibold" : ""
                                                    }`}
                                            >
                                                {status}
                                            </span>
                                        </div>
                                        {currentStatus === status && (
                                            <FaCheckCircle className="text-gray-400 text-xs" />
                                        )}
                                    </div>
                                </MenuItem>
                            ))}
                    </div>
                ))}

                {"CLOSED".toLowerCase().includes(filter.toLowerCase()) && (
                    <MenuItem onClick={() => handleChange("CLOSED")}>
                        <div className="flex justify-between items-center w-full">
                            <div className="flex items-center gap-2">
                                <span
                                    className="h-2 w-2 rounded-full"
                                    style={{ backgroundColor: statusColor["CLOSED"] }}
                                />
                                <span
                                    className={`text-sm ${currentStatus === "CLOSED" ? "font-semibold" : ""
                                        }`}
                                >
                                    CLOSED
                                </span>
                            </div>
                            {currentStatus === "CLOSED" && (
                                <FaCheckCircle className="text-gray-400 text-xs" />
                            )}
                        </div>
                    </MenuItem>
                )}
            </ControlledMenu>
        </div>
    );
}