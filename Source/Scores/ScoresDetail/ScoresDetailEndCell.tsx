import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import * as ScoreUtils from "../../Utils/ScoreUtils";
import * as Types from "../../Types";

interface IProps {
    endID: number;
    endScore: number[];
    roundTemplate: Types.IRoundTemplate;
    didSelectArrowValue: Function;
}

export default class ScoresDetailEndCell extends React.Component<IProps> {
    // Lifecycle

    constructor(props: IProps) {
        super(props);
    }

    // Interaction

    didTapArrowButton = (arrowID: number) => {
        this.props.didSelectArrowValue(this.props.endID, arrowID);
    };

    // Render

    renderEndScores = (props: IProps): JSX.Element[] => {
        const comp = props.endScore.map((value, index) => {
            const textForArrowValue: string = ScoreUtils.textForArrowScore(
                value,
                props.roundTemplate.roundTarget
            );
            const colorForArrowValue: Types.IColor = ScoreUtils.colorForArrowScore(
                value,
                props.roundTemplate.roundTarget
            );

            return (
                <TouchableOpacity
                    key={index}
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: colorForArrowValue.backgroundColor,
                        borderRadius: 10,
                        width: 30,
                        height: 30
                    }}
                    onPress={() => this.didTapArrowButton(index)}
                >
                    <Text
                        key={index}
                        style={{ color: colorForArrowValue.color }}
                    >
                        {textForArrowValue}
                    </Text>
                </TouchableOpacity>
            );
        });
        return comp;
    };

    public render() {
        const totalEndScore = ScoreUtils.totalEndScore(
            this.props.endScore,
            this.props.roundTemplate.roundTarget
        );

        return (
            <View style={styles.viewStyle}>
                <View style={styles.endNumberContainerStyle}>
                    <Text style={styles.endNumberStyle}>
                        {this.props.endID + 1}:
                    </Text>
                </View>
                <View style={styles.scoreContainerStyle}>
                    {this.renderEndScores(this.props)}
                </View>
                <View style={styles.endTotalContainerStyle}>
                    <Text style={styles.endTotalStyle}>{totalEndScore}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5
    },
    endNumberContainerStyle: {
        justifyContent: "center",
        alignItems: "center",
        width: 35
    },
    endNumberStyle: {},
    scoreContainerStyle: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#F2F2F2"
    },
    scoreStyle: {},
    endTotalContainerStyle: {
        justifyContent: "center",
        alignItems: "center",
        width: 35
    },
    endTotalStyle: {}
});
