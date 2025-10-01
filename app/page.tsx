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
{/* Day-3 Button (Floating Gradient with Shadow) */}
<div className="flex flex-col items-center justify-center w-full flex-wrap gap-4 px-4">
  {/* Day-3 Button */}
  <Link
    href="/day3"
    className="w-full max-w-xs sm:w-64 px-4 sm:px-6 py-3 sm:py-3 text-base sm:text-lg font-bold text-white rounded-xl border-2 border-purple-400 
               bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md
               transition-all duration-300 ease-out
               hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500
               hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)]
               flex justify-center hover:scale-105 text-center break-words"
  >
    Day-3 🌈
  </Link>
</div>




      </div>
    </div>
  );
}
