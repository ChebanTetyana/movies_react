// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header() {
    return <nav className="indigo darken-4">
    <div className="nav-wrapper container">
      <a href="#" className="brand-logo">Movies by Tanya</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About me</NavLink>
          </li>
      </ul>
    </div>
  </nav>
        
}

export default Header;
