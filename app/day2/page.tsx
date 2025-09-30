"use client";

import { useState } from "react";

export default function Day3() {
  const [count, setCount] = useState(0);
  const [showCard, setShowCard] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white gap-8">
      
      {/* Counter Section */}
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl px-6 py-2 rounded-lg text-fuchsia-300 bg-white hover:bg-amber-50 transition font-bold">Counter: {count}</h1>
        <div className="flex gap-4">
            <button
  onClick={() => setCount(prev => (prev > 0 ? prev - 1 : 0))}
  disabled={count === 0}
  className={`px-6 py-2 rounded-lg font-bold transition 
    ${count === 0 
      ? "bg-indigo-300  hover:bg-red-400 " 
      : "bg-indigo-400 hover:bg-red-400"}`}
>
  ➖ Decrease
</button>


          <button
            onClick={() => setCount(count + 1)}
            className="px-6 py-2 rounded-lg bg-pink-500 hover:bg-indigo-300 transition font-bold"
          >
            ➕ Increase
          </button>
        </div>
      </div>

      {/* Show/Hide Card Section */}
      <div className="flex flex-col items-center gap-4">
        <button
          onClick={() => setShowCard(!showCard)}
          className="px-8 py-3 rounded-xl bg-amber-200 hover:bg-cyan-200 text-blue-600 transition font-bold"
        >
          {showCard ? "Hide Card" : "Show Card"}
        </button>

        {showCard && (
          <div className="p-6 w-80 rounded-2xl backdrop-blur-md bg-white/20 border border-white/30 shadow-xl">
            <h2 className="text-2xl font-bold mb-2">🌟 Glass Card</h2>
            <p className="text-sm text-gray-100">
              This is a glassmorphism styled card. You can show or hide it using the button above.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
