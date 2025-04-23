import { useState, useEffect } from "react";
import RestaurantCard from "./RestauantCard";
import { resData } from "../utils/mockData";

const Body = () => {
  console.log("Body component rendered");

  const [listOfRestaurants, setListOfRestaurant] = useState(resData);

  useEffect(() => {
    console.log("useEffect called");
  }, []);
  console.log("Before returning JSX");
  return (
    <div className="body">
      <button
        onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (restaurant) => restaurant.data.rating > 4
          );
          setListOfRestaurant(filteredList);
        }}
      >
        Top Rated Restaurants
      </button>

      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant.data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
