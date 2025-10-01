"use client";

import React, { useState } from "react";

export default function Day3() {
  const [tasks, setTasks] = useState<{ id: number; name: string; completed: boolean }[]>([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState(0);
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (!name.trim()) return;
    setTasks([...tasks, { id: Date.now(), name, completed: status === 1 }]);
    setName("");
    setStatus(0);
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "notCompleted") return !t.completed;
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 p-4 sm:p-10">
      <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 sm:mb-10 text-gray-900 drop-shadow-lg text-center">
        🌈 Day 3 - Todo List
      </h1>

      {/* Input Section */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-3xl">
        <input
          type="text"
          placeholder="✍️ Enter Task Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 text-gray-950 p-3 sm:p-5 rounded-2xl border-2 border-amber-300 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 ease-out hover:shadow-lg hover:scale-105 text-sm sm:text-base"
        />
        <select
          value={status}
          onChange={(e) => setStatus(Number(e.target.value))}
          className="text-base sm:text-2xl p-3 sm:p-5 rounded-2xl border-2 border-pink-500 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 ease-out hover:shadow-lg hover:scale-105"
        >
          <option value={0}>❌ Not Completed</option>
          <option value={1}>✅ Completed</option>
        </select>
        <button
          onClick={addTask}
          className="text-base sm:text-2xl font-bold px-6 sm:px-8 py-3 sm:py-5 rounded-2xl border-2 border-purple-400 
                     bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg
                     transition-all duration-300 ease-out hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500
                     hover:shadow-xl hover:scale-105"
        >
          + Add
        </button>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 sm:mt-10">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-xl font-semibold rounded-xl transition-all duration-300 ${
            filter === "all"
              ? "bg-blue-500 text-white shadow-lg scale-105"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-xl font-semibold rounded-xl transition-all duration-300 ${
            filter === "completed"
              ? "bg-green-500 text-white shadow-lg scale-105"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter("notCompleted")}
          className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-xl font-semibold rounded-xl transition-all duration-300 ${
            filter === "notCompleted"
              ? "bg-red-500 text-white shadow-lg scale-105"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Not Completed
        </button>
      </div>

      {/* Task List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-12 w-full max-w-5xl">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className={`p-4 sm:p-6 rounded-2xl shadow-md border-2 font-bold text-base sm:text-2xl flex justify-between items-center
                        transition-all duration-500 ease-in-out
                        ${task.completed ? "bg-green-100 border-green-500 text-green-800" : "bg-red-100 border-red-500 text-red-800"}`}
          >
            <span
              onClick={() => toggleTask(task.id)}
              className="cursor-pointer flex-1 text-center hover:scale-105 transition-transform duration-300 break-words"
            >
              {task.name}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="ml-2 sm:ml-4 px-3 sm:px-4 py-2 sm:py-2 text-sm sm:text-lg rounded-xl font-semibold text-white 
                         bg-gradient-to-r from-red-500 to-pink-600 shadow-md
                         hover:from-pink-600 hover:to-red-600 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
