import { SWIGGY_CDN_URL } from "../utils/constants"; //since we are importing named export from constants.js we have to use curly braces
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
    <div className="res-card">
      <img
        className="res-image"
        src={SWIGGY_CDN_URL + cloudinaryImageId} // Using template literals to construct the image URL"
        alt="Restaurant"
      />
      <h3 className="res-name">
        {name}
      </h3>
      <h4>
        <span className="res-cuisine">
          Cuisine: {cuisines.join(", ")}
        </span>
      </h4>
      <span className="res-rating">
        Rating : {avgRating}
      </span>
      <h4 />
      <h4>
        <span className="res-cost">
          Cost per 2 person: {costForTwo}
        </span>
      </h4>
      <h4>
        <span className="res-delivery-time">
          Delivery Time: {sla.deliveryTime} mins
        </span>
      </h4>
      <h4>
        <span className="res-locality">
          Locality: {locality}, {areaName}
        </span>
      </h4>
    </div>
  );
};

export default RestaurentCard;
