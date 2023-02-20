import SearchBar from "@/components/SearchBar";
import ToggleButton from "@/components/ToggleButton";

export default function Home() {
  return (
    <>
      <div className="flex flex-col space-y-3 w-full">
        <div className="flex items-center justify-end">
          {/* ADD CATEGORY BUTTON */}
          <button className="w-32 h-10 hover:bg-blue-600 text-xs rounded-3xl bg-blue-500 text-white -mt-2">
            Add Item
          </button>
        </div>
        <div className="h-fit  bg-white rounded-lg p-4 drop-shadow-lg flex flex-col">
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
                      <td>Ksara Wine</td>
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
                      <td>Arak Farid</td>
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
                      <td>Baladi Soap</td>
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
    </>
  );
}
