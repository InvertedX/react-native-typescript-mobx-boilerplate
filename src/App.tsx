import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Provider } from "mobx-react";
import stores from "./store";
import RootNavigator from "./RootNavigator";

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Provider {...stores}>
          <RootNavigator />
        </Provider>
      </View>
    );
  }
}
