import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withIsOpen } from "./RestaurentCard";

const Body = () => {
  // Holds the full list fetched from the API (original data, never mutated)
  const RestaurentCardWithIsOpen = withIsOpen(RestaurentCard);
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
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.0072341&lng=79.55839209999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      // Optional chaining for safer access
      const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      console.log(restaurants);

      // Store full list in both states on initial load
      setAllRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error gracefully, e.g., show an error message to the user
    }
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-bold text-red-600">
        <h1>Please check your internet connection ❌</h1>
      </div>
    );
  }

  // Show shimmer while loading
  if (allRestaurants.length === 0 && filteredRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search and Filter Container */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
        {/* Search Bar */}
        <div className="flex w-full sm:w-2/3 md:w-1/2 lg:w-1/3"> {/* Reduced width for search bar */}
          <input
            type="text"
            className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-700 placeholder-gray-400 text-sm" 
            placeholder="Search for restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600 transition duration-300 font-semibold shadow-md text-sm" 
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

        {/* Filter Button */}
        <div className="w-full sm:w-auto">
          <button
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition duration-300 font-semibold shadow-md text-sm" 
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
      </div>

      {/* Restaurant Container */}
      {filteredRestaurants.length === 0 && allRestaurants.length > 0 ? (
        <p className="text-center text-xl text-gray-600 font-medium mt-10">No restaurants found matching your search.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
          {filteredRestaurants.map((restaurant) => (
            <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`} className="block">
              {/* Use the wrapped RestaurentCard component */}
              { restaurant.info.isOpen ? (
    <RestaurentCardWithIsOpen resData={restaurant} />
  ) : (
    <RestaurentCard resData={restaurant} />
)}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;