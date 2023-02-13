import ExchangeRateDollarInput from "@/components/ExchangeRateDollarInput";
import ExchangeRateLiraInput from "@/components/ExchangeRateLiraInput";
import ManageEntityMenu from "@/components/ManageEntityLeftMenu";

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
            <div className="flex items-center space-x-3 pt-5">
              <ExchangeRateDollarInput />
              {/* EQUIVALENT LOGO */}
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
                  d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                />
              </svg>
              <ExchangeRateLiraInput />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
