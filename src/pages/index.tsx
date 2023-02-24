import EntityCard from "@/components/EntityCard";
import EntitiesCardsRow from "@/components/landing page/EntitiesCardsRow";
import Navbar from "@/components/NavBar";

export default function Home() {
  const industries = [
    "Popular Entities",
    "Service Industry",
    "Arts & Entertainment",
    "Non-Profit",
  ];
  return (
    <>
      <div className="sm:h-fit sm:min-h-screen px-3 sm:px-12 py-5 sm:py-8">
        <div
          className="py-20 sm:py-32"
          style={{
            backgroundImage: `url(https://cdn.ldsliving.com/dims4/default/2040800/2147483647/strip/true/crop/640x395+0+0/resize/640x395!/format/webp/quality/90/?url=http%3A%2F%2Flds-living-brightspot.s3.amazonaws.com%2F7c%2F30%2F864e82a22a48241f8a28bc7abb4d%2F42088.jpg)`,
          }}
        >
          {/* <img
          className=" w-full h-full"
          src="https://cdn.ldsliving.com/dims4/default/2040800/2147483647/strip/true/crop/640x395+0+0/resize/640x395!/format/webp/quality/90/?url=http%3A%2F%2Flds-living-brightspot.s3.amazonaws.com%2F7c%2F30%2F864e82a22a48241f8a28bc7abb4d%2F42088.jpg"
          alt=""
        /> */}
          {/* SEARCH BAR */}
          <div className="bg-white border border-black  sm:w-7/12 sm:mx-auto flex sm:py-0 sm:px-3 rounded-full overflow-hidden">
            <div className="sm:col-span-3 border-r">
              <select
                id="sector"
                // autoComplete="country-name"
                className="truncate text-center text-xs sm:text-sm h-full block w-20 sm:w-52 border-0 bg-transparent sm:py-2 pr-5 sm:px-3 focus:border-0 focus:outline-none focus:ring-0 "
              >
                <option selected disabled hidden>
                  Sectors
                </option>
                <option>All</option>
                <option>Service Industry</option>
                <option>Arts & Entertainment</option>
                <option>Non-Profit</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="Explore Entities"
              className="pl-2 sm:pl-9 sm:text-sm sm:focus:ring-0 bg-transparent w-full border-0 sm:h-12"
            />
            <button className="bg-blue-500 text-white px-3 sm:px-7 sm:-mr-3">
              Search
            </button>
          </div>
        </div>
        {/* /////////////////////////////////////////////////////////////////////////////////// */}
        {/* LISTING OF ENTITIES */}
        <div className=" py-5 sm:py-10 space-y-5 sm:space-y-5">
          {industries.map((industry) => (
            <div>
              {/* MOBILE VERSION WITH FLEX */}
              <div className="sm:hidden flex items-center justify-between  pb-2 sm:pb-2">
                <p className="font-bold text-lg sm:text-center">{industry}</p>
                <a
                  className="text-sm text-blue-500 justify-end flex items-center sm:space-x-1"
                  href="/verticalEntities"
                >
                  View All
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-blue-500 pt-0.5 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </a>
              </div>
              {/* DESKTOP VERSION WITHOUT FLEX */}
              <div className="hidden sm:block pb-2">
                <p className="font-bold text-lg sm:text-center">{industry}</p>
                <a
                  className="text-sm text-blue-500 justify-end flex items-center sm:space-x-1"
                  href="/verticalEntities"
                >
                  View All
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-blue-500 pt-0.5 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </a>
              </div>
              <EntitiesCardsRow />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
