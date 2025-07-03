import { useState, useEffect } from "react";
import { RESTAURANT_MENU_API } from "./constants";
const useRestaurantMenu = resId => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    const menuItems = await fetch(RESTAURANT_MENU_API + resId);
    const json = await menuItems.json();
    setMenuData(json);
  };

  return menuData;
};

export default useRestaurantMenu;
