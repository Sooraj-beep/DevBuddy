import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import SignupScreen from "./src/screens/SignupScreen";
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import CommunityScreen from "./src/screens/CommunityScreen";

const switchNavigator = createSwitchNavigator(
  {
    loginFlow: createStackNavigator({
      Signup: SignupScreen,
      Login: LoginScreen,
    }),
    mainFlow: createBottomTabNavigator({
      Home: HomeScreen,
      Profile: ProfileScreen,
      Community: CommunityScreen,
    }),
  },
  {
    initialRouteName: "loginFlow",
  }
);

export default createAppContainer(switchNavigator);
