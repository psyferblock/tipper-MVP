import ToggleButton from "./ToggleButton";

export default function Home() {
  return (
    <>
      <div className=" bg-white rounded-lg p-4 drop-shadow-lg">
        <p className="text-lg font-bold mb-4">Working Hours</p>
        {/* DIV CONTAINING ROWS */}
        <div className="flex flex-col space-y-3">
          {/* ROW */}
          <div className="flex items-center">
            <div className="flex h-5 items-center">
              <input
                id="comments"
                name="comments"
                type="checkbox"
                className="h-4 w-4  rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="comments" className="font-medium text-gray-700">
                Comments
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
