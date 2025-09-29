type CardProps = {
  name: string;
  college: string;
  year: string;
};

export default function Card({ name, college, year }: CardProps) {
  return (
    <div className="border border-white p-4 rounded-lg w-60 m-2 bg-blue-200 text-black font-bold text-left 
                    transition-colors duration-300 hover:bg-pink-500">
      <p>Name - {name}</p>
      <p>College - {college}</p>
      <p>Year - {year}</p>
    </div>
  );
}
