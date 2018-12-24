import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";

import ScoresListCell from "./ScoresListCell";
import { saveScoreCard } from "../Redux/ScoreDux";
import * as Types from "../Types";

interface IProps {
    scoreCards: Types.IScoreCard[];
    saveScoreCard: Function;
}

interface IState {
    selectedRoundID: number | null;
    scores: Types.IScoreCard[];
}

class ScoresListScreen extends React.Component<IProps, IState> {
    // Lifecycle

    constructor(props: IProps) {
        super(props);

        this.state = {
            scores: [
                {
                    roundID: 0,
                    roundName: "VEGAS 300",
                    date: "April 20",
                    score: "258/300"
                },
                {
                    roundID: 1,
                    roundName: "VEGAS 300",
                    date: "April 19",
                    score: "272/300"
                },
                {
                    roundID: 2,
                    roundName: "NFAA 300",
                    date: "April 1",
                    score: "271/300"
                }
            ],
            selectedRoundID: null
        };
    }

    componentDidMount() {
        this.props.saveScoreCard(this.state.scores[0]);
        this.props.saveScoreCard(this.state.scores[1]);
        this.props.saveScoreCard(this.state.scores[2]);
    }

    componentWillReceiveProps(nextProps: IProps) {}

    componentWillUpdate() {}

    // Interaction

    public didSelectRowCallback = (roundID: number) => {
        this.setState({ selectedRoundID: roundID });
    };

    // Render

    public keyItemExtractor = (item: Types.IScoreCard) => `${item.roundID}`;
    public renderItem = ({ item }: any) => (
        <ScoresListCell
            scoreCard={item}
            didSelectRow={this.didSelectRowCallback}
            isSelected={this.state.selectedRoundID === item.roundID}
        />
    );

    public render() {
        return (
            <FlatList
                data={this.state.scores}
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
