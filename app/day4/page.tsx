"use client";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center text-center space-y-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-black drop-shadow-lg"
      >
        Hello 👋
      </motion.h1>
      

      {/* Simple animated gif */}
      <motion.img
        src="https://media1.tenor.com/images/a07dda215321801bbcead56c2ecec527/tenor.gif?itemid=16334662"
        alt="Animation"
        className="w-64 md:w-80 rounded-2xl shadow-xl"
        whileHover={{ scale: 1.05 }}
      />
    </div>
  );
}
