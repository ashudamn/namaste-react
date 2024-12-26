import { Link } from "react-router-dom";
import useUserOnlineStatus from "../utils/useUserOnlineStatus";

const Header = () => {
    const online = useUserOnlineStatus();
    return <>
        <div className='header-container'>
            <div>
            {online?<span>online</span>:<span>offline</span>}
            </div>
            <div>
                <Link to={"/About"}>About</Link>
            </div>
            <div>
            <Link to={"/Contact"}> Contact </Link>
            </div>
            <div>
            <Link to={"/"}> Home </Link>
            </div>
        </div>
    </>
}

export default Header;