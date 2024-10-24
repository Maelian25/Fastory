import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.auth);

  const handleLogin = async (e) => {
    e.preventDefault();
    await dispatch(login(username, password));

    if (localStorage.getItem("token")) {
      navigate("/");
    }
  };

  return (
    <div className="login-container">
      <h2 className="title">Connexion</h2>
      <form onSubmit={handleLogin} className="form">
        <div className="input-group">
          <label>Nom d'utilisateur :</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Entrez votre nom d'utilisateur"
          />
        </div>
        <div className="input-group">
          <label>Mot de passe :</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Entrez votre mot de passe"
          />
        </div>
        <button type="submit" className="submit-button">
          Se connecter
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Login;
