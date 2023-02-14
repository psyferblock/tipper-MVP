export default function Home() {
  const itemPicture = true;

  return (
    <div className="bg-white rounded-md w-[198px] overflow-hidden drop-shadow-lg">
      {itemPicture && (
        <img
          className="w-full"
          src="https://cdn.ldsliving.com/dims4/default/2040800/2147483647/strip/true/crop/640x395+0+0/resize/640x395!/format/webp/quality/90/?url=http%3A%2F%2Flds-living-brightspot.s3.amazonaws.com%2F7c%2F30%2F864e82a22a48241f8a28bc7abb4d%2F42088.jpg"
          alt=""
        />
      )}
      <div className="py-4 text-xs">
        <div className="flex justify-between px-2 font-bold">
          <p>Chicken Pasta</p>
          <p>350,000 LBP</p>
        </div>
        <p className="px-3">
          Fresh natural home made pasta dough, locally-fed chicken breast
          pieces, tomato sauce, parmesan, mushrooms, garlic, coriander, green
          pepper.
        </p>
      </div>
    </div>
  );
}
