import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-900 gap-8">
      <div className="flex flex-col gap-4">
        {/* Day-0 Button */}
        <Link
          href="/day0"
          className="w-64 px-6 py-3 text-lg font-bold text-white
           bg-red-800 rounded-xl hover:bg-gray-600 transition flex justify-center"
        >
          Day-0 🔥
        </Link>

        {/* Day-1 Button */}
        <Link
          href="/day1"
          className="w-64 px-6 py-3 text-lg font-bold text-black
           bg-yellow-400 rounded-xl border-4 border-amber-500
            hover:bg-cyan-100 transition flex justify-center"
        >
          Day-1 🚀
        </Link>

        {/* Day-2 Button */}
        <Link
          href="/day2"
          className="w-64 px-6 py-3 text-lg font-bold text-white
           bg-fuchsia-300 border-4 border-pink-500 rounded-2xl 
           hover:shadow-[0_0_20px_#ec4899] transition flex justify-center"
        >
          Day-2 ✨
        </Link>

        {/* Day-3 Button */}
        <Link
          href="/day3"
          className="w-64 max-w-full px-6 py-3 text-lg font-bold text-white
             bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
             border-4 border-purple-400 rounded-2xl
             shadow-md
             flex justify-center items-center text-center
             transition-transform transition-colors duration-300 ease-out
             hover:scale-105 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500
             hover:shadow-lg"
        >
          Day-3 🌈
        </Link>

        {/* 🌟 Day-4 Button (Elegant Aqua-Blue Gradient with Glow) */}
        <Link
          href="/day4"
          className="w-64 max-w-full px-6 py-3 text-lg font-bold text-white
             bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600
             border-4 border-blue-400 rounded-2xl
             shadow-md
             flex justify-center items-center text-center
             transition-transform transition-colors duration-300 ease-out
             hover:scale-110 hover:from-blue-600 hover:via-sky-500 hover:to-cyan-400
             hover:shadow-[0_0_25px_#38bdf8]"
        >
          Day-4 💎
        </Link>
      </div>
    </div>
  );
}
