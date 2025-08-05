import ItemList from "./ItemList";

const RestaurantCategory = function ({ data, isShown, setShowIndex }) {
  const handleClick = function () {
    setShowIndex();
    console.log("clicked");
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 shadow-lg bg-gray-50 p-4 border border-b-0 border-gray-200 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {isShown && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
