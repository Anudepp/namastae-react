import RestaurentCard from "./RestaurentCard";
import { useState, useEffect, useMemo, useCallback } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withIsOpen } from "./RestaurentCard";

const Body = () => {
  const RestaurentCardWithIsOpen = withIsOpen(RestaurentCard);

  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  // Fetch data on mount
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.0072341&lng=79.55839209999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setAllRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Debouncing
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchText);
    }, 500); 
    return () => clearTimeout(handler);
  }, [searchText]);

  // useMemo for optimized filtering
  const filteredRestaurants = useMemo(() => {
    if (!debouncedSearchTerm.trim()) {
      return allRestaurants;
    }
    return allRestaurants.filter((restaurant) =>
      restaurant.info.name
        .toLowerCase()
        .includes(debouncedSearchTerm.toLowerCase())
    );
  }, [debouncedSearchTerm, allRestaurants]);

  // useCallback for Search Button
  const handleSearchClick = useCallback(() => {
    const searchList = allRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDebouncedSearchTerm(searchText); // instantly updates the debounced value
  }, [searchText, allRestaurants]);

  // useCallback for Top Rated Button
  const handleTopRatedClick = useCallback(() => {
    const filteredList = allRestaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4.5
    );
    setDebouncedSearchTerm(""); // reset search
    setAllRestaurants(filteredList);
  }, [allRestaurants]);

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-bold text-red-600">
        <h1>Please check your internet connection ❌</h1>
      </div>
    );
  }

  if (allRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search and Filter Container */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
        {/* Search Bar */}
        <div className="flex w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
          <input
            type="text"
            className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-700 placeholder-gray-400 text-sm"
            placeholder="Search for restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600 transition duration-300 font-semibold shadow-md text-sm"
            onClick={handleSearchClick}
          >
            Search
          </button>
        </div>

        {/* Filter Button */}
        <div className="w-full sm:w-auto">
          <button
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition duration-300 font-semibold shadow-md text-sm"
            onClick={handleTopRatedClick}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      {/* Restaurant Cards */}
      {filteredRestaurants.length === 0 ? (
        <p className="text-center text-xl text-gray-600 font-medium mt-10">
          No restaurants found matching your search.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
          {filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={`/restaurant/${restaurant.info.id}`}
              className="block"
            >
              {restaurant.info.isOpen ? (
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