import RestaurantCard from "./RestaurantCard";

export default RestaurantsContainer = (props) => {
    const { restaurantList } = props;
    return <>
        <div className="res-container">
            {restaurantList.map((restaurant, index) => (
                <RestaurantCard key={restaurant.id} restaurantData={restaurant}></RestaurantCard>
            ))}
        </div>
    </>;
};