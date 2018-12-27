import React from "react";
import { View, StyleSheet, Text } from "react-native";

import * as ScoreUtils from "../../Utils/ScoreUtils";
import * as Types from "../../Types";

interface IProps {
    endID: number;
    endScore: number[];
    roundTemplate: Types.IRoundTemplate;
}

const renderEndScores = (props: IProps) => {
    const comp = props.endScore.map((value, index) => {
        const uiArrowScore = ScoreUtils.uiArrowScore(
            value,
            props.roundTemplate.roundTarget
        );

        return <Text key={index}>{uiArrowScore}</Text>;
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
            <Text>{props.endID + 1}:</Text>
            <View style={styles.scoreStyle}>{renderEndScores(props)}</View>
            <Text>{totalEndScore}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: "row",
        alignItems: "flex-start",
        backgroundColor: "#FFFFFF",
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5
    },
    scoreStyle: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "flex-start"
    },
    detailStyle: {
        fontSize: 10
    }
});

export default ScoresDetailEndCell;
