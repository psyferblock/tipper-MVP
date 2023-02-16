import AddNewItemModal from "@/components/AddNewItemModal";
import AddNewMenuCategoryModal from "@/components/AddNewMenuCategoryModal";
import EditMenuCategoryModal from "@/components/EditMenuCategoryModal";
import ManageEntityMenu from "@/components/ManageEntityLeftMenu";
import MenuCategoryCard from "@/components/MenuCategoryCard";
import SearchBar from "@/components/SearchBar";
import ToggleButton from "@/components/ToggleButton";

export default function Home() {
  // const [categoryNames[], setCategoryNames] = useState([
  //   "Breakfast",
  //   "Entry",
  //   "Main",
  //   "Desert",
  //   "Drinks",
  //   "Offers",
  // ]);

  return (
    <>
      {/* PAGE BG COLOR AND PADDING  */}
      <div className="font-bold text-2xl pt-6 pb-4">Manage Entity</div>
      <div className="flex space-x-4">
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
                <p className="text-xs mt-0.5 ">Upload your menu as a PDF</p>
              </div>
            </div>

            {/* ADD CATEGORY BUTTON */}
            <button className="w-32 h-10 hover:bg-blue-600 text-xs rounded-3xl bg-blue-500 text-white -mt-2">
              Add Category
            </button>
          </div>
          {/* SEARCH CATEGORY SEARCH BAR */}
          <SearchBar />

          <div>
            {/* MENU CATEGORIES */}
            <div className="grid grid-cols-4 gap-4">
              <MenuCategoryCard type="Breakfast" />
              <MenuCategoryCard type="Entry" />
              <MenuCategoryCard type="Main" />
              <MenuCategoryCard type="Desert" />
              <MenuCategoryCard type="Drinks" />
              <MenuCategoryCard type="Offers" />
            </div>
          </div>
        </div>
      </div>
      {/* <EditMenuCategoryModal /> */}
      {/* <AddNewMenuCategoryModal /> */}
      <AddNewItemModal />
    </>
  );
}
