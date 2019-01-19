import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationScreenProp } from "react-navigation";

import * as ScoreUtils from "../../Utils/ScoreUtils";
import * as Types from "../../Types";

interface IProps {
    arrowValue: number;
    isSelected: boolean;
    roundTemplate: Types.IRoundTemplate;
    didTapArrowButton: Function;
}

export default class ScoresDetailArrowButton extends React.Component<IProps> {
    // Render

    public render() {
        const textForArrowValue: string = ScoreUtils.textForArrowScore(
            this.props.arrowValue,
            this.props.roundTemplate.roundTarget
        );
        const colorForArrowValue: Types.IArrowButton = ScoreUtils.colorForArrowScore(
            this.props.arrowValue,
            this.props.roundTemplate.roundTarget
        );
        const arrowColor = this.props.isSelected
            ? ScoreUtils.colorForSelectedArrowScore()
            : colorForArrowValue;

        return (
            <TouchableOpacity
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: arrowColor.backgroundColor,
                    borderRadius: 10,
                    width: 30,
                    height: 30
                }}
                onPress={() => this.props.didTapArrowButton()}
            >
                <Text style={{ color: arrowColor.color }}>
                    {textForArrowValue}
                </Text>
            </TouchableOpacity>
        );
    }
}
