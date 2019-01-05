import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import ScoresListCellDetailsView from "./ScoresListCellDetailsView";
import ScoresListCellScoreView from "./ScoresListCellScoreView";
import * as Types from "../../Types";

interface IProps {
    scoreCard: Types.IScoreCard;
    didSelectRow(scoreCard: Types.IScoreCard): void;
    isSelected: boolean;
}

interface IState {}

export default class ScoresListCell extends React.Component<IProps, IState> {
    // Lifecycle

    constructor(props: IProps) {
        super(props);
    }

    // Interaction

    didTapCell = () => {
        this.props.didSelectRow(this.props.scoreCard);
    };

    // Render

    renderExpandedDetails() {
        if (this.props.isSelected) {
            return (
                <Text>
                    This is the expanded details section\nIt has alot of stuff
                </Text>
            );
        }
    }

    public render() {
        return (
            <TouchableOpacity
                style={styles.cellStyle}
                onPress={this.didTapCell}
            >
                <View style={{ flexDirection: "row" }}>
                    <ScoresListCellDetailsView
                        scoreCard={this.props.scoreCard}
                    />
                    <ScoresListCellScoreView scoreCard={this.props.scoreCard} />
                </View>
                {this.renderExpandedDetails()}
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    cellStyle: {
        backgroundColor: "#FFFFFF",
        flexDirection: "column",
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5
    }
});
