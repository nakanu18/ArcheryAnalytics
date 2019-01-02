import React from "react";
import { View, StyleSheet, Text } from "react-native";

import * as ScoreUtils from "../../Utils/ScoreUtils";
import * as Types from "../../Types";

interface IProps {
    scoreCard: Types.IScoreCard;
    roundTemplate: Types.IRoundTemplate;
}

const ScoresDetailTotalsCell = (props: IProps) => {
    const totalScore = ScoreUtils.totalScore(
        props.scoreCard,
        props.roundTemplate.roundTarget
    );

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.totalScore}>{totalScore}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        height: 40
    },
    totalScore: {}
});

export default ScoresDetailTotalsCell;
