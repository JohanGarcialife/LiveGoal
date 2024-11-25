import React from "react";
import { View, Text, Image } from "react-native";

export default function Formation4231(props) {
  const { formation } = props;

  return (
    <View>
      <Image source={require("../../../../assets/fieldFootball.png")} />

      {/* Delanteros */}

      <View className="absolute bottom-64 left-[10%] items-center space-y-1 justify-center text-center ">
        <View className="bg-green h-10 w-10 items-center justify-center rounded-full  border-2 border-white/50">
          <Text className="text-white font-bold">
            {formation[8].player.number}
          </Text>
        </View>
        <View className="bg-gray/50 rounded-md py-1 px-2">
          <Text className="text-white font-bold text-[10px] max-w-[70px] overflow-hidden text-center line-clamp-1">
            {formation[8].player.name}
          </Text>
        </View>
      </View>

      <View className="absolute bottom-52 left-[42%] items-center space-y-1 justify-center text-center ">
        <View className="bg-green h-10 w-10 items-center justify-center rounded-full  border-2 border-white/50">
          <Text className="text-white font-bold">
            {formation[9].player.number}
          </Text>
        </View>
        <View className="bg-gray/50 rounded-md py-1 px-2">
          <Text className="text-white font-bold text-[10px] max-w-[70px] overflow-hidden text-center line-clamp-1">
            {formation[9].player.name}
          </Text>
        </View>
      </View>

      <View className="absolute bottom-72 left-[42%] items-center space-y-1 justify-center text-center ">
        <View className="bg-green h-10 w-10 items-center justify-center rounded-full  border-2 border-white/50">
          <Text className="text-white font-bold">
            {formation[10].player.number}
          </Text>
        </View>
        <View className="bg-gray/50 rounded-md py-1 px-2">
          <Text className="text-white font-bold text-[10px] max-w-[70px] overflow-hidden text-center line-clamp-1">
            {formation[10].player.name}
          </Text>
        </View>
      </View>

      {/* Mediocampistas */}

      <View className="absolute bottom-40 left-[22%] items-center space-y-1 justify-center text-center ">
        <View className="bg-green h-10 w-10 items-center justify-center rounded-full  border-2 border-white/50">
          <Text className="text-white font-bold">
            {formation[5].player.number}
          </Text>
        </View>
        <View className="bg-gray/50 rounded-md py-1 px-2">
          <Text className="text-white font-bold text-[10px] max-w-[70px] overflow-hidden text-center line-clamp-1">
            {formation[5].player.name}
          </Text>
        </View>
      </View>

      <View className="absolute bottom-40 left-[65%] items-center space-y-1 justify-center text-center ">
        <View className="bg-green h-10 w-10 items-center justify-center rounded-full  border-2 border-white/50">
          <Text className="text-white font-bold">
            {formation[6].player.number}
          </Text>
        </View>
        <View className="bg-gray/50 rounded-md py-1 px-2">
          <Text className="text-white font-bold text-[10px] max-w-[70px] overflow-hidden text-center line-clamp-1">
            {formation[6].player.name}
          </Text>
        </View>
      </View>

      <View className="absolute bottom-64 left-[72%] items-center space-y-1 justify-center text-center ">
        <View className="bg-green h-10 w-10 items-center justify-center rounded-full  border-2 border-white/50">
          <Text className="text-white font-bold">
            {formation[7].player.number}
          </Text>
        </View>
        <View className="bg-gray/50 rounded-md py-1 px-2">
          <Text className="text-white font-bold text-[10px] max-w-[70px] overflow-hidden text-center line-clamp-1">
            {formation[7].player.name}
          </Text>
        </View>
      </View>

      {/* Defensas */}

      <View className="absolute bottom-20 left-[5%] items-center space-y-1 justify-center text-center ">
        <View className="bg-green h-10 w-10 items-center justify-center rounded-full  border-2 border-white/50">
          <Text className="text-white font-bold">4</Text>
        </View>
        <View className="bg-gray/50 rounded-md py-1 px-2">
          <Text className="text-white font-bold text-[10px] max-w-[70px] overflow-hidden text-center line-clamp-1">
            {formation[1].player.name}
          </Text>
        </View>
      </View>

      <View className="absolute bottom-20 left-[28%] items-center space-y-1 justify-center text-center ">
        <View className="bg-green h-10 w-10 items-center justify-center rounded-full  border-2 border-white/50">
          <Text className="text-white font-bold">
            {formation[2].player.number}
          </Text>
        </View>
        <View className="bg-gray/50 rounded-md py-1 px-2">
          <Text className="text-white font-bold text-[10px] max-w-[70px] overflow-hidden text-center line-clamp-1">
            {formation[2].player.name}
          </Text>
        </View>
      </View>

      <View className="absolute bottom-20 left-[52%] items-center space-y-1 justify-center text-center   ">
        <View className="bg-green h-10 w-10 items-center justify-center rounded-full  border-2 border-white/50">
          <Text className="text-white font-bold">
            {formation[3].player.number}
          </Text>
        </View>
        <View className="bg-gray/50 rounded-md py-1 px-2  ">
          <Text className="text-white font-bold text-[10px] max-w-[70px] overflow-hidden text-center line-clamp-1 ">
            {formation[3].player.name}
          </Text>
        </View>
      </View>

      <View className="absolute bottom-20 left-[75%] items-center space-y-1 justify-center text-center ">
        <View className="bg-green h-10 w-10 items-center justify-center rounded-full  border-2 border-white/50">
          <Text className="text-white font-bold">
            {formation[4].player.number}
          </Text>
        </View>
        <View className="bg-gray/50 rounded-md py-1 px-2">
          <Text className="text-white font-bold text-[10px] max-w-[70px] overflow-hidden text-center line-clamp-1">
            {formation[4].player.name}
          </Text>
        </View>
      </View>

      {/* Portero */}

      <View className="absolute bottom-3 left-[42%] items-center space-y-1 justify-center text-center ">
        <View className="bg-green h-10 w-10 items-center justify-center rounded-full  border-2 border-white/50">
          <Text className="text-white font-bold">
            {formation[0].player.number}
          </Text>
        </View>
        <View className="bg-gray/50 rounded-md py-1 px-2">
          <Text className="text-white font-bold text-[10px] max-w-[70px] overflow-hidden text-center line-clamp-1">
            {formation[0].player.name}
          </Text>
        </View>
      </View>
    </View>
  );
}
