import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, itemCards, isLoading, error } = useRestaurantMenu(resId);

  if (isLoading) return <Shimmer />;
  
  if (error) return <div className="error">Error: {error}</div>;
  
  if (!resInfo) return <div>No restaurant information available</div>;

  const { name, cuisines, avgRating } = resInfo;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>Rating: {avgRating}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
