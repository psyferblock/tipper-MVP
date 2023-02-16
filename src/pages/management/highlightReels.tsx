import HighlightReelsManagement from "@/components/HighlightReelsManagement";
import ManageEntityMenu from "@/components/ManageEntityLeftMenu";
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
