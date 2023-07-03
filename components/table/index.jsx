import Thead from "./thead";
import Tbody from "./tbody";
export default function Table({ data, renderPageLink }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <Thead />
        <Tbody data={data} renderPageLink={renderPageLink} />
      </table>
    </div>
  );
}
