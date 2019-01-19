import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

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

    public render() {
        return (
            <View>
                <ScoresDetailArrowButton
                    arrowValue={11}
                    isSelected={false}
                    roundTemplate={this.props.roundTemplate}
                    didTapArrowButton={() => {}}
                />
                <ScoresDetailArrowButton
                    arrowValue={10}
                    isSelected={false}
                    roundTemplate={this.props.roundTemplate}
                    didTapArrowButton={() => {}}
                />
                <ScoresDetailArrowButton
                    arrowValue={9}
                    isSelected={false}
                    roundTemplate={this.props.roundTemplate}
                    didTapArrowButton={() => {}}
                />
            </View>
        );
    }
}
