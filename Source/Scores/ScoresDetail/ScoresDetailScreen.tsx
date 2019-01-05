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
            scoreCard: this.props.navigation.getParam("scoreCard", null),
            roundTemplate: this.props.navigation.getParam("roundTemplate", null)
        };
    }

    componentWillReceiveProps(nextProps: IProps) {}

    // Interaction

    didSelectArrowValue = (endID: number, arrowID: number) => {
        console.log(`${endID} - ${arrowID}`);
    };

    // Render

    renderSectionHeader = ({ section }: any) => <View />;

    renderCells = ({ item, index, section }: any): JSX.Element => {
        switch (section.title) {
            case "0":
                return this.renderEndCell({ item, index });
            default:
                return this.renderTotalsCell({ item, index });
        }
    };

    renderEndCell = ({ item, index }: any): JSX.Element => (
        <ScoresDetailEndCell
            endID={index}
            endScore={item}
            roundTemplate={this.state.roundTemplate}
            didSelectArrowValue={this.didSelectArrowValue}
        />
    );

    renderTotalsCell = ({ item, index }: any): JSX.Element => (
        <ScoresDetailTotalsCell
            scoreCard={item}
            roundTemplate={this.state.roundTemplate}
        />
    );

    renderFlatList = () => {
        if (!this.state.scoreCard) {
            return null;
        }
        return (
            <SectionList
                renderItem={this.renderCells}
                renderSectionHeader={this.renderSectionHeader}
                sections={[
                    { title: "0", data: this.state.scoreCard.endScores },
                    { title: "1", data: [this.state.scoreCard] }
                ]}
                keyExtractor={(item, index) => item + index}
            />
        );
    };

    public render() {
        return <View style={{ flex: 1 }}>{this.renderFlatList()}</View>;
    }
}
