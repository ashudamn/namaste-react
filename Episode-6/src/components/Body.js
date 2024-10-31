import { useEffect, useState } from "react";
import { getRestaurantListFromApiResponse, getExternalDataFromApi } from "../utils/utilityMethods";
import RestaurantsContainer from "./RestaurantsContainer";
import { SWIGGY_API_ENDPOINT } from "../utils/config.js";
const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredList,setFilteredList] = useState([]);
    const [searchText, setSearchText] = useState('');
    useEffect(async () => {
        let response = await getExternalDataFromApi(SWIGGY_API_ENDPOINT);
        let restList=getRestaurantListFromApiResponse(response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setRestaurantList(restList);
        setFilteredList(restList);
    }, [])

    const getFilteredRestaurants = () =>{
            let filterList = restaurantList.filter((restaurant,index)=>restaurant.name.includes(searchText));
            setFilteredList(filterList);
    }
    return <>
        <div className="input-container">
            <input type="text" value={searchText} onChange={(event) => { setSearchText(event.target.value) }}></input>
            <button onClick={()=>{getFilteredRestaurants()}}>SEARCH RESTAURANT</button>
        </div>
        <RestaurantsContainer restaurantList={filteredList}></RestaurantsContainer>
    </>;
};

export default Body;