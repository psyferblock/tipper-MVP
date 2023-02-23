// "use client";
import AddHighlightModal from "../../components/modals/AddNewHighlightModal";
import ExchangeRateDollarInput from "../../components/ExchangeRateDollarInput";
import ExchangeRateLiraInput from "../../components/ExchangeRateLiraInput";
import ManageEntityMenu from "@/components/manage/ManageEntityLeftMenu";
import ToggleButton from "../../components/ToggleButton";
import GenerateQrCodeSection from "@/components/GenerateQrCodeSection";
import ManageSocialMedia from "@/components/manage/ManageSocialMedia";
import ManageWorkingHours from "@/components/manage/ManageWorkingHours";
import ManageAboutUs from "@/components/manage/ManageAboutUs";
import ManageContactUs from "@/components/manage/ManageContactUs";
import DropdownManagement from "@/components/DropdownManagement";

export default function Home() {
  return (
    <>
      <div className="bg-gray-300 sm:h-fit sm:min-h-screen px-3 sm:px-12 pt-0 pb-7 sm:py-8">
        {/* PAGE BG COLOR AND PADDING  */}
        <div className="hidden sm:block font-bold text-2xl pt-6 pb-4">
          Manage Entity
        </div>
        <div className="flex">
          {/* LEFT MENU */}
          <ManageEntityMenu />

          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <div className="flex flex-col w-full pb-10">
            <div className="sm:hidden fixed py-3 z-50 bg-gray-300 flex items-center justify-between">
              <div className="sm:hidden font-bold text-2xl ">
                Manage General Info
              </div>
              <div className="sm:hidden">
                <DropdownManagement />
              </div>
            </div>
            <div className="h-24 sm:h-0"></div>

            <div className="space-y-5">
              {/* ANNOUNCEMENT BANNERS CONTAINER */}
              <div className="h-fit  bg-white rounded-lg p-3 sm:p-4 drop-shadow-lg">
                <div className="sm:flex">
                  <div className="text-lg font-bold grow">
                    Announcement Banners
                  </div>
                  <button className="hidden sm:flex text-blue-500 items-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                    Add Slide
                  </button>
                </div>
                {/* "Caption Goes here" */}
                <div className="text-xs">
                  Add up to 5 photos that will appear as a slideshow at the top
                  of your entity page
                </div>
                <button className="sm:hidden flex text-blue-500 items-center space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  Add Slide
                </button>
                {/* UPLOAD PICTURE FIELD */}
                <div className="bg-gray-100  h-56 rounded-lg border-2 border-dashed border-gray-400 my-4 ">
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
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

              {/* TAGS CONTAINER */}
              <div className="h-fit  bg-white rounded-lg p-3 sm:p-4 drop-shadow-lg">
                <div className="text-lg font-bold mb-2">Tags</div>
                <div className="text-xs">Add tags</div>
                {/* TAG INPUT FIELD */}
                <div className="flex items-center space-x-3">
                  <input
                    type="text"
                    name="tags"
                    id="price"
                    className="h-12 block w-full rounded-md border-gray-400 pl-7 pr-12 mt-2 mb-6 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Type tag here"
                  />
                  <button className="text-sm text-blue-500 mb-3 font-medium">
                    Add
                  </button>
                </div>
                {/* TAGS ROW */}
                <div className="grid grid-flow-col gap-3 pb-3 sm:pb-2 px-1 sm:px-2 sm:py-1 overflow-x-auto  sm:flex sm:space-x-3">
                  {/* TAG 1 */}
                  <div className="px-2 py-1 flex w-fit items-center space-x-3 justify-between bg-gray-100 rounded-lg text-black text-xs  drop-shadow-lg">
                    <p>Vegeterian</p>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 text-gray-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* TAG 2 */}

                  <div className="flex w-fit items-center justify-between space-x-3 bg-gray-100 rounded-lg text-black text-xs px-2 py-1 drop-shadow-lg">
                    <div>Cozy</div>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 text-gray-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* TAG 2 */}

                  <div className="flex w-fit items-center justify-between space-x-3 bg-gray-100 rounded-lg text-black text-xs px-2 py-1 drop-shadow-lg">
                    <div>Cozy</div>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 text-gray-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* TAG 3 */}

                  <div className="flex w-fit items-center justify-between space-x-3 bg-gray-100 rounded-lg text-black text-xs px-2 py-1 drop-shadow-lg">
                    <div>Seafood</div>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 text-gray-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
              <ManageWorkingHours />
              <ManageSocialMedia />
              <ManageAboutUs />
              <ManageContactUs />
              {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
              <div className="bg-gray-500 opacity-95 h-14 fixed bottom-0 left-0 right-0 py-2 px-12 flex justify-end space-x-5">
                <button className="w-28 h-10 rounded-3xl bg-white border hover:bg-gray-200 border-gray-600 text-black text-sm ">
                  Cancel
                </button>
                <button className="w-28 h-10 rounded-3xl bg-blue-600 border hover:bg-blue-700 border-gray-600 text-black text-sm ">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
