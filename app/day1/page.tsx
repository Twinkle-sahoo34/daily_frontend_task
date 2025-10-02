"use client";

import Card from "../components/Card";
import { useRouter } from "next/navigation"; // ✅ Import router

export default function Day1() {
  const router = useRouter(); // ✅ Initialize router

  const students = [
    { name:  "Twinkle", college: "SOA University", year: "4th Year" },
    { name: "Preeti", college: "Lovely Institute", year: "3rd Year" },
    { name: "Yanwi", college: "Parul University", year: "2nd Year" },
    { name: "Sweta", college: "C V Raman ", year: "1st Year" },
    { name: "Anjali", college: "IIT Bombay", year: "4th Year" },
    { name: "Riya", college: "MIT Pune", year: "3rd Year" },
    { name: "Sonal", college: "IIT Delhi", year: "2nd Year" },
    { name: "Nikita", college: "IIT Madras", year: "1st Year" },
    { name: "Pooja", college: "IIT Kanpur", year: "4th Year" },
    { name: "Mona", college: "IIT Kharagpur", year: "3rd Year" },
  ];

  return (
    <div className="relative min-h-screen bg-black p-6">
      
      {/* Back Button */}
      <button
        onClick={() => router.push("/")}
        className="absolute top-4 left-4 px-4 py-2 rounded-xl font-semibold bg-blue-600 text-white shadow-lg
                   hover:bg-blue-500 hover:shadow-xl transition-all duration-300 cursor-pointer"
      >
        🔙 Back
      </button>

      <h1 className="text-3xl font-bold text-white text-center mb-6">🎓 Student Cards</h1>
      
      <div className="flex flex-wrap justify-center gap-4">
        {students.map((student, index) => (
          <Card
            key={index}
            name={student.name}
            college={student.college}
            year={student.year}
          />
        ))}
      </div>
    </div>
  );
}
