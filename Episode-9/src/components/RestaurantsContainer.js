import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

export default RestaurantsContainer = (props) => {
  const { restaurantList } = props;
  return (
    <>
      <div className="res-container">
        {restaurantList.map((restaurant, index) => (
          <Link key={restaurant.id} to={"/restaurants/" + restaurant.id}>
            <RestaurantCard restaurantData={restaurant}></RestaurantCard>
          </Link>
        ))}
      </div>
    </>
  );
};
