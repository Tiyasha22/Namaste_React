import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, itemCards, isLoading, error, category } =
    useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
  if (isLoading) return <Shimmer />;

  if (error) return <div className="error">Error: {error}</div>;

  if (!resInfo) return <div>No restaurant information available</div>;

  const { name, cuisines, avgRating } = resInfo;
  console.log(category);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h2 className="text-lg font-bold">{cuisines.join(", ")}</h2>
      <h3>Rating: {avgRating}</h3>
      {/* <h2>Menu</h2> */}
      {/* <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul> */}
      {category.map((cat, index) => (
        <RestaurantCategory
          key={cat.card.card.categoryId}
          data={cat?.card?.card}
          isShown={index === showIndex && false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
