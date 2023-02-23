export default function ManageEntityMenu() {
  return (
    <>
      <div className="hidden sm:block sm:w-[340px]">
        <div className="rounded-lg bg-white mr-4 py-6  flex flex-col drop-shadow-lg">
          <button className="text-black hover:bg-gray-100 px-6 py-2 flex justify-start sm:focus:text-blue-600 sm:focus:bg-gray-100">
            Menu
          </button>
          <button className="text-black hover:bg-gray-100 px-6 py-2 flex justify-start sm:focus:text-blue-600 sm:focus:bg-gray-100">
            Exchange Rate
          </button>
          <button className="text-black hover:bg-gray-100 px-6 py-2 flex justify-start sm:focus:text-blue-600 sm:focus:bg-gray-100">
            General Information
          </button>
          <button className="text-black hover:bg-gray-100 px-6 py-2 flex justify-start sm:focus:text-blue-600 sm:focus:bg-gray-100">
            Highlight Reels
          </button>
          <button className="text-black hover:bg-gray-100 px-6 py-2 flex justify-start sm:focus:text-blue-600 sm:focus:bg-gray-100">
            Inventory
          </button>
          <button className="text-black hover:bg-gray-100 px-6 py-2 flex justify-start sm:focus:text-blue-600 sm:focus:bg-gray-100">
            QR Code
          </button>
        </div>
      </div>
    </>
  );
}
