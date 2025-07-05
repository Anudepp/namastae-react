import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menuData = useRestaurantMenu(resId);

  const { name, cuisines, costForTwo } =
    menuData?.data?.cards?.[2]?.card?.card?.info || {};

  const itemCards =
    menuData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]?.card?.card?.itemCards || [];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{name}</h1>
        <h2 className="text-lg text-gray-700">Cuisines: {cuisines?.join(", ")}</h2>
        <h3 className="text-md text-gray-600 mt-1">
          Cost for Two: ₹{costForTwo ? costForTwo / 100 : ""}
        </h3>
      </div>

      <ul className="space-y-6">
        {itemCards.map((item) => {
          const info = item.card?.info;
          return (
            <li
              key={info?.id}
              className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <h4 className="text-xl font-semibold mb-1">{info?.name}</h4>
              {info?.description && (
                <p className="text-gray-600 mb-2">{info.description}</p>
              )}
              <p className="text-gray-800 font-medium">
                Price: ₹{info?.defaultPrice / 100 || info?.price / 100}
              </p>
              <p className="text-sm text-gray-500 mt-1">
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