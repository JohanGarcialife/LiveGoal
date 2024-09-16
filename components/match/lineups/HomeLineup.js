import React from "react";
import { View, Text, Image } from "react-native";
import Formation433 from "./formations/Formation433";

export default function HomeLineup(props) {
  const { formation, coach, logo } = props;

  console.log(formation);
  return (
    <View>
      <View className="flex-row items-center bg-blueShadow rounded-lg p-2 justify-around">
        <Image
          source={{
            uri: `${coach.photo}`,
          }}
          className="h-14 w-14 rounded-lg"
        />
        <Text className="text-white font-semibold text-xl">{coach.name}</Text>
        <Image
          source={{
            uri: `${logo}`,
          }}
          className="h-14 w-14 rounded-lg"
        />
      </View>
      <View className="flex-row items-center justify-center my-5">
        <Text className="text-white text-xl font-semibold">{formation}</Text>
      </View>

      <View className="w-full  relative">
        {formation === "4-3-3" && <Formation433 />}
      </View>
    </View>
  );
}
