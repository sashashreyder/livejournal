import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "/src/styles/Navbar.css"; 
import { useState } from "react";

function Navbar() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <nav className="navbar">
            <div className="nav-links">
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                <NavLink to="/diary" className={({ isActive }) => isActive ? "active" : ""}>Diary</NavLink>
                <NavLink to="/feed" className={({ isActive }) => isActive ? "active" : ""}>Feed</NavLink>
            </div>

            <div className="navbar-right">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <NavLink to="/profile" className="profile-icon">
                    <FontAwesomeIcon icon={faUser} />
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;




