import ManageMenuItems from "@/components/manage/ManageMenuItems";
import AddNewItemModal from "@/components/modals/AddNewItemModal";
import SearchBar from "@/components/SearchBar";
import ToggleButton from "@/components/ToggleButton";

export default function Home() {
  return (
    <>
      {/* DESKTOP VERSION */}
      <div className=" sm:h-fit sm:min-h-screen px-3 sm:px-12 sm:py-8">
        <div className="hidden sm:flex flex-col space-y-3 w-full">
          <div className="flex items-center justify-end">
            {/* ADD CATEGORY BUTTON */}
            <button className="w-32 h-10 hover:bg-blue-600 text-xs rounded-3xl bg-blue-500 text-white -mt-2">
              Add Item
            </button>
          </div>
          <div className="h-fit bg-white rounded-lg p-4 drop-shadow-lg flex flex-col">
            <div className="space-y-4">
              {/* SEARCH CATEGORY SEARCH BAR */}
              <SearchBar placeHolder="Seach for an item" />
              <div className="flex pb-6">
                <table className="table-fixed w-full">
                  <thead>
                    <tr>
                      <th className="pr-96 pb-4">Item</th>
                      <th className="pr-96 pb-4">Status</th>
                      <th className="pr-96 pb-4">Publish/Unpublish</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-300 text-gray-500">
                    <tr>
                      <div className="my-3">
                        <td>
                          <img
                            className="inline-block w-14 h-14 mr-3 rounded-full ring-2 ring-white"
                            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </td>
                        <td>Chicken Escalope</td>
                      </div>
                      <td className="italic">Public</td>
                      <td className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 py-3">
                          <ToggleButton />
                          <p className="pb-1">Yes</p>
                        </div>
                        <div className="flex items-center space-x-10 text-blue-600">
                          <button>Edit</button>
                          <button>Remove</button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <div className="my-3">
                        <td>
                          <img
                            className="inline-block w-14 h-14 mr-3 rounded-full ring-2 ring-white"
                            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </td>
                        <td>Chicken Escalope</td>
                      </div>
                      <td className="italic">Private</td>
                      <td className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 py-3">
                          <ToggleButton />
                          <p className="pb-1">No</p>
                        </div>
                        <div className="flex items-center space-x-10 text-blue-600">
                          <button>Edit</button>
                          <button>Remove</button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <div className="my-3">
                        <td>
                          <img
                            className="inline-block w-14 h-14 mr-3 rounded-full ring-2 ring-white"
                            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </td>
                        <td>Chicken Escalope</td>
                      </div>
                      <td className="italic">Private</td>
                      <td className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 py-3">
                          <ToggleButton />
                          <p className="pb-1">No</p>
                        </div>
                        <div className="flex items-center space-x-10 text-blue-600">
                          <button>Edit</button>
                          <button>Remove</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //////////////////////////////////////////////////////////////////////////// */}
      {/* MOBILE VERSION */}
      <div className="w-full flex items-center px-3 py-3 justify-between bg-gray-300 z-50 fixed">
        <div className="flex">
          <button className="flex items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <p className="font-bold text-3xl ">Breakfast</p>
        </div>
        <button className="mt-1 text-sm text-blue-500 flex items-center justify-end space-x-1">
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
          Add Item
        </button>
      </div>
      <div className="sm:hidden  ">
        <div className="h-16 sm:h-0"></div>
        <div className="px-3 space-y-3">
          <SearchBar placeHolder="Search for item" />
          <ManageMenuItems />
        </div>
      </div>
      {/* <AddNewItemModal /> */}
      {/* <EditItemModal /> */}
    </>
  );
}
