import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";

import configureStore from "./Source/Redux/Store";
import ScoresListScreen from "./Source/Scores/ScoresListScreen";
import { name as appName } from "./app.json";

const store = configureStore();

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ScoresListScreen />
            </Provider>
        );
    }
}

AppRegistry.registerComponent(appName, () => App);
