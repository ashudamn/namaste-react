import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantsData from "./assets/restaurants.json";


const Header = () => {
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
const RestaurantCard = (props) => {
    console.log(props);
    const { resData } = props;
    const { name, avgRating, cuisines, cloudinaryImageId } = resData;
    const estimatedTime = resData.sla.deliveryTime;
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img
                className="res-logo"
                alt="restaurant-logo"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
            />
            <h3>{name}</h3>
            <h4>{cuisines?.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{estimatedTime} minutes</h4>
        </div>
    )
}
const Body = () => {
    return (
        <div className="body-container">
            <div className="search">Search</div>
            <div className="res-container" >
                {
                    RestaurantsData.restaurants.map((restaurant, index) => (
                        <RestaurantCard resData={restaurant.info}
                            key={restaurant.info.id}
                            />
                    )
                    )
                }

            </div>
        </div>
    )
}


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);