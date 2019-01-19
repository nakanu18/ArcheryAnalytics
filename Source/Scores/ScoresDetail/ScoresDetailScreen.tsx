import React from "react";
import { SectionList, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";

import ScoresDetailEndCell from "./ScoresDetailEndCell";
import ScoresDetailTotalsCell from "./ScoresDetailTotalsCell";
import { saveScoreCard, scoreReducer } from "../../Redux/ScoreDux";
import * as Types from "../../Types";

interface IProps {
    navigation: NavigationScreenProp<any, any>;
}

interface IState {
    selectedEndID: number | null;
    selectedArrowID: number | null;
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

        this.state = {
            selectedEndID: null,
            selectedArrowID: null,
            scoreCard: this.props.navigation.getParam("scoreCard", null),
            roundTemplate: this.props.navigation.getParam("roundTemplate", null)
        };
    }

    componentWillReceiveProps(nextProps: IProps) {}

    // Interaction

    didSelectArrowValue = (endID: number, arrowID: number) => {
        this.setState({
            selectedEndID: endID,
            selectedArrowID: arrowID
        });
    };

    // Render

    renderSectionHeader = ({ section }: any) => <View />;

    renderCells = ({ item, index, section }: any): JSX.Element => {
        switch (section.title) {
            case "header":
                return (
                    <ScoresDetailEndCell
                        endID={index}
                        endScore={item}
                        selectedArrowID={
                            this.state.selectedEndID === index
                                ? this.state.selectedArrowID
                                : null
                        }
                        roundTemplate={this.state.roundTemplate}
                        didSelectArrowValue={this.didSelectArrowValue}
                    />
                );

            default:
                return (
                    <ScoresDetailTotalsCell
                        scoreCard={item}
                        roundTemplate={this.state.roundTemplate}
                    />
                );
        }
    };

    renderFlatList = () => {
        if (!this.state.scoreCard) {
            return null;
        }
        return (
            <SectionList
                sections={[
                    { title: "header", data: this.state.scoreCard.endScores },
                    { title: "endCells", data: [this.state.scoreCard] }
                ]}
                renderSectionHeader={this.renderSectionHeader}
                renderItem={this.renderCells}
                keyExtractor={(item, index) => item + index}
            />
        );
    };

    public render() {
        return <View style={{ flex: 1 }}>{this.renderFlatList()}</View>;
    }
}
