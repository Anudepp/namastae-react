import { SWIGGY_CDN_URL } from "../utils/constants";

const RestaurentCard = props => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    locality,
    areaName
  } = resData.info;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 shadow-md">
      <img
        className="rounded-lg h-40 w-full object-cover mb-3"
        src={SWIGGY_CDN_URL + cloudinaryImageId}
        alt="Restaurant"
      />
      <h3 className="font-bold text-lg text-gray-800 truncate mb-1">
        {name}
      </h3>
      <h4 className="text-sm text-gray-600 mb-2 truncate">
        <span className="res-cuisine">
          {cuisines.join(", ")}
        </span>
      </h4>
      <div className="flex items-center justify-between mb-2">
        <span
          className={`text-sm font-semibold ${avgRating >= 4
            ? "text-green-600"
            : avgRating >= 3 ? "text-orange-500" : "text-red-500"}`}
        >
          ⭐ {avgRating}
        </span>
        <span className="text-sm text-gray-700">
          {costForTwo}
        </span>
      </div>
      <h4 className="text-sm text-gray-700 mb-1">
        <span className="res-delivery-time">
          {sla.deliveryTime} mins
        </span>
      </h4>
      <h4 className="text-xs text-gray-500">
        <span className="res-locality">
          {locality}, {areaName}
        </span>
      </h4>
    </div>
  );
};

export const withIsOpen = RestaurentCard => {
  return props => {
    return (
      <div className="relative">
        <div className="absolute top-0 left-0 bg-green-600 text-white text-xs px-2 py-1 rounded-br-md shadow-md z-10">
          Enjoy your meal
        </div>
        <RestaurentCard {...props} />
      </div>
    );
  };
};

export default RestaurentCard;
