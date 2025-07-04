import { useState, useEffect } from "react";
import RestaurantCard, { withAggregatedDiscount } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useListOfRestaurants from "../utils/useListOfRestaurants.js";
const Body = () => {
  // const [listOfRestaurants, setListOfRestaurant] = useState([]);
  // const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  // const [searchContent, setSearchContent] = useState("");
  const {
    listOfRestaurants,
    filteredRestaurant,
    searchContent,
    setSearchContent,
    setFilteredRestaurant,
  } = useListOfRestaurants();
  const RestaurantWithDiscount = withAggregatedDiscount(RestaurantCard);
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // console.log("Body component rendered", listOfRestaurants);
  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const json = await data.json();

  //   setListOfRestaurant(
  //     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
  //       ?.restaurants || []
  //   );
  //   setFilteredRestaurant(
  //     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
  //       ?.restaurants || []
  //   );
  // };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-between p-4">
        <div className="px-4">
          <input
            type="text"
            className="border border-solid rounded-lg border-black"
            value={searchContent}
            onChange={(e) => {
              setSearchContent(e.target.value);
            }}
          />
          <button
            className="px-2 m-2 rounded-lg bg-green-300 text-white"
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
          className="px-2 bg-yellow-200 rounded-lg"
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

      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => {
          if (restaurant?.info) {
            return (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                {restaurant.info.aggregatedDiscountInfoV3 ? (
                  <RestaurantWithDiscount resData={restaurant.info} />
                ) : (
                  <RestaurantCard resData={restaurant.info} />
                )}
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
