import React from "react";
import { View, StyleSheet, Text } from "react-native";

import ScoresDetailArrowButton from "./ScoresDetailArrowButton";
import * as ScoreUtils from "../../Utils/ScoreUtils";
import * as Types from "../../Types";

interface IProps {
    endID: number;
    endScore: number[];
    selectedArrowID: number | null;
    roundTemplate: Types.IRoundTemplate;
    didSelectArrowValue: Function;
}

export default class ScoresDetailEndCell extends React.Component<IProps> {
    // Interaction

    didTapArrowButton = (arrowID: number) => {
        this.props.didSelectArrowValue(this.props.endID, arrowID);
    };

    // Render

    renderEndScores = (): JSX.Element[] => {
        const comp = this.props.endScore.map((value, index) => {
            return (
                <ScoresDetailArrowButton
                    key={index}
                    arrowValue={value}
                    isSelected={this.props.selectedArrowID === index}
                    roundTemplate={this.props.roundTemplate}
                    didTapArrowButton={() => this.didTapArrowButton(index)}
                />
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
                    {this.renderEndScores()}
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
        borderRadius: 10,
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
