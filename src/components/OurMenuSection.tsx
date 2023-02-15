import MenuItemCard from "./MenuItemCard";
import MenuNavigation from "./MenuNavigation";

export default function Home() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="text-center my-5">
        <p className="font-bold">Our Menu</p>
        <p className="text-xs font-semibold">(Rate: 45,000LBP)</p>
      </div>
      <div className="flex space-x-1">
        <div className="w-1/6">
          <MenuNavigation />
        </div>
        <div className="grid grid-rows-2 grid-flow-col gap-5 pb-5 overflow-x-auto">
          <MenuItemCard />
          <MenuItemCard />
          <MenuItemCard />
          <MenuItemCard />
          <MenuItemCard />
          <MenuItemCard />
          <MenuItemCard />
          <MenuItemCard />
          <MenuItemCard />
          <MenuItemCard />
          <MenuItemCard />
        </div>
      </div>
    </div>
  );
}
