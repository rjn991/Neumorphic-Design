import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={classes.wrapper}>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? classes.active : ""
        }
        to="/"
      >
        Page 1
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? classes.active : ""
        }
        to="/view"
      >
        Page 2
      </NavLink>
    </div>
  );
};
export default Navbar;
