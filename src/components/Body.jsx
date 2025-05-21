import { useState, useEffect } from "react";
import RestaurantCard from "./RestauantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  console.log("Body component rendered");

  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchContent, setSearchContent] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchContent}
            onChange={(e) => {
              setSearchContent(e.target.value);
            }}
          />
          <button
            className="btn-search"
            onClick={() => {
              //filter the restaurant card and update the ui
              const searchRestaurants = listOfRestaurants.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchContent.toLowerCase())
              );

              setFilteredRestaurant(searchRestaurants);
              console.log(searchRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            // console.log("listOfRestaurants", listOfRestaurants);

            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 2
            );
            // console.log("filteredList", filteredList);

            setFilteredRestaurant(filteredList);
            // console.log("listOfRestaurants", listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurant) => {
          if (restaurant?.info) {
            // console.log(restaurant.info);
            return (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <RestaurantCard resData={restaurant.info} />
              </Link>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Body;
