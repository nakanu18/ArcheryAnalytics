import { createStore, combineReducers, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { scoreReducer } from "../Redux/ScoreDux";

const rootReducer = combineReducers({
    scores: scoreReducer
});

const configureStore = () => {
    return createStore(rootReducer, {}, composeWithDevTools());
};

export default configureStore;
