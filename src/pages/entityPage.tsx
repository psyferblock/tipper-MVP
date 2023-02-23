import AboutUsSection from "@/components/AboutUsSection";
import ContactUsSection from "@/components/ContactUsSection";
import EntityPageInfoLeftContainer from "@/components/EntityPageInfoLeftContainer";
import MenuItemCard from "@/components/MenuItemCard";
import MenuNavigation from "@/components/MenuNavigation";
import OurInventorySection from "@/components/OurInventorySection";
import OurMenuSection from "@/components/OurMenuSection";
import { useState } from "react";

export default function Home() {
  // BOOLEAN TO DETERMINE WHETHER IT IS ADD HIGHLIGHT OR SHARE BUTTON NEXT TO HIGHLIGHTS
  const userIsOwner = useState(false);

  return (
    <>
      <div className="flex items-center justify-between sm:hidden h-14 px-3 bg-gray-300 w-full z-50 fixed text-2xl font-bold">
        <p>Entity Name</p>
        <button className=" h-fit rounded-3xl mt-1 text-blue-500  text-xs">
          Manage Entity
        </button>
      </div>
      <div className="h-14 sm:h-0"></div>

      <div className=" sm:h-fit sm:min-h-screen px-3 sm:px-12 py-3 sm:py-8">
        <div className="hidden sm:flex items-center justify-between pb-5 sm:pb-9">
          <p className=" font-semibold text-2xl ">Entity Name</p>
          <button className="sm:w-32 sm:h-9 h-fit rounded-3xl sm:border-2 sm:border-gray-500 text-blue-500 sm:text-gray-500 text-xs">
            Manage Entity
          </button>
        </div>
        <div className="sm:flex sm:flex-row flex flex-col-reverse sm:space-x-5 sm:h-[496px] sm:mb-8">
          <EntityPageInfoLeftContainer />

          {/* EVERYTHING ON THE RIGHT OF THE LEFT COLUMN */}
          <div className="sm:h-[496px] sm:flex sm:flex-col justify-between sm:w-1/4 sm:grow">
            {/*  COVER PHOTOS CONTAINER */}
            <div
              className="h-40 sm:h-[360px] sm:w-full bg-gray-300 rounded-lg drop-shadow-lg sm:px-6"
              style={{
                backgroundImage: `url(https://cdn.ldsliving.com/dims4/default/2040800/2147483647/strip/true/crop/640x395+0+0/resize/640x395!/format/webp/quality/90/?url=http%3A%2F%2Flds-living-brightspot.s3.amazonaws.com%2F7c%2F30%2F864e82a22a48241f8a28bc7abb4d%2F42088.jpg)`,
              }}
            ></div>
            {/* HIGHLIGHTS CONTAINER */}
            <div className="flex sm:space-x-3">
              <div className="h-fit rounded-lg py-2 sm:drop-shadow-lg text-xs grid grid-rows-1 grid-flow-col gap-2 sm:gap-6 overflow-x-auto">
                <button className="drop-shadow-lg sm:drop-shadow-none h-[68px] sm:h-[116px] w-[68px] sm:w-[116px] rounded-full bg-white font-semibold ">
                  Events
                </button>
                <button className="drop-shadow-lg sm:drop-shadow-none h-[68px] sm:h-[116px] w-[68px] sm:w-[116px] rounded-full bg-white font-semibold ">
                  Discounts
                </button>
                <button className="drop-shadow-lg sm:drop-shadow-none h-[68px] sm:h-[116px] w-[68px] sm:w-[116px] rounded-full bg-white font-semibold ">
                  Our Cookies
                </button>
                <button className="drop-shadow-lg sm:drop-shadow-none h-[68px] sm:h-[116px] w-[68px] sm:w-[116px] rounded-full bg-white font-semibold ">
                  Happy Customers
                </button>
                <button className="drop-shadow-lg sm:drop-shadow-none h-[68px] sm:h-[116px] w-[68px] sm:w-[116px] rounded-full bg-white font-semibold ">
                  Happy Customers
                </button>
                <button className="drop-shadow-lg sm:drop-shadow-none h-[68px] sm:h-[116px] w-[68px] sm:w-[116px] rounded-full bg-white font-semibold ">
                  Happy Customers
                </button>
                <button className="drop-shadow-lg sm:drop-shadow-none h-[68px] sm:h-[116px] w-[68px] sm:w-[116px] rounded-full bg-white font-semibold ">
                  Happy Customers
                </button>
                <button className="drop-shadow-lg sm:drop-shadow-none h-[68px] sm:h-[116px] w-[68px] sm:w-[116px] rounded-full bg-white font-semibold ">
                  Happy Customers
                </button>
              </div>
              <div className="h-fit sm:py-2">
                {/* ADD HIGHLIGHT BUTTON IF USER IS ENTITY OWNER */}
                {/* <button className="h-[116px] w-[116px] py-10 rounded-full bg-white font-semibold pb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-10 h-7 text-blue-500 mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <p className="text-xs text-blue-500 pb-5">Add Highlight</p>
              </button> */}
                <div className="sm:h-[116px] ml-1 sm:ml-0 sm:w-[116px] sm:py-3 rounded-lg bg-white font-semibold text-xs border-2 border-black">
                  <button className="flex items-center space-x-1 pl-2 text-[#128c7e] hover:text-green-500 h-1/2">
                    {/* WHATSAPP LOGO */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="w-5 h-5 "
                    >
                      <path
                        fill="currentColor"
                        d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                      />
                    </svg>
                    <p> Share page</p>
                  </button>
                  <button className="flex items-center text-blue-600 hover:text-purple-500 h-1/2 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-9 h-9 pl-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                      />
                    </svg>
                    <p className="pr-3">Copy page link</p>
                  </button>
                </div>
              </div>
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
        <ContactUsSection />

        {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* ABOUT US SECTION */}
        <AboutUsSection />
      </div>
    </>
  );
}
