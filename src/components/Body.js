import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  //Create a local state variable using useState hook
  //useState returns an array with two elements: the current state and a function to update.
  //the default value of the state variable is resList
  //resList is an array of restaurant objects imported from mockData.js
  //We can use the setListOfRestaurants function to update the state variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  // Create a local state variable for search text
  // This will hold the text entered by the user in the search input field
  // The default value is an empty string
  // We can use the setSearchText function to update the search text
  const [searchText, setSearchText] = useState("");

  // Create a useEffect Hook
  useEffect(() => {
    fetchData();
  }, []);
  // The empty dependency array means this effect will run only once when the component mounts
  // Inside the useEffect, we call the fetchData function to fetch the restaurant data from the API and update the listOfRestaurants state variable with the fetched data

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.0072341&lng=79.55839209999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
  };

  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurants..."
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const searchList = resList.filter(restaurant =>
              restaurant.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            setListOfRestaurants(searchList);
          }}
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              restaurant => restaurant.info.avgRating > 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map(restaurant =>
          <RestaurentCard key={restaurant.info.id} resData={restaurant} />
        )}
      </div>
    </div>
  );
};

export default Body;
