import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "/src/styles/Navbar.css"; 

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-links">
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                <NavLink to="/diary" className={({ isActive }) => isActive ? "active" : ""}>Diary</NavLink>
                <NavLink to="/feed" className={({ isActive }) => isActive ? "active" : ""}>Feed</NavLink>
                <NavLink to="/search" className={({ isActive }) => isActive ? "active" : ""}>Search</NavLink>
            </div>
            
            <NavLink to="/profile" className="profile-icon">
                <FontAwesomeIcon icon={faUser} />
            </NavLink>
        </nav>
    );
}

export default Navbar;



