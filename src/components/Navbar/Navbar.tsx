import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-sky-500 p-5">
      <NavLink className="link me-3" to="/">
        Active
      </NavLink>
      <NavLink className="link" to="/archived">
        Archived
      </NavLink>
    </nav>
  );
};
