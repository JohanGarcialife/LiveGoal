import { View, Text, Image } from "react-native";
import React from "react";

export default function Biggest(props) {
  const { biggest } = props;
  return (
    <View className="bg-mediumgray/50 rounded-xl p-4 my-2 space-y-3 ">
      <Text className="text-xl text-white font-bold text-center">Biggest</Text>
      {/* Goals For*/}
      <View className=" bg-blueShadow p-3 rounded-lg space-y-3">
        <Text className=" text-white font-bold ">Goals For</Text>
        <View className="flex-row justify-center items-center space-x-2">
          <View className="rounded-lg p-3 bg-gray/50 items-center justify-center">
            <View className="flex-row items-center justify-center space-x-2">
              <Text className="font-bold text-white">Home</Text>
              <Image
                source={require("../../../assets/emojis/House.png")}
                className="h-5 w-5"
              />
            </View>
            <Text className="text-white font-bold text-lg">
              {biggest.goals.for.home}
            </Text>
          </View>
          <View className="rounded-lg p-3 bg-gray/50 items-center justify-center">
            <View className="flex-row items-center justify-center space-x-2">
              <Text className="font-bold text-white">Away</Text>
              <Image
                source={require("../../../assets/emojis/Airplane.png")}
                className="h-5 w-5"
              />
            </View>
            <Text className="text-white font-bold text-lg">
              {biggest.goals.for.away}
            </Text>
          </View>
        </View>
      </View>
      {/* Goals against */}
      <View className=" bg-blueShadow p-3 rounded-lg space-y-3">
        <Text className=" text-white font-bold ">Goals Against</Text>
        <View className="flex-row justify-center items-center space-x-2">
          <View className="rounded-lg p-3 bg-gray/50 items-center justify-center">
            <View className="flex-row items-center justify-center space-x-2">
              <Text className="font-bold text-white">Home</Text>
              <Image
                source={require("../../../assets/emojis/House.png")}
                className="h-5 w-5"
              />
            </View>
            <Text className="text-white font-bold text-lg">
              {biggest.goals.against.home}
            </Text>
          </View>
          <View className="rounded-lg p-3 bg-gray/50 items-center justify-center">
            <View className="flex-row items-center justify-center space-x-2">
              <Text className="font-bold text-white">Away</Text>
              <Image
                source={require("../../../assets/emojis/Airplane.png")}
                className="h-5 w-5"
              />
            </View>
            <Text className="text-white font-bold text-lg">
              {biggest.goals.against.away}
            </Text>
          </View>
        </View>
      </View>

      {/* Streak */}

      <View className=" bg-blueShadow p-3 rounded-lg space-y-3">
        <Text className=" text-white font-bold ">Streak</Text>
        <View className="flex-row justify-center items-center space-x-2">
          <View className="rounded-lg p-3 bg-gray/50 items-center justify-center">
            <View className="flex-row items-center justify-center space-x-2">
              <Text className="font-bold text-white">Wins</Text>
              <Image
                source={require("../../../assets/emojis/Check.png")}
                className="h-5 w-5"
              />
            </View>
            <Text className="text-white font-bold text-lg">
              {biggest.streak.wins}
            </Text>
          </View>
          <View className="rounded-lg p-3 bg-gray/50 items-center justify-center">
            <View className="flex-row items-center justify-center space-x-2">
              <Text className="font-bold text-white">Draws</Text>
              <Image
                source={require("../../../assets/emojis/Pause.png")}
                className="h-5 w-5 rotate-90"
              />
            </View>
            <Text className="text-white font-bold text-lg">
              {biggest.streak.draws}
            </Text>
          </View>
          <View className="rounded-lg p-3 bg-gray/50 items-center justify-center">
            <View className="flex-row items-center justify-center space-x-2">
              <Text className="font-bold text-white">loses</Text>
              <Image
                source={require("../../../assets/emojis/Cross.png")}
                className="h-5 w-5"
              />
            </View>
            <Text className="text-white font-bold text-lg">
              {biggest.streak.loses}
            </Text>
          </View>
        </View>
      </View>

      {/* Wins */}
      <View className=" bg-blueShadow p-3 rounded-lg space-y-3">
        <Text className=" text-white font-bold ">Wins</Text>
        <View className="flex-row justify-center items-center space-x-2">
          <View className="rounded-lg p-3 bg-gray/50 items-center justify-center">
            <View className="flex-row items-center justify-center space-x-2">
              <Text className="font-bold text-white">Home</Text>
              <Image
                source={require("../../../assets/emojis/House.png")}
                className="h-5 w-5"
              />
            </View>
            {biggest.wins.home === null ? (
              <Text className="text-white font-bold text-lg">0</Text>
            ) : (
              <Text className="text-white font-bold text-lg">
                {biggest.wins.home}
              </Text>
            )}
          </View>
          <View className="rounded-lg p-3 bg-gray/50 items-center justify-center">
            <View className="flex-row items-center justify-center space-x-2">
              <Text className="font-bold text-white">Away</Text>
              <Image
                source={require("../../../assets/emojis/Airplane.png")}
                className="h-5 w-5"
              />
            </View>
            {biggest.wins.away === null ? (
              <Text className="text-white font-bold text-lg">0</Text>
            ) : (
              <Text className="text-white font-bold text-lg">
                {biggest.wins.away}
              </Text>
            )}
          </View>
        </View>
      </View>

      {/* Loses */}
      <View className=" bg-blueShadow p-3 rounded-lg space-y-3">
        <Text className=" text-white font-bold ">Loses</Text>
        <View className="flex-row justify-center items-center space-x-2">
          <View className="rounded-lg p-3 bg-gray/50 items-center justify-center">
            <View className="flex-row items-center justify-center space-x-2">
              <Text className="font-bold text-white">Home</Text>
              <Image
                source={require("../../../assets/emojis/House.png")}
                className="h-5 w-5"
              />
            </View>
            {biggest.loses.home === null ? (
              <Text className="text-white font-bold text-lg">0</Text>
            ) : (
              <Text className="text-white font-bold text-lg">
                {biggest.loses.home}
              </Text>
            )}
          </View>
          <View className="rounded-lg p-3 bg-gray/50 items-center justify-center">
            <View className="flex-row items-center justify-center space-x-2">
              <Text className="font-bold text-white">Away</Text>
              <Image
                source={require("../../../assets/emojis/Airplane.png")}
                className="h-5 w-5"
              />
            </View>
            {biggest.loses.away === null ? (
              <Text className="text-white font-bold text-lg">None</Text>
            ) : (
              <Text className="text-white font-bold text-lg">
                {biggest.loses.away}
              </Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}
