import EntityCard from "@/components/EntityCard";
import EntitiesCardsRow from "@/components/landing page/EntitiesCardsRow";

export default function Home() {
  return (
    <>
      <div className="py-8">
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
      <div className="py-10 pl-8 space-y-5 ">
        {/* /////////////////////////////////////////////////////////////////////////////////// */}
        {/* MOST POPULAR ENTITIES */}
        <div>
          {/* HEADER AND VIEW ALL BUTTON */}
          {/* NOT ABSTRACTING THIS DIV IN THE ROW COMPONENT BECAUSE THE ML-400PX VARIES BETWEEN THIS DIV AND SERVICE INDUSTRY DIV */}
          <div className="flex items-center justify-between pb-4">
            <p className="font-bold text-lg ml-[440px]">
              👑 Most Popular Entities 👑
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <EntityCard />
          <EntityCard />
          <EntityCard />
          <EntityCard />
          <EntityCard />
          <EntityCard />
          <EntityCard />
          <EntityCard />
          <EntityCard />
          <EntityCard />
          <EntityCard />
          <EntityCard />
          <EntityCard />
          <EntityCard />
          <EntityCard />
        </div>
      </div>
    </>
  );
}
