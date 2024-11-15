import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-vintage-dark bg-opacity-90 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-vintage-accent/20">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="space-x-6 font-playfair">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-vintage-accent transition ${
                isActive ? "text-vintage-accent" : "text-vintage-text"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-vintage-accent transition ${
                isActive ? "text-vintage-accent" : "text-vintage-text"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `hover:text-vintage-accent transition ${
                isActive ? "text-vintage-accent" : "text-vintage-text"
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-vintage-accent transition ${
                isActive ? "text-vintage-accent" : "text-vintage-text"
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
