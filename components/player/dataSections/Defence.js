import { View, Text, Image } from "react-native";
import React from "react";
import { BarChart } from "react-native-gifted-charts";

export default function Defence(props) {
  const { teamData } = props;

  const defence = [
    {
      value: teamData.tackles.total,
      label: "Tackles",
      topLabelComponent: () =>
        teamData.tackles.total === null ? (
          <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
            0
          </Text>
        ) : (
          <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
            {teamData.tackles.total}
          </Text>
        ),
    },
    {
      value: teamData.tackles.blocks,
      label: "Blocks",
      topLabelComponent: () =>
        teamData.tackles.blocks === null ? (
          <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
            0
          </Text>
        ) : (
          <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
            {teamData.tackles.blocks}
          </Text>
        ),
    },
    {
      value: teamData.tackles.interceptions,
      label: "Interceptions",

      topLabelComponent: () =>
        teamData.tackles.interceptions === null ? (
          <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
            0
          </Text>
        ) : (
          <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
            {teamData.tackles.interceptions}
          </Text>
        ),
    },
  ];

  return (
    <View className="border-t border-white py-2 px-2 space-y-2">
      <View className="flex-row items-center justify-center space-x-2">
        <Image
          source={require("../../../assets/emojis/Lock.png")}
          className="h-5 w-5"
        />
        <Text className="text-white font-bold text-xl">Defence</Text>
      </View>
      <View className="flex-row items-center justify-center space-x-3 px-2">
        <BarChart
          hideRules
          noOfSections={3}
          data={defence}
          showGradient
          frontColor={"#ED6B4E"}
          gradientColor={"#F4A58A"}
          xAxisLabelTextStyle={{
            color: "white",
            textAlign: "center",
          }}
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
