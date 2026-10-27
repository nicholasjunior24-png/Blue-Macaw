import { NavLink, Link } from "react-router-dom";
import "./Navbar.css"

function Navbar () {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">
               Blue Macaw Technologies
            </Link>
            <div className="navbar-links">
                <NavLink to="/"end>Home</NavLink>
                <NavLink to="/Services">Services</NavLink>
                <NavLink to="/Prices">Prices</NavLink>
                <NavLink to="/About">About</NavLink>
                <NavLink to="/Contacts">Contacts</NavLink>
            </div>
        </nav>
           

    )
}

export default Navbar;