import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import TempComponent from "../components/TempComponent";

const TempScreen = () => {
  return (
    <View>
      <Text>Temp Screen</Text>
      <TempComponent />
      <TouchableOpacity 
      onPress={() => console.log('Pressed')}>
        <Text style = {{fontSize: 30, color: 'blue'}}>Test Button</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TempScreen;