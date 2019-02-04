/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from "react-native";

// type Props = {};
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      hello: "Oh Hi Mark",
      michael: "My Name is Michael",
      clickCount: 0,
      mineMachine: 0,
      mineMachineValue: 5,
      mineMachineReal: false
    };
  }
  incrementClick() {
    this.setState({
      clickCount: this.state.clickCount + 1
    });
    console.log('here')
  }
  mineMachine() {
    if (this.state.clickCount >= 5) {
      this.setState({
        mineMachineValue: this.state.mineMachineValue + 5
      })
    }
    function continuing() {
      if (this.mineMachineValue) {
        this.setState({
          clickCount: this.state.clickCount + this.state.mineMachineValue
        })
        setTimeout(() => {
          this.continuing()
        }, 1000);
      }
    }

    if (!this.state.mineMachineReal && this.state.clickCount >= 5) {
      this.setState({
        mineMachineReal: true,
        clickCount: this.state.clickCount - 5
      })
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Click Here</Text>
        <Text style={styles.instructions}>{this.state.hello}</Text>
        <Text style={styles.instructions}>{this.state.michael}</Text>
        <TouchableOpacity onPress={() => this.incrementClick()} style={styles.container}>
          <Text style={styles.instructions}>{this.state.clickCount}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.mineMachine()}>
          <Text style={styles.instructions}>{this.state.mineMachine}</Text>
        </TouchableOpacity>
        <Text>Cost is 5</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
