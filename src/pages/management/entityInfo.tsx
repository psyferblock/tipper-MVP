// "use client";
import AddHighlightModal from "../../components/AddNewHighlightModal";
import ExchangeRateDollarInput from "../../components/ExchangeRateDollarInput";
import ExchangeRateLiraInput from "../../components/ExchangeRateLiraInput";
import ManageEntityMenu from "@/components/ManageEntityLeftMenu";
import ToggleButton from "../../components/ToggleButton";
import GenerateQrCodeSection from "@/components/GenerateQrCodeSection";
import ManageSocialMedia from "@/components/ManageSocialMedia";
import ManageWorkingHours from "@/components/ManageWorkingHours";

export default function Home() {
  return (
    <>
      {/* PAGE BG COLOR AND PADDING  */}
      <div className="font-bold text-2xl pt-6 pb-4">Manage Entity</div>
      <div className="flex">
        {/* LEFT MENU */}
        <ManageEntityMenu />

        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <div className="flex flex-col space-y-5 w-full">
          {/* ANNOUNCEMENT BANNERS CONTAINER */}
          <div className="h-fit  bg-white rounded-lg p-4 drop-shadow-lg">
            <div className="flex ">
              <div className="text-lg font-bold grow">Announcement Banners</div>
              <div className="text-blue-500 flex items-center">
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
                <div>Add Slide</div>
              </div>
            </div>
            {/* "Caption Goes here" */}
            <div className="text-xs">Caption goes here</div>
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
          <div className="h-fit  bg-white rounded-lg p-4 drop-shadow-lg">
            <div className="text-lg font-bold mb-2">Tags</div>
            <div className="text-xs">Add tags</div>
            {/* TAG INPUT FIELD */}
            <input
              type="text"
              name="tags"
              id="price"
              className="h-12 block w-full rounded-md border-gray-300 pl-7 pr-12 mt-2 mb-6 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Type tag here"
            />
            {/* TAGS ROW */}
            <div className="flex space-x-3">
              {/* TAG 1 */}
              <div className="w-1/12">
                <div className="flex items-center justify-between bg-gray-100 rounded-lg text-black text-xs px-2 py-1 drop-shadow-lg">
                  <div>Tag 1</div>
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
                </div>
              </div>
              {/* TAG 2 */}
              <div className="w-1/12">
                <div className="flex items-center justify-between bg-gray-100 rounded-lg text-black text-xs px-2 py-1 drop-shadow-lg">
                  <div>Tag 2</div>
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
                </div>
              </div>
              {/* TAG 3 */}
              <div className="w-1/12">
                <div className="flex items-center justify-between bg-gray-100 rounded-lg text-black text-xs px-2 py-1 drop-shadow-lg">
                  <div>Tag 3</div>
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
                </div>
              </div>
            </div>
          </div>

          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <ManageWorkingHours />
          <ManageSocialMedia />

          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <GenerateQrCodeSection />
        </div>
      </div>
    </>
  );
}
