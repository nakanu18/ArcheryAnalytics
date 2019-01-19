export interface IReduxState {
    scores: IScoresState;
    roundTemplates: IRoundTemplate[];
}

export interface IScoresState {
    scoreCards: IScoreCard[];
}

export interface IAction {
    type: string;
    payload?: Object;
}

export interface IScoreCard {
    scoreCardID: number;
    roundName: string;
    bowName: string;
    date: string;
    endScores: number[][];
}

export interface IRoundTemplate {
    roundName: string;
    roundTarget: string;
    roundLeg: IRoundLegTemplate[];
}

export interface IRoundLegTemplate {
    distance: number;
    numberOfArrowsPerEnd: number;
    numberOfEnds: number;
}

export interface IArrowButton {
    color: string;
    backgroundColor: string;
}
