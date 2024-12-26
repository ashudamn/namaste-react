
export const getRestaurantListFromApiResponse = (restaurants) => {

    return restaurants.map((restaurant, index) => ({
        name: restaurant.info.name,
        imageSrcId: restaurant.info.cloudinaryImageId,
        cuisines: restaurant.info.cuisines.join(','),
        rating: restaurant.info.avgRating,
        deliveryTime: restaurant.info.sla.deliveryTime,
        id:restaurant.info.id,
        pureVeg:restaurant.info.veg
    }))
}

export const getExternalDataFromApi = (url) => {
     return fetch(url);
}

export const getRestaurantsFromJsonResponse = (response) => {
    return response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
}