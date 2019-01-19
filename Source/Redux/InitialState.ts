import * as Types from "../Types";

const INITIAL_STATE: Types.IReduxState = {
    scores: {
        scoreCards: [
            {
                scoreCardID: 0,
                roundName: "VEGAS 300",
                bowName: "Red Moon 31",
                date: "12/20/2018",
                endScores: [
                    [9, 8, 8],
                    [9, 9, 6],
                    [11, 9, 6],
                    [11, 9, 9],
                    [8, 7, 6],

                    [10, 9, 8],
                    [9, 9, 8],
                    [11, 10, 9],
                    [9, 9, 8],
                    [9, 8, 6],

                    [10, 9, 8],
                    [9, 9, 8],
                    [11, 10, 9],
                    [9, 9, 8],
                    [9, 8, 6]
                ]
            },
            {
                scoreCardID: 1,
                roundName: "VEGAS 300",
                bowName: "Red Moon 31",
                date: "12/16/2018",
                endScores: [
                    [9, 9, 8],
                    [11, 9, 8],
                    [11, 10, 9],
                    [10, 8, 5],
                    [9, 8, 8],

                    [9, 7, 7],
                    [9, 9, 8],
                    [9, 8, 6],
                    [9, 8, 6],
                    [9, 8, 7]
                ]
            }
        ]
    },
    roundTemplates: [
        {
            roundName: "NFAA 300",
            roundTarget: "blue",
            roundLeg: [
                {
                    distance: 18,
                    numberOfArrowsPerEnd: 5,
                    numberOfEnds: 12
                }
            ]
        },
        {
            roundName: "VEGAS 300",
            roundTarget: "multicolor",
            roundLeg: [
                {
                    distance: 18,
                    numberOfArrowsPerEnd: 3,
                    numberOfEnds: 10
                }
            ]
        },
        {
            roundName: "VEGAS 600",
            roundTarget: "multicolor",
            roundLeg: [
                {
                    distance: 18,
                    numberOfArrowsPerEnd: 3,
                    numberOfEnds: 20
                }
            ]
        }
    ]
};

export default INITIAL_STATE;
