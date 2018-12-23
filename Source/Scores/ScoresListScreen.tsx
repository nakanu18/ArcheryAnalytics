import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";

import ScoresListCell from "./ScoresListCell";
import * as Types from "../Types";

interface IProps {}

interface IState {
    selectedRoundID: number | null;
    scores: Types.IScoreCard[];
}

export default class ScoresListScreen extends React.Component<IProps, IState> {
    // Lifecycle

    constructor(props: IProps) {
        super(props);

        this.state = {
            scores: [
                {
                    roundID: 0,
                    roundName: "VEGAS 300",
                    date: "April 20",
                    score: "258/300"
                },
                {
                    roundID: 1,
                    roundName: "VEGAS 300",
                    date: "April 19",
                    score: "272/300"
                },
                {
                    roundID: 2,
                    roundName: "NFAA 300",
                    date: "April 1",
                    score: "271/300"
                }
            ],
            selectedRoundID: null
        };
    }

    // Interaction

    public didSelectRowCallback = (roundID: number) => {
        this.setState({ selectedRoundID: roundID });
        console.log(roundID);
    };

    // Render

    public keyItemExtractor = (item: Types.IScoreCard) => `${item.roundID}`;
    public renderItem = ({ item }: any) => (
        <ScoresListCell
            scoreCard={item}
            didSelectRow={this.didSelectRowCallback}
            isSelected={this.state.selectedRoundID === item.roundID}
        />
    );

    public render() {
        return (
            <FlatList
                data={this.state.scores}
                extraData={this.state}
                keyExtractor={this.keyItemExtractor}
                renderItem={this.renderItem}
            />
        );
    }
}

// styles

const styles = StyleSheet.create({
    button: {
        flex: 1,
        paddingVertical: 0
    },
    buttons: {
        alignItems: "stretch",
        alignSelf: "center",
        borderWidth: 5,
        flexDirection: "row",
        minHeight: 70
    },
    greeting: {
        color: "#999",
        fontWeight: "bold"
    },
    root: {
        alignItems: "center",
        alignSelf: "center"
    }
});
