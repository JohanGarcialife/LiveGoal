import { Entypo } from "@expo/vector-icons";
import React, { useLayoutEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import SliderSearch from "../components/sliders/SliderSearch";

export default function Explore(props) {
  const { navigation } = props;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View className="min-h-screen bg-bg py-12">
      <TouchableOpacity>
        <View className="px-6 flex-row items-center justify-between mb-5">
          <Entypo
            onPress={() => navigation.goBack()}
            name="chevron-small-left"
            size={30}
            color="white"
          />
          <Text className="text-white font-bold text-lg">Explore</Text>
          <View className="w-8" />
        </View>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SliderSearch navigation={navigation} />
      </ScrollView>
    </View>
  );
}
