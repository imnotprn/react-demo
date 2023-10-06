import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.menu}>
        <p>Navbar</p>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.active : classes.inactive
          }
          to="/"
        >
          Feed
        </NavLink>
      </div>
      <div className={classes.menu}>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.active : classes.inactive
          }
          to="/profile"
        >
          Profile
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.active : classes.inactive
          }
          to="/create"
        >
          Create
        </NavLink>
        <Link to="/login" className={classes.login}>
          Login
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
