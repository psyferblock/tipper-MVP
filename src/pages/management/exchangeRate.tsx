import ExchangeRateDollarInput from "@/components/ExchangeRateDollarInput";
import ExchangeRateLiraInput from "@/components/ExchangeRateLiraInput";
import ManageEntityMenu from "@/components/ManageEntityLeftMenu";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <>
      {/* PAGE BG COLOR AND PADDING */}
      <div className="font-bold text-2xl pt-6 pb-4">Manage Entity</div>
      <div className="flex">
        {/* LEFT MENU */}
        <ManageEntityMenu />

        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <div className="flex flex-col space-y-5 w-full">
          {/* ANNOUNCEMENT BANNERS CONTAINER */}
          <div className="h-fit  bg-white rounded-lg p-4 drop-shadow-lg">
            <div className="text-lg font-bold grow">Manage Rate</div>
            {/* "Caption Goes here" */}
            <div className="text-xs">
              Input the exchange rate at which your restaurant operates today
            </div>
            <div className="flex items-center space-x-6 pt-5">
              {/* PRICE INPUT FIELD */}
              <div className="flex py-4 items-center border border-gray-300 hover:border-indigo-500 hover:border-2 rounded-lg h-12 pl-4 mb-4">
                <p className="h-12 pt-3 text-gray-500 pr-4 border-r border-gray-300">
                  LBP
                </p>
                <input
                  type="text"
                  id="price"
                  className="h-6 block w-full border-0 pl-4 pr-12 my-0.5 py-0 focus:border-0 focus:ring-0 sm:text-sm"
                  placeholder="1506.00"
                />
              </div>

              {/* EQUIVALENT LOGO */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 pb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                />
              </svg>
              {/* PRICE INPUT FIELD */}
              <div className="flex py-4 items-center border border-gray-300 rounded-lg h-12 pl-4 mb-4">
                <p className="h-12 pt-3 text-gray-500 pr-4 border-r border-gray-300">
                  USD
                </p>
                <p
                  id="price"
                  className="h-6 block w-60 text-gray-500 border-0 pl-4 pr-12 my-0.5 py-0 focus:border-0 focus:ring-0 sm:text-sm"
                >
                  1.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
