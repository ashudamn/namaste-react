import { useEffect, useState } from "react";
import { getRestaurantListFromApiResponse,getRestaurantsFromJsonResponse } from "./utilityMethods";

const useRestaurantsHook = (apiEndPoint,callback1,callback2) =>{
    const [restaurants,setRestaurants] = useState(null)

    useEffect(()=>{
        fetchRestaurantsData();
    },[]);
    useEffect(()=>{
            if(restaurants){
                let resList = getRestaurantListFromApiResponse(getRestaurantsFromJsonResponse(restaurants));
                callback1(resList);
                callback2(resList);
            }
        },[restaurants]);
    const fetchRestaurantsData = async () =>{
        const data = await fetch(apiEndPoint);
        const restaurantsJson = await data.json();
        setRestaurants(restaurantsJson);
    }
}

export default useRestaurantsHook;