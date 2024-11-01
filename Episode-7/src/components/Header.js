import { Link } from "react-router-dom";

const Header = () => {
    return <>
        <div className='header-container'>
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