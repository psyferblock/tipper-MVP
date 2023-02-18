export default function Home() {
  return (
    <div className="flex items-center space-x-16 py-12">
      {/* IMAGE */}
      <div className="w-[598px] h-[320px] bg-black"></div>
      {/* PARAGRAPH */}
      <div className="w-7/12 space-y-3">
        <p className="font-bold text-xl">About Us</p>
        <p className="pr-8">
          We are a great entity that sells soup to any person on earth willing
          to taste our delicious mix of herbs, coconut and cacao. Originally
          crafted on the shores of Brazil, our beer is made with the greatest
          passion you'll find on the shores of Madagascar. We also sell all
          kinds of sugary sugars such as nobel prizes and arctic monkeys.
        </p>
      </div>
    </div>
  );
}
