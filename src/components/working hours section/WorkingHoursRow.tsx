export default function Home(props) {
  return (
    <div className="flex items-center space-x-8">
      {/* CHECKBOX AND DAY DIV */}
      <div className="w-44 flex items-center mt-3">
        <div className="flex h-5 items-center">
          <input
            id="comments"
            name="comments"
            type="checkbox"
            className="h-4 w-4 border rounded border-gray-400 text-indigo-600 focus:ring-indigo-500"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="comments" className="font-medium  text-gray-700">
            {props.day}
          </label>
        </div>
      </div>
      {/* INPUT BAR FOR THE HOUR */}
      <div className="flex flex-col">
        <label htmlFor="clock" className="text-xs">
          {props.caption}
        </label>
        <div className="w-40 flex bg-white border border-gray-400 py-0 px-3 rounded-md overflow-hidden">
          <input type="time" id="clock" className="border-0 focus:ring-0" />
        </div>
      </div>
      <p className="pr-5 pt-3">to</p>
      {/* SECOND TIME SETTING */}
      <div className="flex flex-col">
        <label htmlFor="clock" className="text-xs">
          {props.caption}
        </label>
        <div className="w-40 flex bg-white border border-gray-400 py-0 px-3 rounded-md overflow-hidden">
          <input type="time" id="clock" className="border-0 focus:ring-0" />
        </div>
      </div>
    </div>
  );
}
