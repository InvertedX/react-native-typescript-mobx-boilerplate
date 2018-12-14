import {
  createStackNavigator,
  createNavigationContainer
} from "react-navigation";
import Home from "./screens/Home";
import Profile from "./screens/Profile";

const RootNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Profile: { screen: Profile }
  },
  {
    initialRouteKey: "Home"
  }
);

export default createNavigationContainer(RootNavigator);
