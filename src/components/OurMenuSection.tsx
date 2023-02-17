import MenuItemCard from "./MenuItemCard";
import MenuNavigation from "./MenuNavigation";

export default function Home() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="text-center my-5 pb-4">
        <p className="font-bold text-xl">Our Menu</p>
        <p className="text-xs font-semibold">(Rate: 45,000LBP)</p>
      </div>
      <div className="flex space-x-1">
        <div className="w-1/6">
          <MenuNavigation />
        </div>
        <div className="grid grid-rows-2 grid-flow-col gap-5 pb-5 overflow-x-auto">
          <MenuItemCard />
          <MenuItemCard />
          <MenuItemCard />
          <MenuItemCard />
          <MenuItemCard />
          <MenuItemCard />
          <MenuItemCard />
          <MenuItemCard />
          <MenuItemCard />
          <MenuItemCard />
          <MenuItemCard />
        </div>
      </div>
      {/* LEFT RIGHT NAVIGATION BUTTON */}
      <div className="flex justify-end space-x-1 pr-1">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
