import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      <div className="navbar-left">
        <Link to="/">
          <span className="navbar-title">SELLIT</span>
        </Link>
      </div>

      <div className="navbar-right">
        {isLoggedIn && (
          <>
            <button onClick={logOutUser}>Logout</button>

            <Link to="/profile">
              <button>Profile</button>
            </Link>

            <span>{user && user.name}</span>
          </>
        )}

        {!isLoggedIn && (
          <>
            <Link to="/signup">
              <button>Sign Up</button>
            </Link>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </>
        )}
        
      </div>
    </nav>
  );
}

export default Navbar;