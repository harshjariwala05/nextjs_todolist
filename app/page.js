"use client";
import { useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";

export default function Home() {
  const [todoList, setTodoList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleDelete = (indexNum) => {
    const finalData = todoList.filter((_, index) => index !== indexNum);
    setTodoList(finalData);
  };

  return (
    <main className="min-h-screen py-10 px-4 bg-gray-100">
      <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-4xl font-semibold mb-6 text-center text-gray-800">Todo List</h1>
        <TodoForm
          todoList={todoList}
          setTodoList={setTodoList}
          editingIndex={editingIndex}
          setEditingIndex={setEditingIndex}
        />
      </div>

      <div className="max-w-2xl mx-auto mt-8">
        <ul className="space-y-4">
          {todoList.map((item, index) => (
            <TodoItem
              key={index}
              item={item}
              indexNum={index}
              todoList={todoList}
              setTodoList={setTodoList}
              handleEdit={() => handleEdit(index)}
              handleDelete={() => handleDelete(index)}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}
