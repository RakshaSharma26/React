import LOGO_URL from "../utils/constants.js";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src= {LOGO_URL} alt="Logo" />
            </div>
            <div className="nav-bar">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;