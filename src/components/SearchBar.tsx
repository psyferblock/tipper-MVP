export default function Home(props) {
  return (
    <div className="w-full flex rounded-lg border-gray-400">
      <div className="pt-3">
        <svg
          className="absolute text-slate-400 h-6 w-6 ml-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder={`${props.placeHolder}`}
        className="pl-9 text-sm w-full border border-gray-400 h-12 rounded-md"
      />
    </div>
  );
}
