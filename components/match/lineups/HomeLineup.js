import React from "react";
import { View, Text, Image } from "react-native";

export default function HomeLineup(props) {
  const { formation, coach } = props;

  console.log(coach);
  return (
    <View>
      <View className="flex-row items-center justify-center mb-5">
        <Text className="text-white text-xl font-semibold">{formation}</Text>
      </View>
      <View className="w-fit relative">
        <Image source={require("../../../assets/fieldFootball.png")} />
        <View className="absolute top-3 left-[42%] items-center justify-center text-center ">
          <View className="bg-green h-10 w-10 items-center justify-center rounded-full  border-2 border-white/50">
            <Text className="text-white font-bold">9</Text>
          </View>
          <View className="bg-gray/50 rounded-md py-1 px-2">
            <Text className="text-white font-bold text-xs">Nombre</Text>
          </View>
        </View>

        <View className="absolute bottom-3 left-[42%] items-center justify-center text-center ">
          <View className="bg-green h-10 w-10 items-center justify-center rounded-full  border-2 border-white/50">
            <Text className="text-white font-bold">9</Text>
          </View>
          <View className="bg-gray/50 rounded-md py-1 px-2">
            <Text className="text-white font-bold text-xs">Nombre</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
