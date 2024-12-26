import { IMAGE_URL } from "../utils/config";

const RestaurantCard = (props) => {
    const { restaurantData } = props;
    const { name, cuisines, rating, deliveryTime, imageSrcId } = restaurantData;
    return <><div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
            className="res-logo"
            alt="restaurant-logo"
            src={`${IMAGE_URL}${imageSrcId}`}
        />
        <h3>{name}</h3>
        <h4>{cuisines}</h4>
        <h4>{rating}</h4>
        <h4>{deliveryTime}</h4>
    </div></>;
}

export const withVegRestaurantHoc = (WrappedComponent) =>{
    return (props)=>{
        return (<div>
            <label className="pure-veg">Pure Veg</label>
            <WrappedComponent {...props}/>
        </div>)
    }
}

export default RestaurantCard;