export default function Home() {
  return (
    <>
      <div className="flex flex-col font-semibold text-base w-44 text-gray-400 space-y-4">
        <button className="flex justify-start pl-5 border-transparent  border-l-gray-400 border-2  hover:border-l-blue-600 hover:text-blue-600 hover:border-2 hover:text-xl ">
          Breakfast
        </button>
        <button className="flex justify-start pl-5 border-transparent border-2 border-l-gray-400  hover:border-l-blue-600 hover:text-blue-600  hover:text-xl ">
          Lunch
        </button>
        <button className="flex justify-start pl-5 border-transparent border-l-gray-400 border-2 hover:border-l-blue-600 hover:text-blue-600  hover:text-xl ">
          Dinner
        </button>
        <button className="flex justify-start pl-5 border-transparent border-l-gray-400 border-2 hover:border-l-blue-600 hover:text-blue-600 hover:text-xl ">
          Desert
        </button>
        <button className="flex justify-start pl-5 border-transparent border-l-gray-400 border-2 hover:border-l-blue-600 hover:text-blue-600 hover:text-xl ">
          Drinks
        </button>
        <button className="flex justify-start pl-5 border-transparent border-l-gray-400 border-2 hover:border-l-blue-600 hover:text-blue-600 hover:text-xl ">
          Our Specialties
        </button>
      </div>
    </>
  );
}
