import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

export default function SliderBanner() {
  return (
    <View className="my-5">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-3"
      >
        <Image source={require("../../assets/banner.png")} />
        <Image source={require("../../assets/banner.png")} />
        <Image source={require("../../assets/banner.png")} />
      </ScrollView>
    </View>
  );
}
