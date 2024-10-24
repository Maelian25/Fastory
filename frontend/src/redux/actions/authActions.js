import axios from "axios";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

export const login = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:3001/login", {
      username,
      password,
    });
    const token = response.data.token;
    localStorage.setItem("token", token);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: token,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: "Erreur de connexion. Veuillez vérifier vos identifiants.",
    });
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  return {
    type: LOGOUT,
  };
};
