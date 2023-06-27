import { unitReducer } from "./unit/reducer";
import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./auth";
import { profileReducer } from "./profile";
import { changeUnitReducer } from "./changeUnit";

export default combineReducers({
  unit: unitReducer,
  auth: authReducer,
  profile: profileReducer,
  changeUnit: changeUnitReducer,
});
