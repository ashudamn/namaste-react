import { LOGO_URL } from "../utils/constants";
// this is a named export

const Header=()=>{
    return (
        <div className="header">
            <div className="logo-container">
            <div className="logo">
                <img src={LOGO_URL}></img>
            </div>
            </div>
            <div className="nav-items">
                <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>

                </ul>
            </div>
        </div>
    )
}

export default Header;