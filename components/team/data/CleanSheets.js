import React from "react";
import { View, Text } from "react-native";
import { BarChart } from "react-native-gifted-charts";

export default function CleanSheets(props) {
  const { cleanSheets } = props;

  const noGoals = [
    {
      value: cleanSheets.home,
      label: "Home",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {cleanSheets.home}
        </Text>
      ),
    },
    {
      value: cleanSheets.away,
      label: "Away",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {cleanSheets.away}
        </Text>
      ),
    },
    {
      value: cleanSheets.total,
      label: "Total",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {cleanSheets.total}
        </Text>
      ),
    },
  ];
  console.log(cleanSheets);
  return (
    <View className="bg-mediumgray/50 rounded-xl p-4 my-2 space-y-3 ">
      <Text className="text-3xl text-white font-bold text-center">
        Clean Sheets
      </Text>

      <View className=" bg-blueShadow p-3 rounded-lg space-y-3">
        {/* <Text className=" text-white text-2xl font-bold ">Played</Text> */}
        <View className="flex-row justify-center items-center space-x-2">
          <BarChart
            hideRules
            noOfSections={3}
            data={noGoals}
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
