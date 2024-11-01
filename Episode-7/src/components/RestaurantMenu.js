import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/config";

export default RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetch(MENU_API + resId)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data?.data);
        setResInfo(data?.data);
      });
  }, []);

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
