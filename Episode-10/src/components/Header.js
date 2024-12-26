import { Link } from "react-router-dom";
import image_food_delivery from "../../assets/food-delivery-image.jpg";

const Header = () => {
  return (
    <>
      <div className="header-container flex justify-between">
        <div>
          <img
            className="w-28"
            src={image_food_delivery}
          />
        </div>
        <div > 
          <ul className="flex p-10">
            <li className="ml-4">
            <Link to={"/About"}>About</Link>
            </li>
            <li className="ml-4">
            <Link to={"/Contact"}> Contact </Link>
            </li>
            <li className="ml-4">
            <Link to={"/"}> Home </Link>
            </li>
        </ul>
      </div>
      </div>
    </>
  );
};

export default Header;
