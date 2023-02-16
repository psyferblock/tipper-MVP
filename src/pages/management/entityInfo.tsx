// "use client";
import AddHighlightModal from "../../components/AddNewHighlightModal";
import ExchangeRateDollarInput from "../../components/ExchangeRateDollarInput";
import ExchangeRateLiraInput from "../../components/ExchangeRateLiraInput";
import ManageEntityMenu from "@/components/ManageEntityLeftMenu";
import ToggleButton from "../../components/ToggleButton";

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

          {/* SOCIAL MEDIA AND CONTACT CONTAINER */}
          <div className=" bg-white rounded-lg p-4 drop-shadow-lg">
            <div className="text-lg font-bold mb-2">
              Social Media & Contact Info
            </div>
            {/* PHONE NUMBER ROW */}
            <div className="divide-y">
              <div className="flex items-center justify-start ">
                <div className="w-1/6 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  Phone Number
                </div>
                {/* PHONE NUMBER INPUT FIELD */}
                <input
                  type="text"
                  name="tags"
                  id="price"
                  className="h-12 block w-2/6 rounded-md border-gray-300 pl-7 pr-12 mt-2 mb-6  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="03 456 789"
                />
                <div className="flex space-x-3 w-2/6">
                  {/* <div className="mt-0.5"> */}
                  <ToggleButton />
                  {/* </div> */}
                  <div className=" text-sm text-gray-500 w-full">
                    Show on your profile
                  </div>
                </div>
              </div>
              {/* EMAIL ROW */}
              <div className="flex items-center justify-start">
                <div className="w-1/6 flex">
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
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  Email Address
                </div>
                {/* EMAIL INPUT FIELD */}
                <input
                  type="text"
                  name="tags"
                  id="price"
                  className="h-12 block w-2/6 rounded-md border-gray-300 pl-7 pr-12 mt-2 mb-6  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Type Email Address"
                />
                <div className="flex space-x-3 w-2/6">
                  {/* <div className="mt-0.5"> */}
                  <ToggleButton />
                  {/* </div> */}
                  <div className=" text-sm text-gray-500 w-full">
                    Show on your profile
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          {/* QR CODE CONTAINER */}
          <div className=" bg-white rounded-lg p-4 drop-shadow-lg">
            <div className="text-lg font-bold mb-2">Generate QR Code</div>
            <div className="flex justify-center">
              <div className="space-y-1 text-center">
                {/* QR CODE */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-60 h-60 mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
                  />
                </svg>

                {/* DOWNLOAD QR CODE TEXT AND ICON */}
                <button className="text-blue-500 ml-2">
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-4 h-4 text-blue-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                    <p> Download QR Code</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
