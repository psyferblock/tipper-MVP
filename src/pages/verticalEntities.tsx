import EntityCard from "@/components/EntityCard";
import EntitiesCardsGrid from "@/components/landing page/EntitiesCardsGrid";
import EntitiesCardsRow from "@/components/landing page/EntitiesCardsRow";
import Navbar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <div className="sm:h-fit sm:min-h-screen px-3 sm:px-12 py-5 sm:py-8">
        <div
          className="py-5 sm:py-8"
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
        <div className="py-5 sm:py-10 space-y-3 sm:space-y-5">
          {/* MOST POPULAR ENTITIES */}
          <div>
            {/* HEADER AND VIEW ALL BUTTON */}
            {/* NOT ABSTRACTING THIS DIV IN THE ROW COMPONENT BECAUSE THE ML-400PX VARIES BETWEEN THIS DIV AND SERVICE INDUSTRY DIV */}
            <div className="flex items-center justify-between pb-2 sm:pb-4">
              <p className="font-bold text-lg sm:ml-[520px]">
                Popular Entities
              </p>
            </div>
            <EntitiesCardsGrid />
          </div>
          {/* /////////////////////////////////////////////////////////////////////////////////// */}
        </div>
      </div>
    </>
  );
}
