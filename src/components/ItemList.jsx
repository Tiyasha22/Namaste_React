import { CDN_URL } from "../utils/constant";

const ItemList = function ({ items }) {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2  border-b-4 text-left font-bold flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>- ₹{item.card.info.price / 100}</span>
            </div>
            <p className="text-xs text-gray-500">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12">
            <div className="absolute">
              <button className="mx-16 p-2 bg-white shadow-lg rounded-lg">
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
