import {useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [itemCards, setItemCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      );
      
      if (!data.ok) {
        throw new Error('Failed to fetch menu data');
      }

      const json = await data.json();
      
      const restaurantInfo = json?.data?.cards[2]?.card?.card?.info;
      const items =
        json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card?.itemCards || [];

      setResInfo(restaurantInfo);
      setItemCards(items);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching menu:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return { resInfo, itemCards, isLoading, error };
};

export default useRestaurantMenu;
