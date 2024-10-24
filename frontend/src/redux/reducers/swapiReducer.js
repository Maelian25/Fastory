import { SET_RESULTS, SET_FILTER, SET_LOADING, SET_ERROR, SET_DETAIL, CLEAR_RESULTS } from "../actions/swapiActions";

const initialState = {
  results: [],
  filter: "people",
  loading: false,
  error: null,
  detail: null,
};

const swapiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESULTS:
      return { ...state, results: action.payload };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_DETAIL:
      return { ...state, detail: action.payload };
    case CLEAR_RESULTS:
      return {
        ...state,
        results: [],
      };
    default:
      return state;
  }
};

export default swapiReducer;
