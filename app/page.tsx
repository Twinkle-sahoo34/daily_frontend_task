import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-900 gap-8">
      <div className="flex flex-col gap-4">
        {/* Day-0 Button */}
        <Link href="/day0" className="w-64 px-6 py-3 text-lg font-bold text-white bg-red-800 rounded-xl hover:bg-gray-600 transition flex justify-center">
          Day-0 🔥
        </Link>

        {/* Day-1 Button */}
        <Link href="/day1" className="w-64 px-6 py-3 text-lg font-bold text-black bg-yellow-400 rounded-xl border-4 border-amber-500 hover:bg-cyan-100 transition flex justify-center">
          Day-1 🚀
        </Link>

        {/* Day-2 Button */}
        <Link href="/day2" className="w-64 px-6 py-3 text-lg font-bold text-white bg-fuchsia-300 border-4 border-pink-500 rounded-2xl hover:shadow-[0_0_20px_#ec4899] transition flex justify-center">
          Day-2 ✨
        </Link>
      </div>
    </div>
  );
}
