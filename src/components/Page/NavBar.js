import { NavLink } from "react-router-dom";

function NavBar() {
    return (
      <div className="navBarContainer">
        <ul>
          <li className="nav-item"><NavLink className={({ isActive }) => (isActive ? "LinkActive" : "Link")} to="/">Home</NavLink></li>
          <li className="nav-item"><NavLink className={({ isActive }) => (isActive ? "LinkActive" : "Link")} to="/ankle">Ankle</NavLink></li>
          {/* <li className="nav-item"><NavLink className={({ isActive }) => (isActive ? "LinkActive" : "Link")} to=""></NavLink></li> */}
        </ul>
      </div>
    );
  }
  
  export default NavBar;