import React from "react";
import { View, Text, ScrollView, Image } from "react-native";

export default function LineUp(props) {
  const { lineups } = props;

  console.log(lineups[0]);

  const home = { formation: lineups[0].formation };

  return (
    <ScrollView>
      <View className="py-10 px-10 justify-center items-center">
        <View className="w-fit relative">
          <Image source={require("../../assets/fieldFootball.png")} />
          <View className="absolute top-3 left-[33%] items-center justify-center text-center ">
            <View className="bg-green h-10 w-10 items-center justify-center rounded-full  border-2 border-white/50">
              <Text className="text-white font-bold">9</Text>
            </View>
            <View className="bg-gray/50 rounded-md py-1 px-2">
              <Text className="text-white font-bold text-xs">Nombre</Text>
            </View>
          </View>

          <View className="absolute bottom-3 left-[33%] items-center justify-center text-center ">
            <View className="bg-green h-10 w-10 items-center justify-center rounded-full  border-2 border-white/50">
              <Text className="text-white font-bold">9</Text>
            </View>
            <View className="bg-gray/50 rounded-md py-1 px-2">
              <Text className="text-white font-bold text-xs">Nombre</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
