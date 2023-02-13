export default function Navbar() {
  return (
    <>
      <div className="bg-gray-500 h-[78px] flex justify-between items-center">
        <p className="py-[18px] ml-10 text-white text-4xl">Tipper</p>
        <div className="flex items-center space-x-2">
          <img
            className="w-6 h-6 inline-block rounded-full ring-2 "
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <p className="text-xs text-white pr-9">Coco Makmak</p>
        </div>
      </div>
    </>
  );
}
