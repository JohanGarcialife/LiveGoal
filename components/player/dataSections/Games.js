import React from "react";
import { View, Text, Image } from "react-native";
import { BarChart } from "react-native-gifted-charts";

export default function Games(props) {
  const { teamData } = props;

  const games = [
    {
      value: teamData.games.appearences,
      label: "Appearences",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {teamData.games.appearences}
        </Text>
      ),
    },
    {
      value: teamData.games.lineups,
      label: "Lineups",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {teamData.games.lineups}
        </Text>
      ),
    },
  ];

  const substitutes = [
    {
      value: teamData.substitutes.in,
      label: "In",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {teamData.substitutes.in}
        </Text>
      ),
    },
    {
      value: teamData.substitutes.out,
      label: "Out",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {teamData.substitutes.out}
        </Text>
      ),
    },
    {
      value: teamData.substitutes.bench,
      label: "Bench",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {teamData.substitutes.bench}
        </Text>
      ),
    },
  ];

  return (
    <View className="border-t border-white py-2 space-y-3">
      <View className="flex-row items-center justify-center space-x-2">
        <Image
          source={require("../../../assets/emojis/Soccer.png")}
          className="h-5 w-5"
        />
        <Text className="text-white font-bold text-xl">Games</Text>
      </View>
      <View className="items-center space-y-2 justify-center px-2">
        <BarChart
          hideRules
          noOfSections={3}
          data={games}
          showGradient
          frontColor={"#ED6B4E"}
          gradientColor={"#F4A58A"}
          xAxisLabelTextStyle={{ color: "white", textAlign: "center" }}
          yAxisLabelTextStyle={{ color: "white", textAlign: "center" }}
          yAxisTextStyle={{ color: "white" }}
          roundedTop
          showYAxisIndices={false}
          showXAxisIndices={false}
          xAxisColor={"#fff"}
          yAxisColor={"#fff"}
          isAnimated
          barWidth={80}
        />
        <View className="space-y-2 w-1/3 bg-greenShadow rounded-lg p-2 text-center justify-center items-center">
          <Text className="text-white font-bold">Minutes</Text>
          <Text className="text-white text-xl font-bold">
            {teamData.games.minutes}
          </Text>
        </View>
      </View>

      <View className="flex-row items-center justify-center ">
        <Text className="text-white text-xl font-bold">Substitutes</Text>
      </View>
      <View className="flex-row items-center justify-center space-x-2 px-2">
        <BarChart
          hideRules
          noOfSections={3}
          data={substitutes}
          showGradient
          frontColor={"#ED6B4E"}
          gradientColor={"#F4A58A"}
          xAxisLabelTextStyle={{ color: "white", textAlign: "center" }}
          yAxisLabelTextStyle={{ color: "white", textAlign: "center" }}
          yAxisTextStyle={{ color: "white" }}
          roundedTop
          showYAxisIndices={false}
          showXAxisIndices={false}
          xAxisColor={"#fff"}
          yAxisColor={"#fff"}
          isAnimated
        />
      </View>

      {teamData.games.rating === null ? null : (
        <>
          <View className="flex-row items-center justify-center space-x-2">
            <Text className="text-white text-xl font-bold">Rating</Text>
          </View>
          <View className="flex-row items-center justify-center space-x-2">
            <Image
              source={require("../../../assets/emojis/Star.png")}
              className="h-5 w-5"
            />

            <Text className="text-white text-xl font-bold">
              {parseInt(teamData.games.rating).toFixed(1)}
            </Text>
          </View>
        </>
      )}
    </View>
  );
}
