import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import "./Navbar.css"; // Asegúrate de importar tus estilos CSS

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img
            src="/sellit-.png" // Reemplaza con la ruta correcta de tu imagen
            alt="Sellit"
            className="navbar-logo"
          />
        </Link>
      </div>

      <div className="navbar-right">
        {isLoggedIn && (
          <>
            <button className="navbar-button" onClick={logOutUser}>
              Logout
            </button>

            <Link to="/profile">
              <button className="navbar-button">Profile</button>
            </Link>

            <span className="navbar-username">
              {user && user.name}
            </span>
          </>
        )}

        {!isLoggedIn && (
          <>
            <Link to="/signup">
              <button className="navbar-button">Sign Up</button>
            </Link>
            <Link to="/login">
              <button className="navbar-button">Login</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
