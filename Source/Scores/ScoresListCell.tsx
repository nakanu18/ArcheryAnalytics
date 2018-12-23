import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import ScoresListCellDetailsView from "./ScoresListCellDetailsView";
import ScoresListCellScoreView from "./ScoresListCellScoreView";
import * as Types from "../Types";

interface IProps {
    scoreCard: Types.IScoreCard;
    didSelectRow(roundID: number): void;
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

    public render() {
        return (
            <TouchableOpacity>
                <View style={{ flexDirection: "row" }}>
                    <ScoresListCellDetailsView scoreCard={this.props.scoreCard} />
                    <ScoresListCellScoreView scoreCard={this.props.scoreCard} />
                </View>
            </TouchableOpacity>
        );
    }
}
