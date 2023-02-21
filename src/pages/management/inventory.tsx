import AddNewItemModal from "@/components/modals/AddNewItemModal";
import AddNewMenuCategoryModal from "@/components/modals/AddNewMenuCategoryModal";
import EditItemModal from "@/components/modals/EditItemModal";
import EditMenuCategoryModal from "@/components/modals/EditMenuCategoryModal";
import ManageEntityMenu from "@/components/manage/ManageEntityLeftMenu";
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
          <div className="flex items-center justify-end">
            {/* ADD CATEGORY BUTTON */}
            <button className="w-32 h-10 hover:bg-blue-600 text-xs rounded-3xl bg-blue-500 text-white -mt-2">
              Add Category
            </button>
          </div>
          {/* SEARCH CATEGORY SEARCH BAR */}
          <SearchBar placeHolder="Seach for a category" />

          <div>
            {/* MENU CATEGORIES */}
            <div className="grid grid-cols-4 gap-4">
              <MenuCategoryCard type="Wine" />
              <MenuCategoryCard type="Soap" />
              <MenuCategoryCard type="Arak" />
              <MenuCategoryCard type="Scent" />
              <MenuCategoryCard type="Halewe" />
            </div>
          </div>
        </div>
      </div>
      {/* <EditMenuCategoryModal /> */}
      {/* <AddNewMenuCategoryModal /> */}
      {/* <AddNewItemModal /> */}
      <EditItemModal />
    </>
  );
}
