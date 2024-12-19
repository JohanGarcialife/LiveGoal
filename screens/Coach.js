import React, { useLayoutEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { coach } from "../utils/Samples";
import Coachinfo from "../components/coach/Info";
import SliderTeam from "../components/sliders/SliderTeam";

export default function Coach(props) {
  const { navigation, route } = props;
  // const { params } = route;
  //   const { id, name, logo } = params;

  const coachInfo = coach.response;
  console.log(coachInfo);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

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
          <Text className="text-white font-bold text-lg">Coach Info</Text>
          <View className="w-8" />
        </View>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false} className="mb-8">
        <Coachinfo coach={coachInfo[0]} />
        <SliderTeam teams={coachInfo[0].career} />
      </ScrollView>
    </View>
  );
}
