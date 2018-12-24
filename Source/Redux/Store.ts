import { createStore, combineReducers, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { scoreReducer } from "../Redux/ScoreDux";
import { roundTemplateReducer } from "../Redux/RoundTemplateDux";

const rootReducer = combineReducers({
    scores: scoreReducer,
    roundTemplates: roundTemplateReducer
});

const configureStore = () => {
    return createStore(rootReducer, {}, composeWithDevTools());
};

export default configureStore;
