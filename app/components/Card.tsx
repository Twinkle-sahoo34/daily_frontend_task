type CardProps = {
  name: string;
  college: string;
  year: string;
};

export default function Card({ name, college, year }: CardProps) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 m-4 w-72 text-center hover:scale-105 transition">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600">{college}</p>
      <p className="text-sm text-gray-500">{year}</p>
    </div>
  );
}
