import logo from './misc/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="flex space-x-10 justify-evenly">
            <div>
                <Link to="/"><img src={logo} alt="TvBasketLogo"/></Link>
            </div>
            <div className="space-x-36">
                <Link to="/">HOME</Link>
                <Link to="/sign_in">SIGN IN</Link>
                <Link to="/register">REGISTER</Link>
                <Link to="/about">ABOUT</Link>
            </div>
            <div className="flex justify-evenly space-x-2">
                <p>Jon Doe</p>
                <div className="border-4 w-2 h-2 border-indigo-500"></div>
            </div>
        </nav>
     );
}
 
export default Navbar;