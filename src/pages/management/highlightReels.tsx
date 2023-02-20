import HighlightReelsManagement from "@/components/manage/ManageHighlightReels";
import ManageEntityMenu from "@/components/manage/ManageEntityLeftMenu";
import ToggleButton from "@/components/ToggleButton";

export default function Home() {
  return (
    <>
      <div className="flex">
        {/* LEFT MENU */}
        <ManageEntityMenu />
        <div className="flex flex-col space-y-5 w-full">
          <HighlightReelsManagement />
        </div>
      </div>
    </>
  );
}
