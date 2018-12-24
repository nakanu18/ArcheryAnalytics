import React from "react";
import { Text } from "react-native";
import { connect } from "react-redux";
import { NavigationScreenProp } from "react-navigation";

import { saveScoreCard } from "../../Redux/ScoreDux";
import * as Types from "../../Types";

interface IProps {
    scoreCards: Types.IScoreCard[];
    saveScoreCard: Function;
    navigation: NavigationScreenProp<any, any>;
}

interface IState {
    scoreCard: Types.IScoreCard | null;
}

class ScoresDetailScreen extends React.Component<IProps, IState> {
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

    public render() {
        if (!!this.state.scoreCard) {
            return <Text>Round ID: {this.state.scoreCard.scoreCardID}</Text>;
        }
        return <Text>No Score</Text>;
    }
}

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
)(ScoresDetailScreen);
