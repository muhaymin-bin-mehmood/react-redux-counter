import changeTheNumber from "./reducers";
import calcTheNumber from "./calc";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeTheNumber,
    calcTheNumber
});

export default rootReducer