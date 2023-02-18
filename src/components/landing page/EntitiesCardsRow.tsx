import EntityCard from "../EntityCard";

export default function Home() {
  return (
    <div className="grid grid-rows-1 grid-flow-col gap-5 pb-5 overflow-x-auto">
      <EntityCard />
      <EntityCard />
      <EntityCard />
      <EntityCard />
      <EntityCard />
      <EntityCard />
    </div>
  );
}
