import React from "react";
import { View, StyleSheet } from "react-native";

import ScoresDetailArrowButton from "./ScoresDetailArrowButton";
import * as Types from "../../Types";

interface IProps {
    roundTemplate: Types.IRoundTemplate;
}

interface IState {}

export default class ScoresDetailKeypad extends React.Component<
    IProps,
    IState
> {
    // Lifecycle

    constructor(props: IProps) {
        super(props);

        this.state = {};
    }

    componentWillReceiveProps(nextProps: IProps) {}

    // Interaction

    // Render

    renderGold = () => (
        <View style={styles.buttonRowStyle}>
            {this.renderArrowButton(11)}
            {this.renderArrowButton(10)}
            {this.renderArrowButton(9)}
        </View>
    );

    renderRed = () => (
        <View style={styles.buttonRowStyle}>
            {this.renderArrowButton(8)}
            {this.renderArrowButton(7)}
        </View>
    );

    renderBlue = () => (
        <View style={styles.buttonRowStyle}>
            {this.renderArrowButton(6)}
            {this.renderArrowButton(5)}
        </View>
    );

    renderBlack = () => (
        <View style={styles.buttonRowStyle}>
            {this.renderArrowButton(4)}
            {this.renderArrowButton(3)}
        </View>
    );

    renderWhite = () => (
        <View style={styles.buttonRowStyle}>
            {this.renderArrowButton(2)}
            {this.renderArrowButton(1)}
            {this.renderArrowButton(0)}
        </View>
    );

    renderArrowButton = (arrowValue: number): JSX.Element => (
        <View style={styles.buttonStyle}>
            <ScoresDetailArrowButton
                arrowValue={arrowValue}
                isSelected={false}
                roundTemplate={this.props.roundTemplate}
                didTapArrowButton={() => {}}
            />
        </View>
    );

    public render() {
        return (
            <View style={styles.viewStyle}>
                {this.renderGold()}
                {this.renderRed()}
                {this.renderBlue()}
                {this.renderBlack()}
                {this.renderWhite()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: "row",
        backgroundColor: "#F2F2F2",
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5
    },
    buttonRowStyle: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    buttonStyle: {
        paddingTop: 5,
        paddingBottom: 5
    }
});
