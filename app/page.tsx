import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <div className="flex flex-col gap-4">
        {/* Day-0 Button */}
        <Link href="/day0">
          <button className="w-64 px-6 py-3 text-lg font-bold text-white bg-gray-800 rounded-xl hover:bg-gray-600 transition">
            {"Day-0 \"Project Initialise\""}
          </button>
        </Link>

        {/* Day-1 Button */}
        <Link href="/day1">
          <button className="w-64 px-6 py-3 text-lg font-bold text-black bg-yellow-400 rounded-xl hover:bg-yellow-300 transition">
            {"Day-1 🚀"}
          </button>
        </Link>
      </div>
    </div>
  );
}
