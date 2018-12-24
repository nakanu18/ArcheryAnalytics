import * as Types from "../Types";

const INITIAL_STATE: Types.IReduxState = {
    scores: {
        scoreCards: []
    },
    roundTemplates: [
        {
            roundName: "NFAA 300",
            roundLeg: [
                {
                    distance: 18,
                    numberOfArrowsPerEnd: 5,
                    numberOfEnds: 12,
                    maxScorePerArrow: 5
                }
            ]
        },
        {
            roundName: "VEGAS 300",
            roundLeg: [
                {
                    distance: 18,
                    numberOfArrowsPerEnd: 3,
                    numberOfEnds: 10,
                    maxScorePerArrow: 10
                }
            ]
        },
        {
            roundName: "VEGAS 600",
            roundLeg: [
                {
                    distance: 18,
                    numberOfArrowsPerEnd: 3,
                    numberOfEnds: 20,
                    maxScorePerArrow: 10
                }
            ]
        }
    ]
};

export default INITIAL_STATE;
