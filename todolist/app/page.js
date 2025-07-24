"use client";

import { useState } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import TodoListItems from "../app/components/TodoListItems/page";

export default function Home() {
  const [todoList, setTodoList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(null);

  const saveTodoList = (event) => {
    event.preventDefault();

    if (!title || !description || !dueDate) {
      alert("All fields are required");
      return;
    }

    const newItem = {
      title,
      description,
      status: "IN PROGRESS",
      dueDate: dueDate ? dueDate.toISOString() : null,
    };

    if (editingIndex !== null) {
      const updatedList = [...todoList];
      updatedList[editingIndex] = { ...updatedList[editingIndex], ...newItem };
      setTodoList(updatedList);
      setEditingIndex(null);
    } else {
      const exists = todoList.some((item) => item.title === title);
      if (!exists) {
        setTodoList([...todoList, newItem]);
      } else {
        alert("Todo with this title already exists");
      }
    }

    setTitle("");
    setDescription("");
    setDueDate(null);
    event.target.reset();
  };

  const handleEdit = (index) => {
    const item = todoList[index];
    setTitle(item.title);
    setDescription(item.description);
    setDueDate(dayjs(item.dueDate));
    setEditingIndex(index);
  };

  return (
    <main className="min-h-screen py-10 px-4 bg-gray-100">
      <div className="max-w-lg min-h-95 mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-4xl font-semibold mb-6 text-center text-gray-800">Todo List</h1>

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
              className={`w-30 py-2 rounded-lg text-white font-semibold ${editingIndex !== null
                ? "bg-green-600 hover:bg-green-700"
                : "bg-blue-600 hover:bg-blue-700"
                }`}
            >
              {editingIndex !== null ? "Update" : "Save"}
            </button>
          </div>

        </form>
      </div>

      <div className="max-w-2xl mx-auto mt-8">
        <ul className="space-y-4">
          {todoList.map((item, index) => (
            <TodoListItems
              key={index}
              item={item}
              indexNum={index}
              todoList={todoList}
              setTodoList={setTodoList}
              handleEdit={handleEdit}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}
