"use client";

import { useRouter } from "next/navigation";

export default function Day0() {
  const router = useRouter(); // Initialize router

  return (
    <div className="relative flex h-screen items-center justify-center bg-black">
      
      {/* Back Button */}
      <button
        onClick={() => router.push("/")}
        className="absolute top-4 left-4 px-4 py-2 rounded-xl font-semibold bg-blue-600 text-white shadow-lg
                   hover:bg-blue-500 hover:shadow-xl transition-all duration-300 cursor-pointer"
      >
        🔙 Back
      </button>

      <h1 className="text-4xl font-bold text-white">Hello World</h1>
    </div>
  );
}
