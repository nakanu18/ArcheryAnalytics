import React from "react";
import { View, StyleSheet, Text } from "react-native";

import * as Types from "../../Types";

interface IProps {
    endID: number;
    endScores: number[];
}

const renderEndScores = (props: IProps) => {
    const comp = props.endScores.map((value, index) => (
        <Text key={index}>{value}</Text>
    ));
    return comp;
};

const ScoresDetailEndCell = (props: IProps) => (
    <View style={styles.viewStyle}>
        <Text>{props.endID}:</Text>
        <View style={styles.scoreStyle}>{renderEndScores(props)}</View>
    </View>
);

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
