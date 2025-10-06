import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-[#1a1f2b] text-white p-6">
      {/* Header */}
      <header className="text-3xl md:text-4xl font-extrabold mb-10 tracking-wide text-center text-white/90 drop-shadow-lg sticky top-0 bg-[#1a1f2b]/80 backdrop-blur-md py-4 w-full z-10">
        🚀 30 Days of Next.js Challenge
      </header>

      {/* Outer Scrollable Box */}
      <div
        className="w-[90%] sm:w-[70%] md:w-[50%] max-h-[70vh]
        overflow-y-auto scroll-smooth relative
        flex flex-col gap-6 items-center justify-start
        bg-[#23283a]/60 backdrop-blur-lg border border-white/10 rounded-3xl p-8
        shadow-[10px_10px_30px_#0f111a,-10px_-10px_30px_#2b3145]
        scrollbar-thin scrollbar-thumb-[#4f5b8a]/50 scrollbar-track-transparent
        hover:scrollbar-thumb-[#6b7ac7]/70 transition-all duration-500
        before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-6
        before:bg-gradient-to-b before:from-[#23283a]/70 before:to-transparent
        after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-6
        after:bg-gradient-to-t after:from-[#23283a]/70 after:to-transparent
        "
      >
        {/* Day-0 Button */}
        <Link
          href="/day0"
          className="w-64 px-6 py-3 text-lg font-bold text-white
           bg-red-800/40 backdrop-blur-md border border-red-500/40
           rounded-xl hover:bg-red-700/60 transition flex justify-center
           shadow-[8px_8px_16px_#111827,-8px_-8px_16px_#2d3748]"
        >
          Day-0 🔥
        </Link>

        {/* Day-1 Button */}
        <Link
          href="/day1"
          className="w-64 px-6 py-3 text-lg font-bold text-black
           bg-yellow-400/40 backdrop-blur-md border border-yellow-300/40
           rounded-xl hover:bg-yellow-300/60 transition flex justify-center
           shadow-[8px_8px_16px_#111827,-8px_-8px_16px_#2d3748]"
        >
          Day-1 🚀
        </Link>

        {/* Day-2 Button */}
        <Link
          href="/day2"
          className="w-64 px-6 py-3 text-lg font-bold text-white
           bg-fuchsia-300/40 backdrop-blur-md border border-pink-400/40
           rounded-2xl hover:shadow-[0_0_20px_#ec4899] transition flex justify-center
           shadow-[8px_8px_16px_#111827,-8px_-8px_16px_#2d3748]"
        >
          Day-2 ✨
        </Link>

        {/* Day-3 Button */}
        <Link
          href="/day3"
          className="w-64 px-6 py-3 text-lg font-bold text-white
             bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-pink-500/40
             backdrop-blur-md border border-purple-400/40 rounded-2xl
             shadow-[8px_8px_16px_#111827,-8px_-8px_16px_#2d3748]
             flex justify-center items-center text-center
             transition-transform transition-colors duration-300 ease-out
             hover:scale-105 hover:from-pink-500/50 hover:via-purple-500/50 hover:to-indigo-500/50
             hover:shadow-lg"
        >
          Day-3 🌈
        </Link>

        {/* Day-4 Button */}
        <Link
          href="/day4"
          className="w-64 px-6 py-3 text-lg font-bold text-white
             bg-gradient-to-r from-cyan-400/40 via-sky-500/40 to-blue-600/40
             backdrop-blur-md border border-blue-400/40 rounded-2xl
             shadow-[8px_8px_16px_#111827,-8px_-8px_16px_#2d3748]
             flex justify-center items-center text-center
             transition-transform transition-colors duration-300 ease-out
             hover:scale-110 hover:from-blue-600/50 hover:via-sky-500/50 hover:to-cyan-400/50
             hover:shadow-[0_0_25px_#38bdf8]"
        >
          Day-4 💎
        </Link>

        {/* Day-5 Button */}
        <Link
          href="/day5"
          className="w-64 px-6 py-3 text-lg font-bold text-white
             bg-green-400/40 backdrop-blur-md border border-green-300/40
             rounded-2xl shadow-[8px_8px_16px_#111827,-8px_-8px_16px_#2d3748]
             flex justify-center items-center text-center
             transition-transform duration-300 ease-out
             hover:scale-105 hover:bg-green-400/60 hover:shadow-[0_0_25px_#4ade80]"
        >
          Day-5 🌿
        </Link>
      </div>
    </div>
  );
}
