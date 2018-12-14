import React, { Component } from "react";
import { Text, View, TouchableOpacity, Button } from "react-native";
import { observer, inject } from "mobx-react";
import CounterStore from "../../store/counterstore";

interface props {
  counterStore: CounterStore;
  navigation: any;
}

@inject("counterStore")
@observer
class Home extends Component<props, {}> {
  static navigationOptions = {
    title: "Home"
  };

  render() {
    console.log(this.props);
    const { counterStore, navigation } = this.props;
    return (
      <View
        style={{ flex: 1, alignContent: "center", justifyContent: "center" }}
      >
        <Text
          style={{
            alignSelf: "center",
            fontSize: 40
          }}
        >
          Home {counterStore.counter}
        </Text>
        <Button title="Increment" onPress={counterStore.increment} />
        <Button
          title="Go to profile"
          onPress={() => {
            navigation.navigate("Profile");
          }}
        />
      </View>
    );
  }
}

export default Home;
