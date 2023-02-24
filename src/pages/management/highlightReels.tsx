import HighlightReelsManagement from "@/components/manageEntityInfoComponents/ManageHighlightReels";
import ManageEntityMenu from "@/components/manageEntityInfoComponents/ManageEntityLeftMenu";
import ToggleButton from "@/components/ToggleButton";
import DropdownManagement from "@/components/MobileDropdownManagement";

export default function Home() {
  return (
    <>
      <div className="sm:hidden px-3 flex items-center justify-between py-2 bg-gray-300 w-full z-50  fixed  text-2xl font-bold">
        <p>Manage Highlight Reels</p>
        <div className="sm:hidden">
          <DropdownManagement />
        </div>
      </div>
      <div className="bg-gray-300 sm:h-fit min-h-screen sm:min-h-screen px-3 sm:px-12 py-5 sm:py-8">
        <div className="flex">
          {/* LEFT MENU */}
          <ManageEntityMenu />
          <div className="flex flex-col space-y-5 sm:space-y-0 w-full">
            {/* DIV TO COMPENSATE THE HEADER DIV FIXED */}
            <div className="h-14 sm:h-0"></div>

            <div className="hidden sm:flex items-center justify-between">
              <div className="sm:hidden font-bold text-2xl ">
                Manage Highlight Reels
              </div>
              <div className="sm:hidden">
                <DropdownManagement />
              </div>
            </div>
            <HighlightReelsManagement />
          </div>
        </div>
      </div>
    </>
  );
}
