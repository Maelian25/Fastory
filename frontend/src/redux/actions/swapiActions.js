import axios from "axios";

export const SET_RESULTS = "SET_RESULTS";
export const SET_FILTER = "SET_FILTER";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const SET_DETAIL = "SET_DETAIL";
export const CLEAR_RESULTS = "CLEAR_RESULTS";

export const searchSwapi = (query, type, token) => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });

  try {
    const response = await axios.get("http://localhost:3001/search", {
      params: { query, type },
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch({ type: SET_RESULTS, payload: response.data.results });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: "Erreur lors de la recherche." });
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const setDetail = (detail) => ({
  type: SET_DETAIL,
  payload: detail,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});
