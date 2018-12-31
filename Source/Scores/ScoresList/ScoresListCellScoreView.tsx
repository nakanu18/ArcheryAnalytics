import React from "react";
import { View, StyleSheet, Text } from "react-native";

import * as Types from "../../Types";

interface IProps {
    scoreCard: Types.IScoreCard;
}

const ScoresListCellScoreView = (props: IProps) => (
    <View style={styles.viewStyle}>
        <Text style={styles.scoreStyle}>Missing</Text>
        <Text style={styles.detailStyle}>{props.scoreCard.bowName}</Text>
    </View>
);

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start"
    },
    scoreStyle: {
        fontSize: 16
    },
    detailStyle: {
        fontSize: 10
    }
});

export default ScoresListCellScoreView;
