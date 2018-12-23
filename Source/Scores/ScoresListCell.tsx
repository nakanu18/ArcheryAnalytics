import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import ScoresListCellDetailsView from "./ScoresListCellDetailsView";
import ScoresListCellScoreView from "./ScoresListCellScoreView";
import * as Types from "../Types";

interface IProps {
    scoreCard: Types.IScoreCard;
    didSelectRow(roundID: number): void;
    isSelected: boolean;
}

interface IState {}

export default class ScoresListCell extends React.Component<IProps, IState> {
    // Lifecycle

    constructor(props: IProps) {
        super(props);
    }

    // Interaction

    public didTapCell = () => {
        this.props.didSelectRow(this.props.scoreCard.roundID);
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

const styles = {
    cellStyle: {
        flexDirection: "column",
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        shadowColor: "#0000FF",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5
    }
};
