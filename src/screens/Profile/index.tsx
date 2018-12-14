import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import CounterStore from "../../store/counterstore";
import { observer, inject } from "mobx-react";

interface props {
  counterStore: CounterStore;
  navigation: any;
}

@inject("counterStore")
@observer
class Profile extends Component<props, {}> {
  static navigationOptions = {
    title: "Profile"
  };

  render() {
    return (
      <View
        style={{ flex: 1, alignContent: "center", justifyContent: "center" }}
      >
        <Text style={{ alignSelf: "center", fontSize: 40 }}>
          
          Counter value {this.props.counterStore.counter}{" "}
        </Text>
        <Button
          onPress={this.props.counterStore.decrement}
          title="Decrement "
        />
        <Button
          onPress={()=>{this.props.navigation.goBack()}}
          title="Go back "
        />
      </View>
    );
  }
}

export default Profile;
