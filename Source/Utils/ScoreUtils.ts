import * as Types from "../Types";

export const textForArrowScore = (
    score: number,
    roundTarget: string
): string => {
    var value: string = score === -1 ? "_" : `${score}`;

    if (roundTarget === "multicolor") {
        value = score === 11 ? "X" : `${score}`;
    } else if (roundTarget === "blue") {
        value = score === 6 ? "X" : `${score}`;
    }
    return value;
};

export const colorForSelectedArrowScore = (): Types.IArrowButton => {
    return {
        backgroundColor: "#00FF00",
        color: "#000000"
    };
};

export const colorForArrowScore = (
    score: number,
    roundTarget: string
): Types.IArrowButton => {
    var color: Types.IArrowButton = {
        backgroundColor: "#FFFFFF",
        color: "#FF0000"
    };

    if (roundTarget === "multicolor") {
        if (score >= 9) {
            color = { backgroundColor: "#E6E600", color: "#000000" };
        } else if (score >= 7) {
            color = { backgroundColor: "#FF0000", color: "#FFFFFF" };
        } else if (score >= 5) {
            color = { backgroundColor: "#4C4CFF", color: "#FFFFFF" };
        } else if (score >= 3) {
            color = { backgroundColor: "#000000", color: "#FFFFFF" };
        } else if (score >= 1) {
            color = { backgroundColor: "#FFFFFF", color: "#000000" };
        }
    } else if (roundTarget === "blue") {
        if (score >= 5) {
            color = { backgroundColor: "#FFFFFF", color: "#000000" };
        } else if (score >= 1) {
            color = { backgroundColor: "#004080", color: "#FFFFFF" };
        }
    }
    return color;
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
