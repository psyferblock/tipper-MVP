import AddNewItemModal from "@/components/modals/AddNewItemModal";
import AddNewMenuCategoryModal from "@/components/modals/AddNewMenuCategoryModal";
import EditItemModal from "@/components/modals/EditItemModal";
import EditMenuCategoryModal from "@/components/modals/EditMenuCategoryModal";
import ManageEntityMenu from "@/components/manage/ManageEntityLeftMenu";
import MenuCategoryCard from "@/components/MenuCategoryCard";
import SearchBar from "@/components/SearchBar";
import ToggleButton from "@/components/ToggleButton";
import { useState } from "react";

export default function Home() {
  // const [categoryNames[], setCategoryNames] = useState([
  //   "Breakfast",
  //   "Entry",
  //   "Main",
  //   "Desert",
  //   "Drinks",
  //   "Offers",
  // ]);

  const [isPdf, setIsPdf] = useState(false);

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
              <div className="flex pt-1 space-x-2">
                <p className="text-xs mt-0.5 ">Upload your menu as a PDF</p>
                <ToggleButton />
              </div>
            </div>

            {!isPdf && (
              <>
                {/* ADD CATEGORY BUTTON */}
                <button className="w-32 h-10 hover:bg-blue-600 text-xs rounded-3xl bg-blue-500 text-white -mt-2">
                  Add Category
                </button>
              </>
            )}
          </div>

          {isPdf ? (
            <div className="bg-gray-100  h-56 rounded-lg border-2 border-dashed border-gray-400 mt-1">
              <div className=" flex justify-center rounded-md px-6 pt-[52px] ">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-gray-100 font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-400"
                    >
                      <span className="">Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PDF, JPG up to 10MB</p>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* SEARCH CATEGORY SEARCH BAR */}
              <SearchBar placeHolder="Seach for a category" />
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
            </>
          )}
        </div>
      </div>
      {/* <EditMenuCategoryModal /> */}
      {/* <AddNewMenuCategoryModal /> */}
      {/* <AddNewItemModal /> */}
      <EditItemModal />
    </>
  );
}
