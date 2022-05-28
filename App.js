import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import TempComponent from "./src/components/TempComponent";
import TempScreen from "./src/screens/TempScreen";

const navigator = createStackNavigator(
  {
    TempComp: TempComponent,
    TempScreen: TempScreen,
  },
  {
    initialRouteName: "TempScreen",
    defaultNavigationOptions: {
      title: "Gift Mobile App"
    }
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(navigator);