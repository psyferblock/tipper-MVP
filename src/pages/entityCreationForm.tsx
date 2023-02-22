export default function Home() {
  return (
    <div className="sm:bg-gray-300 sm:h-fit sm:min-h-screen px-3 sm:px-12 py-5 sm:py-8">
      <div className="sm:flex">
        {/* LEFT PART OF SCREEN */}
        <div className="w-1/3 mb-10 sm:mb-0">
          <button className="flex items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            <p className="text-lg">Back</p>
          </button>
        </div>
        {/* //////////////////////////////////////////////////////////////////////////////////// */}
        {/* RIGHT PART OF SCREEN */}
        <div className="bg-white grow sm:py-28 sm:px-40">
          <div className="mb-9 text-center sm:text-start">
            <p className="text-3xl font-bold ">Create an Entity</p>
            <p className="italic text-sm font-light">
              Welcome to the Tipper network
            </p>
          </div>
          {/* INPUT FORMS */}
          <div className="space-y-3">
            {/* BUSINESS NAME */}
            <div className="space-y-1">
              <label
                htmlFor="names"
                className="text-xs text-gray-600 font-medium"
              >
                Entity Name*
              </label>
              {/* ENTITY NAME INPUT FIELD */}
              <input
                type="text"
                name="names"
                id="names"
                className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
                placeholder="Entity Name"
              />
            </div>
            {/* BUSINESS TYPE */}
            <div className="space-y-1">
              <label
                htmlFor="names"
                className="text-xs text-gray-600 font-medium"
              >
                Business Type*
              </label>
              {/* BUSINESS TYPE FIELD */}
              <select
                name="business type"
                id="business type"
                className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
                placeholder="Select a type"
              >
                <option>Restaurant</option>
                <option>One-Stop Shop</option>
                <option>Clothing Shop</option>
                <option>Sex Shop</option>
                <option>Relief Therapy</option>
              </select>
            </div>
            {/* DIVIDOR SEPARATOR */}
            <div className="divide-y">
              {/* BUSINESS LOCATION */}
              <div className="space-y-1 mb-7">
                <label
                  htmlFor="names"
                  className="text-xs text-gray-600 font-medium"
                >
                  Business Location*
                </label>
                {/* BUSINESS LOCATION FIELD */}
                <input
                  type="text"
                  name="names"
                  id="names"
                  className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
                  placeholder="Area, Street Name, Building number"
                />
              </div>
              {/* BUSINESS OWNER NAME */}
              <div className="space-y-1 pt-4">
                <label
                  htmlFor="names"
                  className="text-xs text-gray-600 font-medium"
                >
                  Business Owner*
                </label>
                {/* FIRST AND LAST NAME INPUT FIELD */}
                <input
                  type="text"
                  name="names"
                  id="names"
                  className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
                  placeholder="First and Last Name"
                />
              </div>
            </div>
            {/* GENDER RADIO BUTTON */}
            <div>
              <label
                htmlFor="gender"
                className="text-xs text-gray-600 font-medium"
              >
                Gender*
              </label>
              <div className="flex items-center flex-start space-x-9 py-1">
                <div>
                  <input
                    id="default-radio-1"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-100 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="ml-2 text-xs font-normal text-gray-900 dark:text-gray-500"
                  >
                    Male
                  </label>
                </div>
                <div>
                  <input
                    id="default-radio-1"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-100 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="ml-2 text-xs font-normal text-gray-900 dark:text-gray-500"
                  >
                    Female
                  </label>
                </div>
                <div>
                  <input
                    id="default-radio-1"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-100 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="ml-2 text-xs font-normal text-gray-900 dark:text-gray-500"
                  >
                    Other
                  </label>
                </div>
              </div>
            </div>
            {/* CONTACT NUMBER */}
            <div className="space-y-1">
              <label
                htmlFor="names"
                className="text-xs text-gray-600 font-medium"
              >
                Contact Number*
              </label>
              {/* CONTACT NUMBER INPUT FIELD */}
              <input
                type="text"
                name="contact number"
                id="contact number"
                className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
                placeholder="Contact Number"
              />
            </div>
            {/* EMAIL ADDRESS */}
            <div className="space-y-1">
              <label
                htmlFor="names"
                className="text-xs text-gray-600 font-medium"
              >
                Email Address*
              </label>
              {/* EMAIL ADDRESS INPUT FIELD */}
              <input
                type="text"
                name="EMAIL ADDRESS"
                id="EMAIL ADDRESS"
                className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
                placeholder="Email Address"
              />
            </div>
          </div>
          {/* CREATE ENTITY BUTTON */}
          <button className="w-full h-10 mt-5 sm:mt-10 hover:bg-blue-600 hover:text-lg rounded-3xl bg-blue-500 text-white text-sm">
            Create Now
          </button>
        </div>
      </div>
    </div>
  );
}
