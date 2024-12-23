import { useEffect, useState } from "react";
import {
  getRestaurantListFromApiResponse,
  getExternalDataFromApi,
  getRestaurantsFromJsonResponse,
} from "../utils/utilityMethods";
import RestaurantsContainer from "./RestaurantsContainer";
import { SWIGGY_API_ENDPOINT } from "../utils/config.js";
import Shimmer from "./Shimmer";
const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    getExternalDataFromApi(SWIGGY_API_ENDPOINT)
      .then((data) => {
        return data.json();
      })
      .then((response) => {
        let restList = getRestaurantListFromApiResponse(
          getRestaurantsFromJsonResponse(response)
        );
        setRestaurantList(restList);
        setFilteredList(restList);
      });
  }, []);

  const getFilteredRestaurants = () => {
    let filterList = restaurantList.filter((restaurant, index) =>
      restaurant.name.includes(searchText)
    );
    setFilteredList(filterList);
  };
  if(restaurantList.length===0) return <Shimmer/>
  return (
    <>
      <div className="input-container">
        <input
          type="text"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            getFilteredRestaurants();
          }}
        >
          SEARCH RESTAURANT
        </button>
      </div>
      <RestaurantsContainer
        restaurantList={filteredList}
      ></RestaurantsContainer>
    </>
  );
};

export default Body;
