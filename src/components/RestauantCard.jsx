// const styleCard = { backgroundColor: "#f0f0f0" };
const RestaurantCard = ({ resData }) => {
  const { name, cuisines = [], rating, deliveryTime } = resData;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        src="https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg"
        alt={`${name} restaurant`}
        className="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{rating}</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
