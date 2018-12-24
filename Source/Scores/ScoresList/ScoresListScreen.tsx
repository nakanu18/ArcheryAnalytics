import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";
import { NavigationScreenProp } from "react-navigation";

import ScoresListCell from "./ScoresListCell";
import { saveScoreCard } from "../../Redux/ScoreDux";
import * as Types from "../../Types";

interface IProps {
    scoreCards: Types.IScoreCard[];
    saveScoreCard: Function;
    navigation: NavigationScreenProp<any, any>;
}

interface IState {
    selectedScoreCardID: number | null;
}

class ScoresListScreen extends React.Component<IProps, IState> {
    // Lifecycle

    constructor(props: IProps) {
        super(props);

        this.state = { selectedScoreCardID: null };
    }

    componentWillReceiveProps(nextProps: IProps) {}

    // Interaction

    public didSelectRow = (scoreCard: Types.IScoreCard) => {
        this.setState({ selectedScoreCardID: scoreCard.scoreCardID });
        this.props.navigation.navigate("Details", {
            scoreCard: scoreCard
        });
    };

    // Render

    public keyItemExtractor = (item: Types.IScoreCard) => `${item.scoreCardID}`;
    public renderItem = ({ item }: any) => (
        <ScoresListCell
            scoreCard={item}
            didSelectRow={this.didSelectRow}
            isSelected={this.state.selectedScoreCardID === item.roundID}
        />
    );

    public render() {
        return (
            <FlatList
                data={this.props.scoreCards}
                extraData={this.state}
                keyExtractor={this.keyItemExtractor}
                renderItem={this.renderItem}
            />
        );
    }
}

// Redux

const mapStateToProps = (state: Types.IReduxState) => {
    return {
        scoreCards: state.scores.scoreCards
    };
};

const mapDispatchToProps = (dispatch: Function) => {
    return {
        saveScoreCard: (scoreCard: Types.IScoreCard) => {
            dispatch(saveScoreCard(scoreCard));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScoresListScreen);
