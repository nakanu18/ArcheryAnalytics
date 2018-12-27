import * as Types from "../Types";

export const uiArrowScore = (score: number, roundTarget: string): string => {
    var value: string = score === -1 ? "_" : `${score}`;

    if (roundTarget === "multicolor") {
        value = score === 11 ? "X" : `${score}`;
    } else if (roundTarget === "blue") {
        value = score === 6 ? "X" : `${score}`;
    }
    return value;
};

export const arrowScore = (score: number, roundTarget: string): number => {
    var value: number = score === -1 ? 0 : score;

    if (roundTarget === "multicolor") {
        value = score === 11 ? 10 : score;
    } else if (roundTarget === "blue") {
        value = score === 6 ? 5 : score;
    }
    return value;
};

export const totalEndScore = (
    endScore: number[],
    roundTarget: string
): number => {
    var total: number = 0;

    for (var i = 0; i < endScore.length; ++i) {
        total += arrowScore(endScore[i], roundTarget);
    }
    return total;
};

export const totalScore = (
    scoreCard: Types.IScoreCard,
    roundTarget: string
): number => {
    var total: number = 0;

    for (var i = 0; i < scoreCard.endScores.length; ++i) {
        total += totalEndScore(scoreCard.endScores[i], roundTarget);
    }
    return total;
};
