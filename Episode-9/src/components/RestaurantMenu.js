import useRestaurantMenuHook from "../utils/useRestaurantMenuHook";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

export default RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);
  let resInfo = useRestaurantMenuHook(resId);
  if (resInfo === null) return <Shimmer />;
  
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);
  return (<div className="menu">
    <h1>{name}</h1>
    <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
    <h2>Menu</h2>
    <ul>
        {
            itemCards.map((item)=>{
                return <li key={item.card.info.id}>
                    {item.card.info.name} - {" Rs. "}
                    {item.card.info.price/100 || item.card.info.defaultPrice/100}
                </li>
})
        }
    </ul>
  </div>);
};
