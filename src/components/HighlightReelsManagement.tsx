import AddNewHighlightModal from "./AddNewHighlightModal";
import ToggleButton from "./ToggleButton";

export default function Home() {
  return (
    <div className="h-fit  bg-white rounded-lg p-4 drop-shadow-lg flex flex-col">
      {/* HIGHLIGHTS and ADD HIGHLIGHTS ROW */}
      <div className="flex pb-6">
        <div className="text-xl font-bold grow">Highlights</div>
        <button className="text-blue-500 flex items-center space-x-1">
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
          Add Highlight
        </button>
        <AddNewHighlightModal />
      </div>
      <>
        <table className="table-fixed w-full">
          <thead>
            <tr>
              <th className="pr-96 pb-4">Highlight</th>
              <th className="pr-96 pb-4">Status</th>
              <th className="pr-96 pb-4">Publish/Unpublish</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300 text-gray-500">
            <tr>
              <td>Events</td>
              <td className="italic">Public</td>
              <td className="flex items-center justify-between">
                <div className="flex items-center space-x-2 py-3">
                  <ToggleButton />
                  <p className="pb-1">Yes</p>
                </div>
                <div className="flex items-center space-x-6 text-blue-600">
                  <button>Edit</button>
                  <button>Remove</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Happy Customers</td>
              <td className="italic">Private</td>
              <td className="flex items-center justify-between">
                <div className="flex items-center space-x-2 py-3">
                  <ToggleButton />
                  <p className="pb-1">No</p>
                </div>
                <div className="flex items-center space-x-6 text-blue-600">
                  <button>Edit</button>
                  <button>Remove</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Our offers</td>
              <td className="italic">Private</td>
              <td className="flex items-center justify-between">
                <div className="flex items-center space-x-2 py-3">
                  <ToggleButton />
                  <p className="pb-1">No</p>
                </div>
                <div className="flex items-center space-x-6 text-blue-600">
                  <button>Edit</button>
                  <button>Remove</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    </div>
  );
}
