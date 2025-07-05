import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import CategoryAccordion from "./CategoryAccordion";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menuData = useRestaurantMenu(resId);

  const { name, cuisines, costForTwo } =
    menuData?.data?.cards?.[2]?.card?.card?.info || {};

  const categories =
    menuData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];
  console.log("Categories:", categories);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{name}</h1>
        <h2 className="text-lg text-gray-700">Cuisines: {cuisines?.join(", ")}</h2>
        <h3 className="text-md text-gray-600 mt-1">
          Cost for Two: ₹{costForTwo ? costForTwo / 100 : ""}
        </h3>
      </div>

      {/* Render Accordion by Category */}
      {categories.map((category) => (
        <CategoryAccordion
          key={category.card.card.title}
          title={category.card.card.title}
          itemCards={category.card.card.itemCards}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;