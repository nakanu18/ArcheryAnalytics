import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import * as ScoreUtils from "../../Utils/ScoreUtils";
import * as Types from "../../Types";

interface IProps {
    endID: number;
    endScore: number[];
    roundTemplate: Types.IRoundTemplate;
}

const renderEndScores = (props: IProps): JSX.Element[] => {
    const comp = props.endScore.map((value, index) => {
        const textForArrowScore: string = ScoreUtils.textForArrowScore(
            value,
            props.roundTemplate.roundTarget
        );
        const colorForArrowScore: Types.IColor = ScoreUtils.colorForArrowScore(
            value,
            props.roundTemplate.roundTarget
        );

        return (
            <TouchableOpacity
                key={index}
                style={{
                    width: 30,
                    height: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: colorForArrowScore.backgroundColor
                }}
            >
                <Text key={index} style={{ color: colorForArrowScore.color }}>
                    {textForArrowScore}
                </Text>
            </TouchableOpacity>
        );
    });
    return comp;
};

const ScoresDetailEndCell = (props: IProps) => {
    const totalEndScore = ScoreUtils.totalEndScore(
        props.endScore,
        props.roundTemplate.roundTarget
    );

    return (
        <View style={styles.viewStyle}>
            <View style={styles.endNumberContainerStyle}>
                <Text style={styles.endNumberStyle}>{props.endID + 1}:</Text>
            </View>
            <View style={styles.scoreContainerStyle}>
                {renderEndScores(props)}
            </View>
            <View style={styles.endTotalContainerStyle}>
                <Text style={styles.endTotalStyle}>{totalEndScore}</Text>
            </View>
        </View>
    );
};

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
        width: 30
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
        width: 30
    },
    endTotalStyle: {}
});

export default ScoresDetailEndCell;
