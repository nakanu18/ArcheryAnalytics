import INITIAL_STATE from "./InitialState";
import * as Types from "../Types";

// Actions

// Reducer

export const roundTemplateReducer = (
    state = INITIAL_STATE.roundTemplates,
    action: Types.IAction
): Types.IRoundTemplate[] => {
    switch (action.type) {
        default:
            return state;
    }
};
