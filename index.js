import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import { createStackNavigator, createAppContainer } from "react-navigation";

import configureStore from "./Source/Redux/Store";
import ScoresListScreen from "./Source/Scores/ScoresList/ScoresListScreen";
import ScoresDetailScreen from "./Source/Scores/ScoresDetail/ScoresDetailScreen";
import { name as appName } from "./app.json";

const store = configureStore();

const ScoresStackNavigator = createStackNavigator({
    Home: {
        screen: ScoresListScreen
    },
    Details: {
        screen: ScoresDetailScreen
    }
});

const AppContainer = createAppContainer(ScoresStackNavigator);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    }
}

AppRegistry.registerComponent(appName, () => App);
