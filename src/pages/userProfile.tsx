export default function Home() {
  return (
    <>
      <div className="pt-4 pb-8 text-2xl font-bold">Profile</div>
      <div className="flex flex-col space-y-5 w-full px-[155px]">
        {/* CREATE ENTITY CONTAINER */}
        <div className="h-fit bg-white rounded-lg py-4 drop-shadow-lg px-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <div className="font-semibold text-lg grow">Create an Entity</div>
              <p className="text-xs w-8/12">
                Lorem ipsum blablabla however you would like to create your
                entiy you can for the best of your ability to tule the world and
                the heavens and then all the kingdom
              </p>
            </div>
            <button className="w-40 h-10 rounded-3xl bg-blue-500 text-white text-sm">
              Create Now
            </button>
          </div>
        </div>
        {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* CREATE ENTITY CONTAINER */}
        <div className="h-fit bg-white rounded-lg py-4 drop-shadow-lg px-6">
          <div className="flex items-center justify-between pb-4">
            <p className=" font-bold text-lg grow">Basic Information</p>
            <p className="text-xs text-blue-500">Edit</p>
          </div>
          <div className="flex space-x-12">
            <div className="w-2/12">
              <img
                className="inline-block mb-2 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="flex justify-center w-full space-x-[0.6px] text-xs  text-blue-500">
                <button>Change photo </button>
                <span>|</span> <button>Delete</button>
              </div>
            </div>
            <div className="w-5/12 h-full space-y-3">
              <div>
                <label
                  htmlFor="names"
                  className="text-xs text-gray-600 font-medium pb-5"
                >
                  First and Last Name*
                </label>
                {/* FIRST AND LAST NAME INPUT FIELD */}
                <input
                  type="text"
                  name="names"
                  id="names"
                  className="h-10 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Sarah Moukarzel"
                />
              </div>
              <div>
                <label
                  htmlFor="names"
                  className="text-xs text-gray-600 font-medium pb-3"
                >
                  First and Last Name*
                </label>
                {/* FIRST AND LAST NAME INPUT FIELD */}
                <input
                  type="text"
                  name="names"
                  id="names"
                  className="h-10 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Sarah Moukarzel"
                />
              </div>
            </div>
            <div className="w-5/12">
              <label
                htmlFor="gender"
                className="text-xs text-gray-600 font-medium"
              >
                Gender*
              </label>
              <div className="flex items-center flex-start space-x-9">
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
              <label
                htmlFor="names"
                className="text-xs text-gray-600 font-medium"
              >
                First and Last Name*
              </label>
              {/* FIRST AND LAST NAME INPUT FIELD */}
              <input
                type="text"
                name="names"
                id="names"
                className="h-10 block w-full rounded-md border-gray-300 pl-4 pr-12 mt-2 mb-6 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Sarah Moukarzel"
              />
            </div>
          </div>
        </div>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}

        <div className="h-fit bg-white rounded-lg py-4 drop-shadow-lg px-6">
          <div className="font-semibold text-lg grow pb-2">Security</div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <div className="mr-4">
                <label
                  htmlFor="names"
                  className="text-xs text-gray-600 font-medium pb-3"
                >
                  Current Password
                </label>
                {/* FIRST AND LAST NAME INPUT FIELD */}
                <input
                  type="text"
                  name="names"
                  id="names"
                  className="h-10 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="●●●●●"
                />
              </div>
              <button className="text-xs text-blue-500 mt-3 font-medium">
                Change
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
