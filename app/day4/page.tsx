"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center text-center justify-center bg-[#f0f4f8] p-6">
      {/* Home Button - Top Left */}
      <Link
        href="/"
        className="absolute top-6 left-6 p-3 rounded-2xl backdrop-blur-md border border-orange-200/50 bg-orange-100/30 hover:bg-orange-200/50 shadow-md transition"
      >
        <Home size={22} className="text-orange-700" />
      </Link>

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-black drop-shadow-lg"
      >
        Hello 👋
      </motion.h1>

      {/* Animated GIF */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative w-64 md:w-80 h-64 md:h-80 mt-6"
      >
        <Image
          src="https://media1.tenor.com/images/a07dda215321801bbcead56c2ecec527/tenor.gif?itemid=16334662"
          alt="Animation"
          fill
          className="rounded-2xl shadow-xl object-cover"
          priority
        />
      </motion.div>
    </div>
  );
}
