export default function ManageEntityMenu() {
  return (
    <>
      <div className="w-[340px]">
        <div className="rounded-lg bg-white mr-4 py-6  flex flex-col drop-shadow-lg">
          <button className="text-black hover:bg-gray-100 px-6 py-2 flex justify-start">
            Menu
          </button>
          <button className="text-black hover:bg-gray-100 px-6 py-2 flex justify-start">
            Basic Information
          </button>

          <button className="text-black hover:bg-gray-100 px-6 py-2 flex justify-start">
            Highlight Reels
          </button>
          <button className="text-black hover:bg-gray-100 px-6 py-2 flex justify-start">
            Inventory
          </button>
          <button className="text-black hover:bg-gray-100 px-6 py-2 flex justify-start">
            Exchange Rate
          </button>
          <button className="text-black hover:bg-gray-100 px-6 py-2 flex justify-start">
            QR Code
          </button>
        </div>
      </div>
    </>
  );
}
