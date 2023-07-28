import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Active</NavLink>
      <NavLink to="/archived">Archived</NavLink>
    </nav>
  );
};
