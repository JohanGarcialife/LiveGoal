import { View, Text, Image } from "react-native";
import React from "react";

export default function Score(props) {
  const { score } = props;
  const {
    awayLogo,
    awayName,
    awayScore,
    homeLogo,
    homeName,
    homeScore,
    status,
  } = score;

  return (
    <View className="flex-row px-6 justify-around items-center">
      <View className="justify-center items-center space-y-3 w-1/3">
        <View className="rounded-full p-3 bg-mediumgray w-fit justify-center items-center">
          <Image
            source={{
              uri: `${homeLogo}`,
            }}
            className="h-10 w-10"
          />
        </View>
        <Text className="text-white font-semibold">{homeName}</Text>
      </View>
      <View className="justify-end items-center w-1/3">
        <View className=" flex-row  justify-center items-center space-x-2">
          {homeScore === undefined ? (
            <Text className="text-white font-semibold text-4xl">0</Text>
          ) : (
            <Text className="text-white font-semibold text-4xl">
              {homeScore}
            </Text>
          )}
          <Text className="text-white font-semibold text-4xl">-</Text>

          {awayScore === undefined ? (
            <Text className="text-white font-semibold text-4xl">0</Text>
          ) : (
            <Text className="text-white font-semibold text-4xl">
              {awayScore}
            </Text>
          )}
        </View>
        <Text className="text-white font-semibold mt-3">{status}</Text>
      </View>
      <View className="justify-center items-center space-y-3 w-1/3">
        <View className="rounded-full p-3 bg-mediumgray w-fit justify-center items-center">
          <Image
            source={{
              uri: `${awayLogo}`,
            }}
            className="h-10 w-10"
          />
        </View>
        <Text className="text-white font-semibold">{awayName}</Text>
      </View>
    </View>
  );
}
