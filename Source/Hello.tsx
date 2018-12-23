// components/Hello.tsx
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

interface IProps {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

interface IState {
  enthusiasmLevel: number;
}

export default class Hello extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      enthusiasmLevel: props.enthusiasmLevel || 1,
    };
  }

  public onIncrement = () => this.setState({ enthusiasmLevel: this.state.enthusiasmLevel + 1 });
  public onDecrement = () => this.setState({ enthusiasmLevel: this.state.enthusiasmLevel - 1 });
  public getExclamationMarks = (numChars: number) => Array(numChars + 1).join("!");

  public render() {
    return (
      <View style={styles.root}>
        <Text style={styles.greeting}>
          Hello {this.props.name + this.getExclamationMarks(this.state.enthusiasmLevel)}
        </Text>

        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title="-"
              onPress={this.onDecrement}
              accessibilityLabel="decrement"
              color="red"
            />
          </View>

          <View style={styles.button}>
            <Button
              title="+"
              onPress={this.onIncrement}
              accessibilityLabel="increment"
              color="blue"
            />
          </View>
        </View>
      </View>
    );
  }
}

// styles

const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingVertical: 0,
  },
  buttons: {
    alignItems: "stretch",
    alignSelf: "center",
    borderWidth: 5,
    flexDirection: "row",
    minHeight: 70,
  },
  greeting: {
    color: "#999",
    fontWeight: "bold",
  },
  root: {
    alignItems: "center",
    alignSelf: "center",
  },
});
