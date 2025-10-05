"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Day4Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col items-center justify-start
                    bg-blue-100 p-6">
      {/* Navbar */}
      <nav className="flex items-center justify-between w-full max-w-5xl px-8 py-4
                      bg-blue-200/50 backdrop-blur-md rounded-2xl
                      border border-blue-300 shadow-md mb-8">
        <h1 className="text-2xl font-bold tracking-wide text-pink-600">🌟 Day 4</h1>
        <div className="flex gap-6">
          <Link
            href="/day4"
            className={`text-lg font-medium hover:text-pink-400 ${
              pathname === "/day4" ? "text-pink-500" : "text-blue-700"
            }`}
          >
            Home
          </Link>
          <Link
            href="/day4/form"
            className={`text-lg font-medium hover:text-blue-500 ${
              pathname === "/day4/form" ? "text-pink-500" : "text-blue-700"
            }`}
          >
            Form
          </Link>
        </div>
      </nav>

      {/* Page Content */}
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 w-full max-w-5xl flex flex-col items-center justify-start"
      >
        {children}
      </motion.main>
    </div>
  );
}
