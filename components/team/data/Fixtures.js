import React from "react";
import { View, Text, Image } from "react-native";
import { BarChart } from "react-native-gifted-charts";

export default function Fixtures(props) {
  const { fixtures } = props;
  const played = [
    { value: fixtures.played.home, label: "Home" },
    { value: fixtures.played.away, label: "Away" },
    { value: fixtures.played.total, label: "Total" },
  ];
  return (
    <View className="bg-mediumgray/50 rounded-xl p-4 my-2 space-y-3 ">
      <Text className="text-xl text-white font-bold text-center">Fixtures</Text>
      {/* Played */}

      <View className=" bg-blueShadow p-3 rounded-lg space-y-3">
        <Text className=" text-white font-bold ">Played</Text>
        <View className="flex-row justify-center items-center space-x-2">
          <BarChart
            hideRules
            noOfSections={3}
            data={played}
            showGradient
            frontColor={"#ED6B4E"}
            gradientColor={"#F4A58A"}
            xAxisLabelTextStyle={{ color: "lightgray", textAlign: "center" }}
            roundedTop
            showYAxisIndices={false}
            showXAxisIndices={false}
            isAnimated
          />
          {/* <View className="rounded-lg p-3 bg-gray/50 items-center justify-center">
            <View className="flex-row items-center justify-center space-x-2">
              <Text className="font-bold text-white">Home</Text>
              <Image
                source={require("../../../assets/emojis/House.png")}
                className="h-5 w-5"
              />
            </View>
            <Text className="text-white font-bold text-lg">
              {fixtures.played.home}
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
              {fixtures.played.away}
            </Text>
          </View>
          <View className="rounded-lg p-3 bg-gray/50 items-center justify-center">
            <View className="flex-row items-center justify-center space-x-2">
              <Text className="font-bold text-white">Total</Text>
              <Image
                source={require("../../../assets/emojis/Soccer.png")}
                className="h-5 w-5"
              />
            </View>
            <Text className="text-white font-bold text-lg">
              {fixtures.played.total}
            </Text>
          </View> */}
        </View>
      </View>
      {/* Wins */}
      <View className=" bg-blueShadow p-3 rounded-lg space-y-3">
        <Text className=" text-white font-bold ">Wins</Text>
        <View className="flex-row justify-center items-center space-x-2">
          <View className="rounded-lg p-3 bg-green/50 items-center justify-center">
            <View className="flex-row items-center justify-center space-x-2">
              <Text className="font-bold text-white">Home</Text>
              <Image
                source={require("../../../assets/emojis/House.png")}
                className="h-5 w-5"
              />
            </View>
            <Text className="text-white font-bold text-lg">
              {fixtures.wins.home}
            </Text>
          </View>
          <View className="rounded-lg p-3 bg-green/50 items-center justify-center">
            <View className="flex-row items-center justify-center space-x-2">
              <Text className="font-bold text-white">Away</Text>
              <Image
                source={require("../../../assets/emojis/Airplane.png")}
                className="h-5 w-5"
              />
            </View>
            <Text className="text-white font-bold text-lg">
              {fixtures.wins.away}
            </Text>
          </View>
          <View className="rounded-lg p-3 bg-green/50 items-center justify-center">
            <View className="flex-row items-center justify-center space-x-2">
              <Text className="font-bold text-white">Total</Text>
              <Image
                source={require("../../../assets/emojis/Soccer.png")}
                className="h-5 w-5"
              />
            </View>
            <Text className="text-white font-bold text-lg">
              {fixtures.wins.total}
            </Text>
          </View>
        </View>
      </View>

      {/* Draw */}
      <View className=" bg-blueShadow p-3 rounded-lg space-y-3">
        <Text className=" text-white font-bold ">Draws</Text>
        <View className="flex-row justify-center items-center space-x-2">
          <View className="rounded-lg p-3 bg-yellow-500/50 items-center justify-center">
            <View className="flex-row items-center justify-center space-x-2">
              <Text className="font-bold text-white">Home</Text>
              <Image
                source={require("../../../assets/emojis/House.png")}
                className="h-5 w-5"
              />
            </View>
            <Text className="text-white font-bold text-lg">
              {fixtures.draws.home}
            </Text>
          </View>
          <View className="rounded-lg p-3 bg-yellow-500/50 items-center justify-center">
            <View className="flex-row items-center justify-center space-x-2">
              <Text className="font-bold text-white">Away</Text>
              <Image
                source={require("../../../assets/emojis/Airplane.png")}
                className="h-5 w-5"
              />
            </View>
            <Text className="text-white font-bold text-lg">
              {fixtures.draws.away}
            </Text>
          </View>
          <View className="rounded-lg p-3 bg-yellow-500/50 items-center justify-center">
            <View className="flex-row items-center justify-center space-x-2">
              <Text className="font-bold text-white">Total</Text>
              <Image
                source={require("../../../assets/emojis/Soccer.png")}
                className="h-5 w-5"
              />
            </View>
            <Text className="text-white font-bold text-lg">
              {fixtures.draws.total}
            </Text>
          </View>
        </View>
      </View>
      {/* Loses */}
      <View className=" bg-blueShadow p-3 rounded-lg space-y-3">
        <Text className=" text-white font-bold ">Loses</Text>
        <View className="flex-row justify-center items-center space-x-2">
          <View className="rounded-lg p-3 bg-redShadow items-center justify-center">
            <View className="flex-row items-center justify-center space-x-2">
              <Text className="font-bold text-white">Home</Text>
              <Image
                source={require("../../../assets/emojis/House.png")}
                className="h-5 w-5"
              />
            </View>
            <Text className="text-white font-bold text-lg">
              {fixtures.loses.home}
            </Text>
          </View>
          <View className="rounded-lg p-3 bg-redShadow items-center justify-center">
            <View className="flex-row items-center justify-center space-x-2">
              <Text className="font-bold text-white">Away</Text>
              <Image
                source={require("../../../assets/emojis/Airplane.png")}
                className="h-5 w-5"
              />
            </View>
            <Text className="text-white font-bold text-lg">
              {fixtures.loses.away}
            </Text>
          </View>
          <View className="rounded-lg p-3 bg-redShadow items-center justify-center">
            <View className="flex-row items-center justify-center space-x-2">
              <Text className="font-bold text-white">Total</Text>
              <Image
                source={require("../../../assets/emojis/Soccer.png")}
                className="h-5 w-5"
              />
            </View>
            <Text className="text-white font-bold text-lg">
              {fixtures.loses.total}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
