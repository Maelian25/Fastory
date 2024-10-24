import { combineReducers } from "redux";
import swapiReducer from "./swapiReducer";
import authReducer from "./authReducer";

export default combineReducers({
  swapi: swapiReducer,
  auth: authReducer,
});
