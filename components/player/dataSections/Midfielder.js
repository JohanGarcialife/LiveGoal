import React from "react";
import { View, Text, Image } from "react-native";
import { BarChart } from "react-native-gifted-charts";

export default function Midfielder(props) {
  const { teamData } = props;

  const dribbles = [
    {
      value: teamData.dribbles.attempts,
      label: "Attempts",
      topLabelComponent: () =>
        teamData.dribbles.attempts === null ? (
          <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
            0
          </Text>
        ) : (
          <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
            {teamData.dribbles.attempts}
          </Text>
        ),
    },
    {
      value: teamData.dribbles.success,
      label: "Success",
      topLabelComponent: () =>
        teamData.dribbles.success === null ? (
          <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
            0
          </Text>
        ) : (
          <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
            {teamData.dribbles.success}
          </Text>
        ),
    },
    {
      value: teamData.dribbles.past,
      label: "Past",
      topLabelComponent: () =>
        teamData.dribbles.past === null ? (
          <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
            0
          </Text>
        ) : (
          <Text style={{ color: "white", fontSize: 10, marginBottom: 6 }}>
            {teamData.dribbles.past}
          </Text>
        ),
    },
  ];

  const passes = [
    {
      value: teamData.passes.total,
      label: "Total",
      topLabelComponent: () =>
        teamData.passes.total === null ? (
          <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
            0
          </Text>
        ) : (
          <Text style={{ color: "white", fontSize: 10, marginBottom: 6 }}>
            {teamData.passes.total}
          </Text>
        ),
    },
    {
      value: teamData.passes.key,
      label: "Key",
      topLabelComponent: () =>
        teamData.passes.key === null ? (
          <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
            0
          </Text>
        ) : (
          <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
            {teamData.passes.key}
          </Text>
        ),
    },
    {
      value: teamData.passes.accuracy,
      label: "Accuracy",
      topLabelComponent: () =>
        teamData.passes.accuracy === null ? (
          <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
            0
          </Text>
        ) : (
          <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
            {teamData.passes.accuracy}
          </Text>
        ),
    },
  ];

  return (
    <View className="border-t border-white py-2 space-y-2 px-2">
      <View className="flex-row items-center justify-center space-x-2">
        <Image
          source={require("../../../assets/emojis/Shoe.png")}
          className="h-5 w-5"
        />
        <Text className="text-white font-bold text-xl">In Game</Text>
      </View>
      {/* Dribbles */}
      <View className="flex-row items-center justify-center space-x-2 ">
        <Text className="text-white text-xl font-bold">Dribbles</Text>
      </View>
      <View className="flex-row items-center justify-center space-x-3 px-2">
        <BarChart
          hideRules
          noOfSections={3}
          data={dribbles}
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
      {/* Passes */}
      <View className="flex-row items-center justify-center space-x-2">
        <Text className="text-white text-xl font-bold">Passes</Text>
      </View>
      <View className="flex-row items-center justify-center space-x-3 px-2">
        <BarChart
          hideRules
          noOfSections={3}
          data={passes}
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
