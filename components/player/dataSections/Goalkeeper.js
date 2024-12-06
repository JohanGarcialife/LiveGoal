import { View, Text, Image } from "react-native";
import React from "react";
import { BarChart } from "react-native-gifted-charts";

export default function GoalKeeper(props) {
  const { teamData } = props;

  const goalkeeper = [
    {
      value: teamData.goals.saves,
      label: "Saves",
      topLabelComponent: () =>
        teamData.goals.saves === null ? (
          <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
            0
          </Text>
        ) : (
          <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
            {teamData.goals.saves}
          </Text>
        ),
    },
    {
      value: teamData.goals.conceded,
      label: "Conceded",
      topLabelComponent: () =>
        teamData.goals.conceded === null ? (
          <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
            0
          </Text>
        ) : (
          <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
            {teamData.goals.conceded}
          </Text>
        ),
    },
    {
      value: teamData.penalty.saved,
      label: "Penalty Saved",
      topLabelComponent: () =>
        teamData.penalty.saved === null ? (
          <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
            0
          </Text>
        ) : (
          <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
            {teamData.penalty.saved}
          </Text>
        ),
    },
  ];

  return (
    <View className="border-t border-white py-2 px-2 space-y-2">
      <View className="flex-row items-center justify-center space-x-2">
        <Image
          source={require("../../../assets/emojis/Gloves.png")}
          className="h-5 w-5"
        />
        <Text className="text-white font-bold text-xl">Goalkeeper</Text>
      </View>
      <View className="flex-row items-center justify-center space-x-3 px-2">
        <BarChart
          hideRules
          noOfSections={3}
          data={goalkeeper}
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
{
  /* <View className="border-t border-white space-y-2 py-2 px-2">
  <View className="flex-row items-center justify-center space-x-2">
    <Image
      source={require("../../assets/emojis/Gloves.png")}
      className="h-5 w-5"
    />
    <Text className="text-white font-bold text-xl">Goalkeeper</Text>
  </View>
  <View className="flex-row items-center justify-center space-x-3 px-2">
    {teamData.goals.saves === null ? (
      <View className="space-y-2 w-1/3 bg-greenShadow rounded-lg p-2 text-center justify-center items-center">
        <Text className="text-white font-bold">Saves</Text>
        <Text className="text-white text-xl font-bold">0</Text>
      </View>
    ) : (
      <View className="space-y-2 w-1/3 bg-orangeShadow rounded-lg p-2 text-center justify-center items-center">
        <Text className="text-white font-bold">Saves</Text>
        <Text className="text-white text-xl font-bold">
          {teamData.goals.saves}
        </Text>
      </View>
    )}
    {teamData.goals.conceded === null ? (
      <View className="space-y-2 w-1/3 bg-greenShadow rounded-lg p-2 text-center justify-center items-center">
        <Text className="text-white font-bold">Conceded</Text>
        <Text className="text-white text-xl font-bold">0</Text>
      </View>
    ) : (
      <View className="space-y-2 w-1/3 bg-greenShadow rounded-lg p-2 text-center justify-center items-center">
        <Text className="text-white font-bold">Saves</Text>
        <Text className="text-white text-xl font-bold">
          {teamData.goals.conceded}
        </Text>
      </View>
    )}
    {teamData.penalty.saved === null ? (
      <View className="space-y-2 w-1/3 bg-greenShadow rounded-lg p-2 text-center justify-center items-center">
        <Text className="text-white text-xs text-center font-bold">
          Penalty Saved
        </Text>
        <Text className="text-white text-xl font-bold">0</Text>
      </View>
    ) : (
      <View className="space-y-2 w-1/3 bg-greenShadow rounded-lg p-2 text-center justify-center items-center">
        <Text className="text-white text-xs font-bold">Penalty Saved</Text>
        <Text className="text-white text-xl text-center font-bold">
          {teamData.penalty.saved}
        </Text>
      </View>
    )}
  </View>
</View>; */
}
