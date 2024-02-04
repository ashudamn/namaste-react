import restaurants from "../utils/mockRestaurantData";
import RestaurantCard from "./RestaurantCard";
import {useState} from "react";
const Body=()=>{
    debugger;
    const[listOfRestuarants,setListOfRestaurants]=useState(restaurants);
    return (
        <div className="body-container">
            <div className="search"> <button onClick={()=>{
                let newListRes=listOfRestuarants.filter(res=>res.info.avgRating>4);
                setListOfRestaurants(newListRes);
            }}>Top Restuarants</button></div>
          

            <div className="res-container" >
               {
                       listOfRestuarants.map((restaurant,index)=>(
                        <RestaurantCard resData={restaurant} 
                       key={restaurant.info.id} 
                        />
               )
               )
              }
              
            </div>
        </div>
    )
   }
   
export default Body;   