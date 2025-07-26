"use client";
import { useState } from "react";
import TodoListItems from "../components/TodoList";
import TodoForm from "../components/TodoForm/index";
import TodoList from "../components/TodoList";

export default function Home({ }) {
  const [todoList, setTodoList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

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
    setEditingIndex(index);
  };

  const handleDelete = (indexNum) => {
    const finalData = todoList.filter((_, index) => index !== indexNum);
    setTodoList(finalData);
  };

  return (
    <main className="min-h-screen py-10 px-4 bg-gray-100">
      <div className="max-w-lg min-h-95 mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-4xl font-semibold mb-6 text-center text-gray-800">Todo List</h1>
        <TodoForm todoList={todoList} setTodoList={setTodoList} editingIndex={editingIndex} setEditingIndex={setEditingIndex} saveTodoList={saveTodoList} />
      </div>

      <div className="max-w-2xl mx-auto mt-8">
        <ul className="space-y-4">
          {todoList.map((item, index) => (
            <TodoList
              key={index}
              item={item}
              indexNum={index}
              todoList={todoList}
              setTodoList={setTodoList}
              handleEdit={handleEdit}
              handleDelete={() => handleDelete(index)}
            />
          ))}
        </ul>


      </div>
    </main>
  );
}
