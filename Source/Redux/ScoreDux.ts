import INITIAL_STATE from "./InitialState";
import * as Types from "../Types";

const SAVE_SCORE_CARD = "SAVE_SCORE_CARD";

// Actions

export function saveScoreCard(scoreCard: Types.IScoreCard): Types.IAction {
    return {
        type: SAVE_SCORE_CARD,
        payload: scoreCard
    };
}

// Reducer

export const scoreReducer = (
    state = INITIAL_STATE.scores,
    action: Types.IAction
): Types.IScoresState => {
    switch (action.type) {
        case SAVE_SCORE_CARD:
            const newState = {
                scoreCards: [
                    ...state.scoreCards,
                    action.payload as Types.IScoreCard
                ]
            };
            return newState;
        default:
            return state;
    }
};
