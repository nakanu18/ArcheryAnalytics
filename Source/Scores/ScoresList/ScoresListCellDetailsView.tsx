import React from "react";
import { StyleSheet, Text, View } from "react-native";

import * as Types from "../../Types";

interface IProps {
    scoreCard: Types.IScoreCard;
}

const ScoresListCellDetailsView = (props: IProps) => (
    <View style={styles.viewStyle}>
        <Text style={styles.nameStyle}>{props.scoreCard.roundName}</Text>

        <Text style={styles.dateStyle}>{props.scoreCard.date}</Text>
    </View>
);

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start"
    },
    nameStyle: {
        fontSize: 16
    },
    dateStyle: {
        fontSize: 10
    }
});

export default ScoresListCellDetailsView;
