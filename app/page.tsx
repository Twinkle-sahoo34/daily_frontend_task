import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <Link href="/day0">
        <button className="px-6 py-3 text-lg font-bold text-white bg-gray-800 rounded-xl hover:bg-gray-600 transition">
          Day-0 &quot;Project Initialise&quot;
        </button>
      </Link>
    </div>
  );
}
