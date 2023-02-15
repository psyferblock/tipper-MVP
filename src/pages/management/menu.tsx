import ManageEntityMenu from "@/components/ManageEntityLeftMenu";
import ToggleButton from "@/components/ToggleButton";

const searchIcon = (
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
      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    />
  </svg>
);

export default function Home() {
  return (
    <>
      {/* PAGE BG COLOR AND PADDING  */}
      <div className="font-bold text-2xl pt-6 pb-4">Manage Entity</div>
      <div className="flex">
        {/* LEFT MENU */}
        <ManageEntityMenu />
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className="flex flex-col space-y-3 w-full">
          {/* MENU HEADER AND ADD CATEGORY BUTTON */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <p className="text-lg font-bold">Menu</p>
              <div className="flex pt-1 space-x-1">
                <ToggleButton />
                <p className="text-xs mt-0.5">Upload your menu as a PDF</p>
              </div>
            </div>

            {/* ADD CATEGORY BUTTON */}
            <button className="w-32 h-10 hover:bg-blue-600 text-xs rounded-3xl bg-blue-500 text-white">
              Add Category
            </button>
          </div>
          {/* SEARCH CATEGORY SEARCH BAR */}
          <input
            type="text"
            name="search category"
            id="search category"
            className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12  focus:border-indigo-500 focus:ring-indigo-500 text-xs "
            placeholder="&#xF002;      Search category"
            style={{ fontFamily: "Arial, FontAwesome" }}
          />
          <div>
            {/* MENU CATEGORIES */}
            <div className="grid grid-cols-4 gap-4"></div>
          </div>
        </div>
      </div>
    </>
  );
}
