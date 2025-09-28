import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-black gap-4">
      <Link href="/day0">
        <button
          onClick={() => setMessage("Hello World")}
          className="px-6 py-3 text-lg font-bold text-white bg-gray-800 rounded-xl hover:bg-gray-600 transition"
        >
          Day-0 &quot;Project Initialise&quot;
        </button>
      </Link>

      
      {message && <p className="text-white text-xl font-semibold">{message}</p>}
    </div>
  );
}

