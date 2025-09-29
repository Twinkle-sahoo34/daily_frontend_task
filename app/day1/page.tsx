import Card from "../components/Card";


export default function Day1() {
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
    <div className="min-h-screen bg-black-100 p-6">
      <h1 className="text-3xl font-bold text-white-800 text-center mb-6">🎓 Student Cards</h1>
      <div className="flex flex-wrap justify-center">
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
