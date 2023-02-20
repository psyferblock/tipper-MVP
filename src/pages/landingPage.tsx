import EntityCard from "@/components/EntityCard";
import EntitiesCardsRow from "@/components/landing page/EntitiesCardsRow";

export default function Home() {
  return (
    <>
      <div
        className="py-32"
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
        <div className="w-7/12 mx-auto flex bg-white border border-black py-0 px-3 rounded-full overflow-hidden">
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
        {/* /////////////////////////////////////////////////////////////////////////////////// */}
        {/* MOST POPULAR ENTITIES */}
        <div>
          {/* HEADER AND VIEW ALL BUTTON */}
          {/* NOT ABSTRACTING THIS DIV IN THE ROW COMPONENT BECAUSE THE ML-400PX VARIES BETWEEN THIS DIV AND SERVICE INDUSTRY DIV */}
          <div className="flex items-center justify-between pb-4">
            <p className="font-bold text-lg ml-[480px]">
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
          <EntitiesCardsRow />
        </div>
        {/* /////////////////////////////////////////////////////////////////////////////////// */}

        {/* SERVICE INDUSTRY */}
        <div>
          {/* HEADER AND VIEW ALL BUTTON */}
          <div className="pb-4">
            <div className="flex items-center justify-between ">
              <p className="flex font-bold text-lg ml-[519px]">
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
          <EntitiesCardsRow />
        </div>
        {/* /////////////////////////////////////////////////////////////////////////////////// */}

        {/* ART AND ENTERTAINMENT INDUSTRY */}
        <div>
          {/* HEADER AND VIEW ALL BUTTON */}
          <div className="pb-4">
            <div className="flex items-center justify-between ">
              <p className="flex font-bold text-lg ml-[500px]">
                Art & Entertainment
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
          <EntitiesCardsRow />
        </div>

        {/* /////////////////////////////////////////////////////////////////////////////////// */}

        {/* NON PROFIT INDUSTRY */}
        <div>
          {/* HEADER AND VIEW ALL BUTTON */}
          <div className="pb-4">
            <div className="flex items-center justify-between ">
              <p className="flex font-bold text-lg ml-[543px]">Non-Profit</p>
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
          <EntitiesCardsRow />
        </div>
      </div>
    </>
  );
}
