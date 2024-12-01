import React from "react";
import { View, Text, Image } from "react-native";

export default function Info(props) {
  const { team, league } = props;

  return (
    <View className="px-6 space-y-5">
      <View className="flex-row justify-center items-center ">
        <View className="rounded-full p-1 bg-mediumgray w-fit justify-center items-center">
          <Image
            source={{
              uri: `${team.logo}`,
            }}
            className="h-32 w-32 rounded-full border-8 border-white"
          />
        </View>
      </View>
      <Text className="text-white font-bold text-center text-2xl">
        {team.name}
      </Text>
      <View className="bg-mediumgray/50 rounded-lg flex-row justify-around items-center space-y-3 p-2">
        <View className=" items-center">
          <Text className="text-white font-bold text-lg">{league.country}</Text>

          <Text className="text-white font-bold text-lg">{league.name}</Text>
        </View>
        <View className="flex-row space-x-5 items-center">
          <Image
            source={{
              uri: `${league.logo}`,
            }}
            className="h-9 w-12"
          />
        </View>
      </View>
    </View>
  );
}
