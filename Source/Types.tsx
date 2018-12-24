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
    date: string;
    score: string;
}

export interface IRoundTemplate {
    roundName: string;
    roundLeg: IRoundLegTemplate[];
}

export interface IRoundLegTemplate {
    distance: number;
    numberOfArrowsPerEnd: number;
    numberOfEnds: number;
    maxScorePerArrow: number;
}
