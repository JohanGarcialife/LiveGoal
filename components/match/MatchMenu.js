import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function MatchMenu(props) {
  const { menu, setMenu } = props;
  return (
    <View className="flex-row px-6 justify-center space-x-2 items-center">
      {menu === "Match" ? (
        <TouchableOpacity onPress={() => setMenu("Match")}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={["#F4A58A", "#ED6B4E"]}
            className=" rounded-full py-3 px-6 flex items-center justify-center"
          >
            <Text className="text-white font-semibold ">Statistics</Text>
          </LinearGradient>
        </TouchableOpacity>
      ) : (
        <View
          className="justify-center items-center space-y-3 w-1/3"
          onPress={() => setMenu("Match")}
        >
          <Text
            className="text-white font-semibold "
            onPress={() => setMenu("Match")}
          >
            Statistics
          </Text>
        </View>
      )}
      {menu === "Lineup" ? (
        <TouchableOpacity onPress={() => setMenu("Lineup")}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={["#F4A58A", "#ED6B4E"]}
            className=" rounded-full py-3 px-6 flex items-center justify-center"
          >
            <Text className="text-white font-semibold ">Line Up</Text>
          </LinearGradient>
        </TouchableOpacity>
      ) : (
        <View
          className="justify-end items-center w-1/3"
          onPress={() => setMenu("Lineup")}
        >
          <Text
            className="text-white font-semibold "
            onPress={() => setMenu("Lineup")}
          >
            Line Up
          </Text>
        </View>
      )}
      {menu === "H2H" ? (
        <TouchableOpacity onPress={() => setMenu("H2H")}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={["#F4A58A", "#ED6B4E"]}
            className=" rounded-full py-3 px-6 flex items-center justify-center"
          >
            <Text className="text-white font-semibold ">H2H</Text>
          </LinearGradient>
        </TouchableOpacity>
      ) : (
        <View
          className="justify-center items-center space-y-3 w-1/3"
          onPress={() => setMenu("H2H")}
        >
          <Text
            className="text-white font-semibold "
            onPress={() => setMenu("H2H")}
          >
            H2H
          </Text>
        </View>
      )}
    </View>
  );
}
