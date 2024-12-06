import React from "react";
import { View, Text } from "react-native";
import { PieChart } from "react-native-gifted-charts";

export default function Penalty(props) {
  const { penalty } = props;

  const scored = [
    { value: parseInt(penalty.scored.percentage), color: "#84cc16" },
    { value: 100 - parseInt(penalty.scored.percentage), color: "lightgray" },
  ];
  const missed = [
    { value: parseInt(penalty.missed.percentage), color: "#dc2626" },
    { value: 100 - parseInt(penalty.missed.percentage), color: "lightgray" },
  ];

  return (
    <View className="bg-mediumgray/50 rounded-xl p-4 my-2 space-y-3 ">
      <Text className="text-white text-3xl font-bold text-center">Penalty</Text>
      {/* Scored*/}
      <View className=" bg-blueShadow p-3 rounded-lg space-y-2">
        <Text className=" text-white text-2xl font-bold ">Scored</Text>
        <View className="justify-center items-center space-y-5">
          <PieChart
            donut
            innerRadius={80}
            data={scored}
            centerLabelComponent={() => {
              return (
                <>
                  <View className="flex-row items-center justify-center space-x-1">
                    <Text style={{ fontSize: 20 }}>{penalty.scored.total}</Text>
                    <Text>/</Text>
                    <Text style={{ fontSize: 20 }}>{penalty.total}</Text>
                  </View>
                  <Text style={{ fontSize: 30 }}>
                    {penalty.scored.percentage}
                  </Text>
                </>
              );
            }}
          />
        </View>
      </View>
      {/* Missed*/}
      <View className=" bg-blueShadow p-3 rounded-lg space-y-2">
        <Text className=" text-white text-2xl font-bold ">Missed</Text>
        <View className="justify-center items-center space-y-5">
          <PieChart
            donut
            innerRadius={80}
            data={missed}
            centerLabelComponent={() => {
              return (
                <>
                  <View className="flex-row items-center justify-center space-x-1">
                    <Text style={{ fontSize: 20 }}>{penalty.missed.total}</Text>
                    <Text>/</Text>
                    <Text style={{ fontSize: 20 }}>{penalty.total}</Text>
                  </View>
                  <Text style={{ fontSize: 30 }}>
                    {penalty.missed.percentage}
                  </Text>
                </>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
}
