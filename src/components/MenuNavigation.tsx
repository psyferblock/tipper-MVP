export default function Home() {
  return (
    <>
      <div className="flex flex-col font-semibold text-base w-fit text-gray-400 space-y-4">
        <p className="border-transparent  border-l-gray-400 border-2  hover:border-l-blue-600 hover:text-blue-600 hover:border-2 hover:text-xl pl-5">
          Breakfast
        </p>
        <p className="border-transparent border-2 border-l-gray-400  hover:border-l-blue-600 hover:text-blue-600  hover:text-xl pl-5">
          Lunch
        </p>
        <p className="border-transparent border-l-gray-400 border-2 hover:border-l-blue-600 hover:text-blue-600  hover:text-xl pl-5">
          Dinner
        </p>
        <p className="border-transparent border-l-gray-400 border-2 hover:border-l-blue-600 hover:text-blue-600 hover:text-xl pl-5">
          Desert
        </p>
        <p className="border-transparent border-l-gray-400 border-2 hover:border-l-blue-600 hover:text-blue-600 hover:text-xl pl-5">
          Drinks
        </p>
        <p className="border-transparent border-l-gray-400 border-2 hover:border-l-blue-600 hover:text-blue-600 hover:text-xl pl-5">
          Our Specialties
        </p>
      </div>
    </>
  );
}
