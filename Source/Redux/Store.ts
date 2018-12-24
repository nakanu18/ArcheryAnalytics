import { createStore, combineReducers } from "redux";

import { scoreReducer } from "../Redux/ScoreDux";

const rootReducer = combineReducers({
    scores: scoreReducer
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;
