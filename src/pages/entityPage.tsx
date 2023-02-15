import EntityPageInfoLeftContainer from "@/components/EntityPageInfoLeftContainer";
import MenuItemCard from "@/components/MenuItemCard";
import MenuNavigation from "@/components/MenuNavigation";
import OurInventorySection from "@/components/OurInventorySection";
import OurMenuSection from "@/components/OurMenuSection";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-between pb-9">
        <p className=" font-semibold text-2xl ">Entity Name</p>
        <button className="w-32 h-9 rounded-3xl border-2 border-gray-500 text-gray-500 text-xs">
          Manage Entity
        </button>
      </div>
      <div className="flex space-x-5 h-[496px] mb-8">
        <EntityPageInfoLeftContainer />

        {/* EVERYTHING ON THE RIGHT OF THE LEFT COLUMN */}
        <div className="h-[496px] flex flex-col justify-between w-1/4 grow">
          {/*  COVER PHOTOS CONTAINER */}
          <div className="h-[360px] w-full bg-gray-300 rounded-lg drop-shadow-lg px-6"></div>
          {/* HIGHLIGHTS CONTAINER */}
          <div className="h-1/4 rounded-lg py-2 drop-shadow-lg text-xs grid grid-rows-1 grid-flow-col gap-8 overflow-x-auto">
            <button className="h-[116px] w-[116px] rounded-full bg-white font-semibold ">
              Events
            </button>
            <button className="h-[116px] w-[116px] rounded-full bg-white font-semibold">
              Discounts
            </button>
            <button className="h-[116px] w-[116px] rounded-full bg-white font-semibold">
              Our Cookies
            </button>
            <button className="h-[116px] w-[116px] rounded-full bg-white font-semibold">
              Happy Customers
            </button>
            <button className="h-[116px] w-[116px] rounded-full bg-white font-semibold">
              Happy Customers
            </button>
            <button className="h-[116px] w-[116px] rounded-full bg-white font-semibold">
              Happy Customers
            </button>
            <button className="h-[116px] w-[116px] rounded-full bg-white font-semibold">
              Happy Customers
            </button>
            <button className="h-[116px] w-[116px] rounded-full bg-white font-semibold">
              Happy Customers
            </button>
            <button className="h-[116px] w-[116px] py-10 rounded-full bg-white font-semibold flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-10 h-10 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* OUR MENU SECTION */}
      <OurMenuSection />

      {/* OUR INVENTORY SECTION */}
      <OurInventorySection />

      {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* GET IN TOUCH WITH US SECTION */}
      <div></div>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* ABOUT US SECTION */}
      <div></div>
    </>
  );
}
