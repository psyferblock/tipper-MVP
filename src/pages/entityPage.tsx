export default function Home() {
  return (
    <>
      <div className="flex items-center justify-between pb-9">
        <p className=" font-semibold text-2xl ">Entity Name</p>
        <button className="w-32 h-9 rounded-3xl border-2 border-gray-500 text-gray-500 text-xs">
          Manage Entity
        </button>
      </div>
      <div className="flex space-x-5 h-[466px] mb-8">
        {/* LEFT CONTAINER */}
        <div className=" bg-white rounded-lg py-4 drop-shadow-xl px-6 w-[307px]">
          <div className="font-semibold flex flex-col space-y-3">
            {/* ENTITY TAGS DIV */}
            <div>
              <p>Entity Tags</p>
              <div className="px-1 flex flex-wrap items-center space-y-2 space-x-2">
                <div className="w-fit  flex bg-gray-200 rounded-xl text-black text-xs px-4 py-1 drop-shadow-lg">
                  <p>Homemade</p>
                </div>
                <div className="w-fit  flex bg-gray-200 rounded-xl text-black text-xs px-4 py-1 drop-shadow-lg">
                  <p>Lebanese</p>
                </div>
                <div className="w-fit  flex bg-gray-200 rounded-xl text-black text-xs px-4 py-1 drop-shadow-lg">
                  <p>Mouneh</p>
                </div>
                <div className="w-fit  flex bg-gray-200 rounded-xl text-black text-xs px-4 py-1 drop-shadow-lg">
                  <p>Vegetarian</p>
                </div>
              </div>
            </div>
            {/* OPENING HOURS DIV */}
            <div>
              <p className="pb-0.5">Opening Hours</p>
              <div className="px-1 divide-y">
                <p className="font-normal text-xs">Monday-Friday</p>
                <p className="font-normal text-xs">Saturday-Sunday</p>
              </div>
            </div>
            {/* ADDRESS DIV */}
            <div>
              <p>Address</p>
              <div className="px-1">
                <p className="font-normal text-xs">
                  Badaro, Main Street, Building 12
                </p>
                {/* GOOGLE MAPS */}
                <div className="bg-gray-200 h-32 rounded-lg"></div>
              </div>
            </div>

            {/* CONNECT WITH US DIV */}
            <div>
              <p className="pb-0.5">Connect With Us</p>
              <div className="px-1 space-y-2">
                <p className="font-normal text-xs flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 ml-0.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  <p>71 658 235</p>
                </p>
                <div className="flex items-center space-x-1">
                  {/* INSTAGRAM LOGO */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-6 h-6 text-[#c13584]"
                  >
                    <path
                      fill="currentColor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    />
                  </svg>

                  {/* FACEBOOK LOGO */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    className="w-5 h-5 text-[#1877f2]"
                  >
                    <path
                      fill="currentColor"
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    />
                  </svg>

                  {/* WHATSAPP LOGO */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-6 h-6 text-[#128c7e]"
                  >
                    <path
                      fill="currentColor"
                      d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                    />
                  </svg>
                  {/* DISCORD LOGO */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    className="w-6 h-6 text-[#7289da]"
                  >
                    <path
                      fill="currentColor"
                      d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* EVERYTHING ON THE RIGHT OF THE LEFT COLUMN */}
        <div className="h-[466px] flex flex-col justify-between w-1/4 grow">
          {/*  COVER PHOTOS CONTAINER */}
          <div className="h-[330px] w-full bg-gray-300 rounded-lg drop-shadow-lg px-6"></div>
          {/* HIGHLIGHTS CONTAINER */}
          <div className="h-1/4 w-full rounded-lg py-4 drop-shadow-lg flex  items-center space-x-8 text-xs">
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
      <div className="bg-white py-8">
        <p className="flex justify-center mt-5 font-bold">Our Menu</p>
      </div>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* OUR INVENTORY SECTION */}
      <div></div>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* GET IN TOUCH WITH US SECTION */}
      <div></div>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* ABOUT US SECTION */}
      <div></div>
    </>
  );
}
