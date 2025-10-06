"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sun, Moon, Shuffle, Home } from "lucide-react";

export default function Day5() {
  const [darkMode, setDarkMode] = useState(true);
  const [images] = useState([
    "/image/p1.jpg",
    "/image/p2.jpg",
    "/image/p3.jpg",
    "/image/p4.jpg",
    "/image/p5.jpg",
    "/image/p6.jpg",
    "/image/p7.jpg",
    "/image/p8.jpg",
    "/image/p9.jpg",
  ]);
  const [gridStyle, setGridStyle] = useState("grid-cols-3");

  // Only change grid style without shuffling images
  const changeGrid = () => {
    const grids = ["grid-cols-2", "grid-cols-3", "grid-cols-4"];
    const randomGrid = grids[Math.floor(Math.random() * grids.length)];
    setGridStyle(randomGrid);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-700 ${
        darkMode
          ? "bg-gradient-to-br from-[#1a1f2b] via-[#222b3b] to-[#1f2937] text-white"
          : "bg-gradient-to-br from-[#e0f2ff] via-[#f0f9ff] to-[#e0e7ff] text-gray-900"
      } flex flex-col items-center justify-start py-8 px-6`}
    >
      {/* Header with buttons */}
      <div className="w-full flex justify-between items-center mb-10">
        {/* Home Button */}
        <Link
          href="/"
          className="p-3 rounded-2xl backdrop-blur-md border border-white/20 bg-white/10 hover:bg-white/20 shadow-md transition"
        >
          <Home size={22} />
        </Link>

        <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide text-center flex-1">
          🖼️ Image Portfolio
        </h1>

        {/* Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-3 rounded-2xl backdrop-blur-md border border-white/20 bg-white/10 hover:bg-white/20 shadow-md transition"
        >
          {darkMode ? <Sun size={22} /> : <Moon size={22} />}
        </button>
      </div>

      {/* Shuffle Button (Grid Change) */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={changeGrid}
        className={`flex items-center gap-2 px-6 py-3 mb-8 font-semibold rounded-2xl shadow-lg border transition backdrop-blur-lg
        ${
          darkMode
            ? "bg-white/10 border-white/20 hover:bg-white/20"
            : "bg-gray-200/60 border-gray-300 hover:bg-gray-300/80"
        }`}
      >
        <Shuffle size={20} />
        Change Grid
      </motion.button>

      {/* Image Grid */}
      <motion.div
        layout
        className={`grid ${gridStyle} gap-6 w-full max-w-6xl transition-all duration-700`}
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            layout
            whileHover={{ scale: 1.05 }}
            className={`relative overflow-hidden rounded-3xl shadow-xl backdrop-blur-lg border transition-all duration-500
            ${
              darkMode
                ? "bg-white/10 border-white/10 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                : "bg-white/70 border-gray-200 hover:shadow-[0_0_25px_rgba(0,0,0,0.15)]"
            }`}
          >
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
