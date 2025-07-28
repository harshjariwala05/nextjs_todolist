"use client";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import Assignee from "../Assignee";
import { UsersData } from "../UsersData";

export default function TodoForm({ todoList, setTodoList, editingIndex, setEditingIndex }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [assignee, setAssignee] = useState("");

  const saveTodoList = (event) => {
    event.preventDefault();

    if (!title || !description || !dueDate || !assignee) {
      alert("All fields are required");
      return;
    }

    const selectedAssignee = UsersData.find(user => user.name === assignee);

    const newItem = {
      title,
      description,
      status: "IN PROGRESS",
      dueDate: dueDate.toISOString(),
      assignee: selectedAssignee
    };

    if (editingIndex !== null) {
      const updatedList = [...todoList];
      updatedList[editingIndex] = { ...updatedList[editingIndex], ...newItem };
      setTodoList(updatedList);
      setEditingIndex(null);
    } else {
      const exists = todoList.some((item) => item.title === title);
      if (exists) {
        alert("Todo with this title already exists");
        return;
      }
      setTodoList([...todoList, newItem]);
    }

    setTitle("");
    setDescription("");
    setAssignee("");
    setDueDate(null);
    event.target.reset();
  };

  useEffect(() => {
    if (editingIndex !== null) {
      const item = todoList[editingIndex];
      setTitle(item.title);
      setDescription(item.description);
      setAssignee(item.assignee.name);
      setDueDate(dayjs(item.dueDate));
    }
  }, [editingIndex, todoList]);

  return (
    <form className="space-y-4" onSubmit={saveTodoList}>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full mt-4 px-4 py-2  rounded border-[1px] border-[#8E939B] text-gray-900 placeholder-gray-500  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />

      <input
        type="text"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="w-full mt-2 px-4 py-2  rounded border-[1px] border-[#8E939B] text-gray-900 placeholder-gray-500  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />

      <Assignee value={assignee} onChange={setAssignee} assignees={UsersData} />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            label="Due Date"
            format="DD/MM/YYYY"
            value={dueDate}
            onChange={(newValue) => setDueDate(newValue)}
            slotProps={{
              textField: {
                size: "small",
                fullWidth: true,
              },
            }}
          />
        </DemoContainer>
      </LocalizationProvider>

      <div className="flex justify-center">
        <button
          type="submit"
          className={`w-30 mt-5 py-2 rounded-lg text-white font-semibold ${editingIndex !== null
            ? "bg-green-600 hover:bg-green-700"
            : "bg-blue-600 hover:bg-blue-700"
            }`}
        >
          {editingIndex !== null ? "Update" : "Save"}
        </button>
      </div>

    </form>
  )
}