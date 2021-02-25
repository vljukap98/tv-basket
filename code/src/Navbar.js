import logo from './misc/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <img src={logo} alt="TvBasketLogo"/>
            <div className="links">
                <Link to="/">HOME</Link>
                <Link to="/sign_in">SIGN IN</Link>
                <Link to="/register">REGISTER</Link>
                <Link to="/about">ABOUT</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;