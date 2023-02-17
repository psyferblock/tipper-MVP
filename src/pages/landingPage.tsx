import EntityCard from "@/components/EntityCard";

export default function Home() {
  return (
    <>
      <div className="py-28">
        <div className="w-7/12 mx-auto flex bg-white border border-gray-400 py-0 px-3 rounded-full overflow-hidden">
          <div className="col-span-6 sm:col-span-3">
            <select
              id="sector"
              // autoComplete="country-name"
              className=" h-full block w-52 border-0 bg-transparent py-2 px-3 focus:border-0 focus:outline-none focus:ring-0 sm:text-sm"
            >
              <option>Service Industry</option>
              <option>Arts & Entertainment</option>
              <option>Non-Profit</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Explore Our Entities"
            className="pl-9 text-sm  focus:ring-0 bg-transparent w-full border-0 h-12"
          />
          <button className="bg-blue-500 text-white px-7 -mr-3">Search</button>
        </div>
      </div>
      {/* LISTING OF ENTITIES */}
      <div className="py-10 space-y-5 bg-white">
        {/* MOST POPULAR ENTITIES */}
        <div>
          {/* HEADER AND VIEW ALL BUTTON */}
          <div className="flex items-center justify-between pb-4">
            <div></div>
            <p className="font-bold text-lg pl-32">
              👑 Most Popular Entities 👑
            </p>
            <a
              className="text-sm text-blue-500 flex items-center space-x-1"
              href=""
            >
              View Rankings
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5 text-blue-500 pt-0.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>
          </div>
          <div className="grid grid-rows-1 grid-flow-col gap-5 pb-5 overflow-x-auto">
            <EntityCard />
            <EntityCard />
            <EntityCard />
            <EntityCard />
            <EntityCard />
            <EntityCard />
          </div>
        </div>
        {/* SERVICE INDUSTRY */}
        <div>
          {/* HEADER AND VIEW ALL BUTTON */}
          <div className="pb-4">
            <div className="flex items-center">
              <p className="flex text-center font-bold text-lg ">
                Service Industry
              </p>
              <div>
                <a
                  className="text-sm text-blue-500 flex items-center space-x-1"
                  href=""
                >
                  View Entities
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-blue-500 pt-0.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-1 grid-flow-col gap-5 pb-5 overflow-x-auto">
            <EntityCard />
            <EntityCard />
            <EntityCard />
            <EntityCard />
            <EntityCard />
            <EntityCard />
          </div>
        </div>
      </div>
    </>
  );
}
