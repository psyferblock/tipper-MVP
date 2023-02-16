export default function Home() {
  return (
    <>
      <div className="flex justify-content ">
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Sector
          </label>
          <select
            id="country"
            name="country"
            autoComplete="country-name"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          >
            <option>Service Industry</option>
            <option>Arts & Entertainment</option>
            <option>Non-Profit</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Search category"
          className="pl-9 text-sm w-full border border-gray-400 h-12 rounded-md"
        />
      </div>

      {/* LISTING OF ENTITIES */}
      <div className="pt-8 space-y-5">
        <div>
          <div>
            <p className="flex justify-center">Most Popular Entities</p>
            <p className="text-xs text-blue-500">View Rankings</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <div className="overflow-x-auto"></div>
        </div>
      </div>
    </>
  );
}
