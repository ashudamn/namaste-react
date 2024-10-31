
export const getRestaurantListFromApiResponse = (restaurants) => {

    return restaurants.map((restaurant, index) => ({
        name: restaurant.info.name,
        imageSrcId: restaurant.info.cloudinaryImageId,
        cuisines: restaurant.info.cuisines.join(','),
        rating: restaurant.info.avgRating,
        deliveryTime: restaurant.info.sla.deliveryTime,
        id:restaurant.info.id
    }))
}

export const getExternalDataFromApi = async (url) => {
    let apiResponse = await fetch(url);
    let json = apiResponse.json();
    return json;
}