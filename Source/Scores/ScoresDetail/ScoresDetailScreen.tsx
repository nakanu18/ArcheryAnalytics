import React from "react";
import { FlatList, Text, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";

import ScoresDetailEndCell from "./ScoresDetailEndCell";
import { saveScoreCard, scoreReducer } from "../../Redux/ScoreDux";
import * as Types from "../../Types";

interface IProps {
    navigation: NavigationScreenProp<any, any>;
}

interface IState {
    scoreCard: Types.IScoreCard;
    roundTemplate: Types.IRoundTemplate;
}

export default class ScoresDetailScreen extends React.Component<
    IProps,
    IState
> {
    // Lifecycle

    constructor(props: IProps) {
        super(props);

        // this.state = { scoreCard: null, roundTemplate: {} };
        this.state = {
            scoreCard: this.props.navigation.getParam("scoreCard", null),
            roundTemplate: this.props.navigation.getParam("roundTemplate", null)
        };
    }

    componentDidMount() {
        // this.setState({
        //     scoreCard: this.props.navigation.getParam("scoreCard", null),
        //     roundTemplate: this.props.navigation.getParam("roundTemplate", null)
        // });
    }

    componentWillReceiveProps(nextProps: IProps) {}

    // Render

    public keyItemExtractor = (item: number[], index: number) => `${index}`;
    public renderItem = ({ item, index }: any) => {
        return (
            <ScoresDetailEndCell
                endID={index}
                endScore={item}
                roundTemplate={this.state.roundTemplate}
            />
        );
    };
    renderFlatList = () => {
        if (this.state.scoreCard) {
            return (
                <FlatList
                    data={this.state.scoreCard.endScores}
                    extraData={this.state}
                    keyExtractor={this.keyItemExtractor}
                    renderItem={this.renderItem}
                />
            );
        }
    };

    public render() {
        return <View>{this.renderFlatList()}</View>;
    }
}
