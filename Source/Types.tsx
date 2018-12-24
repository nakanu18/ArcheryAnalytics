export interface IReduxState {
    scores: IScoresState;
}

export interface IScoresState {
    scoreCards: IScoreCard[];
}

export interface IAction {
    type: string;
    payload?: Object;
}

export interface IScoreCard {
    roundID: number;
    roundName: string;
    date: string;
    score: string;
}
