"use client"; // required for useState

import React, { useState } from "react";

export default function Day3() {
  const [tasks, setTasks] = useState<{ id: number; name: string; completed: boolean }[]>([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState(0);
  const [filter, setFilter] = useState("all");

  // Add Task
  const addTask = () => {
    if (!name.trim()) return;
    setTasks([...tasks, { id: Date.now(), name, completed: status === 1 }]);
    setName("");
    setStatus(0);
  };

  // Toggle Task Completion
  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // Delete Task
  const deleteTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // Filtered Tasks
  const filteredTasks = tasks.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "notCompleted") return !t.completed;
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 p-10">
      <h1 className="text-5xl font-extrabold mb-10 text-900 drop-shadow-lg ">🌈 Day 3 - Todo List</h1>

      {/* Input Section */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-3xl">
        <input
          type="text"
          placeholder="✍️ Enter Task Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 text-gray-950 p-5 rounded-2xl border-2 border-amber-300 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 ease-out hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:scale-110"
        />
        <select
          value={status}
          onChange={(e) => setStatus(Number(e.target.value))}
          className="text-2xl p-5 rounded-2xl border-2 border-pink-500 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 ease-out hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:scale-110"
        >
          <option value={0}>❌ Not Completed</option>
          <option value={1}>✅ Completed</option>
        </select>
        <button
          onClick={addTask}
          className="text-2xl font-bold px-8 py-5 rounded-2xl border-2 border-purple-400 
                     bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg
                     transition-all duration-300 ease-out
                     hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500
                     hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:scale-110"
        >
          + Add
        </button>
      </div>

      {/* Filter */}
      <div className="flex gap-6 mt-10">
        <button
          onClick={() => setFilter("all")}
          className={`px-6 py-3 text-xl font-semibold rounded-xl transition-all duration-300 ${
            filter === "all"
              ? "bg-blue-500 text-white shadow-lg scale-105"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`px-6 py-3 text-xl font-semibold rounded-xl transition-all duration-300 ${
            filter === "completed"
              ? "bg-green-500 text-white shadow-lg scale-105"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter("notCompleted")}
          className={`px-6 py-3 text-xl font-semibold rounded-xl transition-all duration-300 ${
            filter === "notCompleted"
              ? "bg-red-500 text-white shadow-lg scale-105"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Not Completed
        </button>
      </div>

      {/* Task List */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full max-w-5xl">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className={`p-6 rounded-2xl shadow-md border-2 font-bold text-2xl flex justify-between items-center
                        transition-all duration-500 ease-in-out
                        ${
                          task.completed
                            ? "bg-green-100 border-green-500 text-green-800"
                            : "bg-red-100 border-red-500 text-red-800"
                        }`}
          >
            {/* Clicking the name toggles task */}
            <span
              onClick={() => toggleTask(task.id)}
              className="cursor-pointer flex-1 text-center hover:scale-110 transition-transform duration-300"
            >
              {task.name}
            </span>

            {/* Delete button */}
            <button
              onClick={() => deleteTask(task.id)}
              className="ml-4 px-4 py-2 text-lg rounded-xl font-semibold text-white 
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
