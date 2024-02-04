import { IMAGE_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    //console.log(RestaurantsData);
    const {resData}=props;
    const resName=resData.info.name;
    const cuisine=resData.info.cuisines.join(",");
    const rating=resData.info.avgRating;
    const estimatedTime=resData.info.sla.deliveryTime;
    const imageSrcId=resData.info.cloudinaryImageId;
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img
            className="res-logo"
            alt="restaurant-logo"
            src={`${IMAGE_URL}${imageSrcId}`}
            />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating}</h4>
            <h4>{estimatedTime}</h4>
        </div>
    )
}

export default RestaurantCard;