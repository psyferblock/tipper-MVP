export default function Home() {
  return (
    <div className="bg-white flex flex-row-reverse items-center space-x-16 py-12">
      {/* IMAGE */}
      <div className="w-[598px] h-[320px] bg-black"></div>
      {/* PARAGRAPH */}
      <div className="w-7/12 space-y-3">
        <p className="font-bold text-xl">Contact Us</p>
        <p className="pr-8">
          We deliver in all areas of Beirut! Text us by whatsapp or call us to
          place your orders.
        </p>
        <button className="w-40 h-10 rounded-3xl bg-blue-500 text-white text-sm">
          Contact Us
        </button>
      </div>
    </div>
  );
}
