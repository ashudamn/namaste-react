import { useState } from "react";

const RestaurantCategory = (props) => {
  const { data } = props;
  const categorySubItems = data?.card?.card?.itemCards;
  const [showSubItems,setShowSubItems] = useState(false);

  const handleShowSubItems = () =>{
    setShowSubItems(!showSubItems);
  }
  return (
    <>
      <div className="menu-category-title">
        <h3>{data?.card?.card?.title}</h3>
        <button onClick={handleShowSubItems}></button>
      </div>
      <div className="menu-category-sub-items">
        {showSubItems && categorySubItems?.map((item) => (
          <p>{item?.card?.info?.name}</p>
        ))}
      </div>
    </>
  );
};

export default RestaurantCategory;
