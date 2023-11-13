import React from "react";
import  ReactDOM  from "react-dom/client";
import RestaurantsData from "./assets/restaurants.json";


const Header=()=>{
    return (
        <div className="header">
            <div className="logo-container">
            <div className="logo">
                <img src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png"></img>
            </div>
            </div>
            <div className="nav-items">
                <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>

                </ul>
            </div>
        </div>
    )
}
const RestaurantCard=(props)=>{
    //console.log(RestaurantsData);
    const {resName,rating,estimatedTime,cuisine}=props;
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img
            className="res-logo"
            alt="restaurant-logo"
            src="https://www.thechunkychef.com/wp-content/uploads/2014/12/Spicy-Thai-Noodles-5.jpg"
            />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating}</h4>
            <h4>{estimatedTime}</h4>
        </div>
    )
}
const Body=()=>{
 return (
     <div className="body-container">
         <div className="search">Search</div>
         <div className="res-container" >
            {
           RestaurantsData && RestaurantsData.restaurants.map((restaurant,index)=>{
                    console.log(restaurant.info);
                    return <RestaurantCard resName={restaurant.info.name} 
                    key={restaurant.info.id} 
                    cuisine={restaurant.info.cuisines.join(",")}
                    rating={restaurant.info.avgRating}
                    estimatedTime={restaurant.info.sla.deliveryTime} />
            })
            }
            {/*
            <RestaurantCard resName="Oye kiddan" cuisine="Biryani, North Indian, Asian" rating="4 stars" estimatedTime="30 minutes"/>
            <RestaurantCard resName="Burger King" cuisine="Burgers, Wraps" rating="4.5 stars" estimatedTime="10 minutes"/>
            */}
           
         </div>
     </div>
 )
}


const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);