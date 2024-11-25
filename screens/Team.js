import React, { useLayoutEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { team, teamStatistic } from "../utils/Samples";

export default function Team(props) {
  const { navigation, route } = props;
  const { params } = route;
  //   const { id, name, logo } = params;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  console.log(teamStatistic.response);

  return (
    <View className="min-h-screen bg-bg py-16 ">
      <TouchableOpacity>
        <View className="px-6 flex-row items-center justify-between mb-5">
          <Entypo
            onPress={() => navigation.goBack()}
            name="chevron-small-left"
            size={30}
            color="white"
          />
          <Text className="text-white font-bold text-lg">Team Info</Text>
          <View className="w-8" />
        </View>
      </TouchableOpacity>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="mb-8"
      ></ScrollView>
    </View>
  );
}
