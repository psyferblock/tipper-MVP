export default function Home() {
  const itemPicture = true;

  return (
    <div className="bg-white">
      {itemPicture && (
        <img
          className="inline-block mb-2 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      )}
      <p className="font-semibold">Pasta Bolognese</p>
      <p>Ch</p>
    </div>
  );
}
