import { combineReducers } from "redux";

import users from "./users.ducks";
import map from "./map.ducks";

export default combineReducers({
  users,
  map
});
