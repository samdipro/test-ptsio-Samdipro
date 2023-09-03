import { combineReducers } from "redux";
import clickReducer from "./click";

const rootReducer = combineReducers({
  click: clickReducer,
});

export default rootReducer;
