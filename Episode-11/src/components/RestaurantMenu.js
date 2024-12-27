import { ITEM_CATEGORY } from "../utils/config";
import useRestaurantMenuHook from "../utils/useRestaurantMenuHook";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RESTAURANT_ITEM_CATEGORY } from "../utils/config";
import RestaurantCategory from "./RestaurantCategory";

export default RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);
  let resInfo = useRestaurantMenuHook(resId);
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const differentCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const categoryItems = differentCards.filter((item) => {
    return item?.card?.card?.["@type"] === RESTAURANT_ITEM_CATEGORY;
  });
  console.log(categoryItems);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Restaurant Categories</h2>
      {
        categoryItems.map((category)=><RestaurantCategory key={category?.card?.card?.title} data={category}/>)
      }
    </div>
  );
};
