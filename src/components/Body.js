import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";

const Body = () => {
  // Holds the full list fetched from the API (original data, never mutated)
  const [allRestaurants, setAllRestaurants] = useState([]);

  // Holds the list shown on the UI (filtered or searched data)
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // Holds the current search text
  const [searchText, setSearchText] = useState("");

  // Fetch data once when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.0072341&lng=79.55839209999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    // Store full list in both states on initial load
    setAllRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  };

  // Show shimmer while loading
  if (allRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const searchList = allRestaurants.filter((restaurant) =>
              restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(searchList);
          }}
        >
          Search
        </button>
      </div>

      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = allRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.5
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      {filteredRestaurants.length === 0 ? (
        <p>No restaurants found.</p>
      ) : (
        <div className="res-container">
          {filteredRestaurants.map((restaurant) => (
            <RestaurentCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;