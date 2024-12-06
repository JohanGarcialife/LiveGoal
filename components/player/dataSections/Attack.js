import React from "react";
import { View, Text, Image } from "react-native";
import { BarChart } from "react-native-gifted-charts";

export default function Attack(props) {
  const { teamData } = props;

  const goals = [
    {
      value: teamData.goals.total,
      label: "Total",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {teamData.goals.total}
        </Text>
      ),
    },
    {
      value: teamData.goals.assists,
      label: "Assists",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {teamData.goals.assists}
        </Text>
      ),
    },
    {
      value: teamData.penalty.scored,
      label: "Penalty",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {teamData.penalty.scored}
        </Text>
      ),
    },
  ];

  return (
    <View className="border-t border-white py-2 space-y-2 px-2">
      <View className="flex-row items-center justify-center space-x-2">
        <Image
          source={require("../../../assets/emojis/Boom.png")}
          className="h-5 w-5"
        />
        <Text className="text-white font-bold text-xl">Attack</Text>
      </View>
      <View className="flex-row items-center justify-center space-x-2">
        <BarChart
          hideRules
          noOfSections={3}
          data={goals}
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
    </View>
  );
}
