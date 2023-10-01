import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  // Link hace la navegación pero navLink es mejor para navegaciones...
  // agrega por ejemplo la clase active en el que clickeo (solo si trabajamos con boostrap)
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <NavLink className="btn btn-outline-primary" to="/">
          Inicio
        </NavLink>
        <NavLink className="btn btn-outline-primary" to="/blog">
          Blog
        </NavLink>
        <NavLink className="btn btn-outline-primary" to="/contacto">
          Contacto
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
