"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Day3() {
  const [tasks, setTasks] = useState<{ id: number; name: string; completed: boolean }[]>([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState(0);
  const [filter, setFilter] = useState("all");
  const [darkMode, setDarkMode] = useState(true);

  const router = useRouter();

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
    <div
      className={`relative min-h-screen flex flex-col items-center p-4 sm:p-10 transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 text-white"
          : "bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 text-gray-900"
      }`}
    >
      {/* Back Button */}
      <button
        onClick={() => router.push("/")}
        className="absolute top-2 left-2 sm:top-4 sm:left-4 px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-xl font-semibold bg-blue-600 text-white shadow-lg
                   hover:bg-blue-500 hover:shadow-xl transition-all duration-300 cursor-pointer z-50"
      >
        🔙
      </button>

      {/* Dark/Light Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-2 right-2 sm:top-3 sm:right-3 px-2 py-1 sm:px-3 sm:py-1 text-sm sm:text-base rounded-xl font-semibold bg-gray-700 text-white shadow-lime-50
                   hover:bg-gray-600 transition-all duration-300 cursor-pointer z-50"
      >
        {darkMode ? "🌞" : "🌙 "}
      </button>

      {/* Header */}
      <h1 className="text-2xl sm:text-5xl font-extrabold mb-6 sm:mb-10 text-center drop-shadow-lg">
        🌈 Day 3 - Todo List
      </h1>

      {/* Input Section */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 w-full max-w-3xl">
        <input
          type="text"
          placeholder="✍️ Enter Task Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`flex-1 p-3 sm:p-5 rounded-2xl border-2 shadow-inner focus:outline-none focus:ring-2 transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm sm:text-base ${
            darkMode
              ? "text-white border-indigo-400 bg-gray-800 focus:ring-purple-400"
              : "text-gray-900 border-indigo-300 bg-white focus:ring-blue-400"
          }`}
        />

        <select
          value={status}
          onChange={(e) => setStatus(Number(e.target.value))}
          className={`text-sm sm:text-2xl p-3 sm:p-5 rounded-2xl border-2 shadow-inner focus:outline-none focus:ring-2 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer ${
            darkMode
              ? "text-white border-purple-400 bg-gray-800 focus:ring-indigo-400"
              : "text-gray-900 border-purple-300 bg-white focus:ring-indigo-400"
          }`}
        >
          <option value={0} className={darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}>
            ❌ Not Completed
          </option>
          <option value={1} className={darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}>
            ✅ Completed
          </option>
        </select>

        <button
          onClick={addTask}
          className={`text-sm sm:text-2xl font-bold px-4 sm:px-8 py-2 sm:py-5 rounded-2xl border-2 shadow-lg transition-all duration-300 ease-out hover:shadow-xl hover:scale-105 cursor-pointer ${
            darkMode
              ? "border-purple-400 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600"
              : "border-purple-300 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-gray-900 hover:from-indigo-300 hover:via-purple-300 hover:to-pink-300"
          }`}
        >
          + Add
        </button>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-6 sm:mt-10">
        {["all", "completed", "notCompleted"].map((f) => {
          const isActive = filter === f;
          const colors = {
            all: "blue",
            completed: "green",
            notCompleted: "red",
          };
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 sm:px-6 py-1 sm:py-2 text-sm sm:text-xl font-semibold rounded-xl transition-all duration-300 cursor-pointer ${
                isActive
                  ? `bg-${colors}-600 text-white shadow-lg scale-105`
                  : darkMode
                  ? "bg-gray-700 text-white"
                  : "bg-gray-300 text-gray-900"
              }`}
            >
              {f === "all" ? "All" : f === "completed" ? "Completed" : "Not Completed"}
            </button>
          );
        })}
      </div>

      {/* Task List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mt-6 sm:mt-12 w-full max-w-5xl">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className={`p-4 sm:p-6 rounded-2xl shadow-md border-2 font-bold text-base sm:text-2xl flex justify-between items-center transition-all duration-500 ease-in-out ${
              task.completed
                ? darkMode
                  ? "bg-green-800 border-green-500 text-white"
                  : "bg-green-100 border-green-500 text-gray-900"
                : darkMode
                ? "bg-red-800 border-red-500 text-white"
                : "bg-red-100 border-red-500 text-gray-900"
            }`}
          >
            <span
              onClick={() => toggleTask(task.id)}
              className="cursor-pointer flex-1 text-center hover:scale-105 transition-transform duration-300 break-words"
            >
              {task.name}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className={`ml-2 sm:ml-4 px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-lg rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer ${
                darkMode
                  ? "text-white bg-gradient-to-r from-red-500 to-pink-600 hover:from-pink-600 hover:to-red-600"
                  : "text-gray-900 bg-gradient-to-r from-red-300 to-pink-300 hover:from-pink-300 hover:to-red-300"
              }`}
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
