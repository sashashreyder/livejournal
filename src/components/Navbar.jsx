import { NavLink } from "react-router-dom";
import "/src/styles/Navbar.css"; 

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
            <NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}>Profile</NavLink>
            <NavLink to="/diary" className={({ isActive }) => isActive ? "active" : ""}>Diary</NavLink>
            <NavLink to="/feed" className={({ isActive }) => isActive ? "active" : ""}>Feed</NavLink>
            <NavLink to="/search" className={({ isActive }) => isActive ? "active" : ""}>Search</NavLink>
        </nav>
    );
}

export default Navbar;


