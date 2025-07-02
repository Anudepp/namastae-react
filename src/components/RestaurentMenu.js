import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {

    const menuItems = await fetch(
      RESTAURANT_MENU_API + resId);
    const json = await menuItems.json();
    setMenuData(json);
  };

  // Safely extract restaurant info
  const { name, cuisines, costForTwo } =
    menuData?.data?.cards?.[2]?.card?.card?.info || {};

  // Safely extract itemCards array
  const itemCards =
    menuData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]?.card?.card?.itemCards || [];

  console.log(itemCards);

  return (
    <div>
      {/* Displaying the menu items  with image, price, description, rating */}
      <h1>{name}</h1>
      <h2>Cuisines: {cuisines?.join(", ")}</h2>
      <h3>Cost for Two: {costForTwo ? costForTwo / 100 : ""}</h3>
      <ul>
        {itemCards.map((item) => {
          const info = item.card?.info;
          return (
            <li key={info?.id}>
              <h4>{info?.name}</h4>
              <p>{info?.description}</p>
              <p>Price: {info?.defaultPrice / 100 || info?.price / 100 }</p>
              <p>
                Rating: {info?.ratings?.aggregatedRating?.rating || "N/A"}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
