import RestaurantCard, { withVegRestaurantHoc } from "./RestaurantCard";
import { Link } from "react-router-dom";

export default RestaurantsContainer = (props) => {
  const { restaurantList } = props;
  const RestaurantWithPureVeg= withVegRestaurantHoc(RestaurantCard);
  return (
    <>
      <div className="res-container">
        {restaurantList.map((restaurant, index) => (
          <Link key={restaurant.id} to={"/restaurants/" + restaurant.id}>
           {
            restaurant.pureVeg?<RestaurantWithPureVeg restaurantData={restaurant}/>:<RestaurantCard restaurantData={restaurant}/>}
          </Link>
        ))}
      </div>
    </>
  );
};
