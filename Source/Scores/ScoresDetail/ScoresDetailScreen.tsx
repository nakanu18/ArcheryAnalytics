import React from "react";
import { FlatList, Text, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";

import ScoresDetailEndCell from "./ScoresDetailEndCell";
import { saveScoreCard } from "../../Redux/ScoreDux";
import * as Types from "../../Types";

interface IProps {
    navigation: NavigationScreenProp<any, any>;
}

interface IState {
    scoreCard: Types.IScoreCard | null;
}

export default class ScoresDetailScreen extends React.Component<
    IProps,
    IState
> {
    // Lifecycle

    constructor(props: IProps) {
        super(props);

        this.state = { scoreCard: null };
    }

    componentDidMount() {
        this.setState({
            scoreCard: this.props.navigation.getParam("scoreCard", null)
        });
    }

    componentWillReceiveProps(nextProps: IProps) {}

    // Render

    public keyItemExtractor = (item: number[], index: number) => `${index}`;
    public renderItem = ({ item, index }: any) => {
        return <ScoresDetailEndCell endID={index} endScores={item} />;
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
