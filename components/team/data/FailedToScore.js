import React from "react";
import { View, Text } from "react-native";
import { BarChart } from "react-native-gifted-charts";

export default function FailedToScore(props) {
  const { failedToScore } = props;

  const failed = [
    {
      value: failedToScore.home,
      label: "Home",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {failedToScore.home}
        </Text>
      ),
    },
    {
      value: failedToScore.away,
      label: "Away",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {failedToScore.away}
        </Text>
      ),
    },
    {
      value: failedToScore.total,
      label: "Total",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {failedToScore.total}
        </Text>
      ),
    },
  ];

  return (
    <View className="bg-mediumgray/50 rounded-xl p-4 my-2 space-y-3 ">
      <Text className="text-3xl text-white font-bold text-center">
        Failed to Score
      </Text>

      <View className=" bg-blueShadow p-3 rounded-lg space-y-3">
        {/* <Text className=" text-white text-2xl font-bold ">Played</Text> */}
        <View className="flex-row justify-center items-center space-x-2">
          <BarChart
            hideRules
            noOfSections={3}
            data={failed}
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
    </View>
  );
}
