// const styleCard = { backgroundColor: "#f0f0f0" };
const RestaurantCard = ({ resData }) => {
  return (
    <div className="w-56  m-4 rounded-sm p-4 bg-gray-50 hover:bg-gray-200">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.cloudinaryImageId}`}
        alt={`${name} restaurant`}
        className="rounded-md h-48 w-48 object-cover"
      />
      <h3 className="font-bold py-4 text-lg">{resData.name}</h3>
      <h4 className="text-sm">{resData.cuisines.join(", ")}</h4>
      <div className="flex justify-between text-sm p-2">
        <h4>{resData.avgRating}</h4>
        <h4>{resData.sla.deliveryTime} mins</h4>
      </div>
    </div>
  );
};

export const withAggregatedDiscount = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-1 p-1 bg-black text-white rounded-md text-sm">
          Discount Available
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
