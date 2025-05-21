// const styleCard = { backgroundColor: "#f0f0f0" };
const RestaurantCard = ({ resData }) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.cloudinaryImageId}`}
        alt={`${name} restaurant`}
        className="res-logo"
      />
      <h3>{resData.name}</h3>
      <h4>{resData.cuisines.join(", ")}</h4>
      <h4>{resData.avgRating}</h4>
      <h4>{resData.sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
