import React from "react";
import { View, Text, Image } from "react-native";

export default function Info(props) {
  const { coach } = props;
  return (
    <View className="px-6 space-y-5">
      <View className="flex-row justify-center items-center ">
        <View className="rounded-full p-1 bg-mediumgray w-fit justify-center items-center">
          <Image
            source={{
              uri: `${coach.photo}`,
            }}
            className="h-32 w-32 rounded-full border-8 border-white"
          />
        </View>
      </View>
      <Text className="text-white font-bold text-center text-2xl">
        {coach.name}
      </Text>

      {/* Info */}

      <View className="bg-mediumgray/50 rounded-lg flex-row justify-between p-2">
        <View className="w-1/2 space-y-2">
          <View className="flex-row items-center space-x-2">
            <Image
              source={require("../../assets/emojis/Info.png")}
              className="h-5 w-5"
            />
            <Text className="text-white font-bold">{coach.firstname}</Text>
          </View>
          <View className="flex-row items-center space-x-2">
            <Image
              source={require("../../assets/emojis/Calendar.png")}
              className="h-5 w-5"
            />
            <Text className="text-white font-bold">{coach.birth.date}</Text>
          </View>

          <View className="flex-row items-center space-x-2">
            <Image
              source={require("../../assets/emojis/Ruler.png")}
              className="h-5 w-5"
            />
            <Text className="text-white font-bold">{coach.weight}</Text>
          </View>
          <View className="flex-row items-center space-x-2">
            <Image
              source={require("../../assets/emojis/Globe.png")}
              className="h-5 w-5"
            />
            <Text className="text-white font-bold">{coach.birth.country}</Text>
          </View>
        </View>
        <View className="w-1/2 space-y-2">
          <View className="flex-row items-center space-x-2">
            <Image
              source={require("../../assets/emojis/Info.png")}
              className="h-5 w-5"
            />

            <Text className="text-white font-bold">{coach.lastname}</Text>
          </View>
          <View className="flex-row items-center space-x-2">
            <Image
              source={require("../../assets/emojis/Man.png")}
              className="h-5 w-5"
            />
            <Text className="text-white font-bold">{coach.birth.place}</Text>
          </View>

          <View className="flex-row items-center space-x-2">
            <Image
              source={require("../../assets/emojis/Ruler.png")}
              className="h-5 w-5"
            />

            <Text className="text-white font-bold">{coach.height}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
