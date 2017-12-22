import {
	combineReducers
} from "redux";

import reducer from "./store/reducer";

export default
	combineReducers({
		store: reducer,
	});