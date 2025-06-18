import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";

const Body = () => {
  const resList2 = [
    {
      info: {
        id: "77013",
        name: "KFC",
        locality: "Adalath Circle",
        areaName: "Hanamakonda",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
        avgRating: 4.3
      }
    },
    {
      info: {
        id: "77014",
        name: "KFC",
        locality: "Adalath Circle",
        areaName: "Hanamakonda",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
        avgRating: 4.3
      }
    }
  ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const resList2 = resList.filter(
              restaurant => restaurant.info.avgRating > 4.5
            );
            console.log(resList2);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resList.map(restaurant =>
          <RestaurentCard key={restaurant.info.id} resData={restaurant} />
        )}
      </div>
    </div>
  );
};

export default Body;
