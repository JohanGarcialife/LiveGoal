import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Image } from "react-native";

export default function HeaderLeague(props) {
  const { name, logo } = props;

  return (
    <View className="px-6 items-center space-y-5">
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["#F4A58A", "#ED6B4E"]}
        className="mx-1 rounded-2xl h-28 w-24 flex items-center justify-center"
      >
        <Image
          source={{
            uri: `${logo}`,
          }}
          className="h-14 w-14"
        />
      </LinearGradient>
      <Text className="text-white text-lg font-bold">{name}</Text>
    </View>
  );
}
