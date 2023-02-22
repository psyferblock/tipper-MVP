import HighlightReelsManagement from "@/components/manage/ManageHighlightReels";
import ManageEntityMenu from "@/components/manage/ManageEntityLeftMenu";
import ToggleButton from "@/components/ToggleButton";
import DropdownManagement from "@/components/DropdownManagement";

export default function Home() {
  return (
    <>
      <div className="bg-gray-300 sm:h-fit min-h-screen sm:min-h-screen px-3 sm:px-12 py-5 sm:py-8">
        <div className="flex">
          {/* LEFT MENU */}
          <ManageEntityMenu />
          <div className="flex flex-col space-y-5 sm:space-y-0 w-full">
            <div className="flex items-center justify-between">
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
