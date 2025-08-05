// import { useState, useEffect } from "react";
// const useListOfRestaurants = function () {
//   const [listOfRestaurants, setListOfRestaurant] = useState([]);
//   const [filteredRestaurant, setFilteredRestaurant] = useState([]);
//   const [searchContent, setSearchContent] = useState("");
//   useEffect(() => {
//     fetchData();
//   }, []);
//   const fetchData = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );
//     const json = await data.json();

//     setListOfRestaurant(
//       json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
//         ?.restaurants || []
//     );
//     setFilteredRestaurant(
//       json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
//         ?.restaurants || []
//     );
//   };
//   return {
//     listOfRestaurants,
//     filteredRestaurant,
//     searchContent,
//     setFilteredRestaurant,
//     setSearchContent,
//   };
// };
// export default useListOfRestaurants;

import { useState, useEffect } from "react";

const useListOfRestaurants = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchContent, setSearchContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.6141396&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();

      // Try to find the correct card containing restaurants
      const cards = json?.data?.cards || [];

      let restaurants = [];

      for (let i = 0; i < cards.length; i++) {
        const gridRestaurants =
          cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if (gridRestaurants) {
          restaurants = gridRestaurants;
          break;
        }
      }

      setListOfRestaurants(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (err) {
      console.error("Error fetching restaurant list:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    listOfRestaurants,
    filteredRestaurant,
    searchContent,
    setFilteredRestaurant,
    setSearchContent,
    isLoading,
  };
};

export default useListOfRestaurants;
