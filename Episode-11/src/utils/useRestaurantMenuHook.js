import { useEffect, useState } from "react"
import { MENU_API } from "./config";

const useRestaurantMenuHook=(resId)=>{

    const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenuData(resId);
    },[]);

    
    const fetchMenuData=async (resId)=>{
        const data = await fetch(MENU_API+resId);
        const restaurants = await data.json();
        setResInfo(restaurants.data);
    }
    return resInfo;
}

export default useRestaurantMenuHook;