import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const goBackToHome = () => {
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h1 onClick={goBackToHome} className="navbar-title">
        SWAPI Explorer
      </h1>
      <div className="navbar-actions">
        {token && (
          <button className="logout-button" onClick={handleLogout}>
            Déconnexion
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
