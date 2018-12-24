import { createStore, combineReducers, compose } from "redux";

import { scoreReducer } from "../Redux/ScoreDux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    scores: scoreReducer
});

const configureStore = () => {
    return createStore(rootReducer, {}, composeEnhancers());
};

export default configureStore;
