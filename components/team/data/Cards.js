import React from "react";
import { View, Text } from "react-native";
import { LineChart } from "react-native-gifted-charts";

export default function Cards(props) {
  const { cards } = props;
  console.log(cards);

  const yellowCard = [
    { value: cards.yellow["0-15"].total, dataPointText: "0-15" },
    { value: cards.yellow["16-30"].total, dataPointText: "16-30" },
    { value: cards.yellow["31-45"].total, dataPointText: "31-45" },
    { value: cards.yellow["46-60"].total, dataPointText: "46-60" },
    { value: cards.yellow["61-75"].total, dataPointText: "61-75" },
    { value: cards.yellow["76-90"].total, dataPointText: "76-90" },
    {
      value: cards.yellow["91-105"].total + cards.yellow["106-120"].total,
      dataPointText: "+90",
    },
    // { value: , dataPointText: "106-120" },
  ];
  const redCard = [
    { value: cards.red["0-15"].total, dataPointText: "0-15" },
    { value: cards.red["16-30"].total, dataPointText: "16-30" },
    { value: cards.red["31-45"].total, dataPointText: "31-45" },
    { value: cards.red["46-60"].total, dataPointText: "46-60" },
    { value: cards.red["61-75"].total, dataPointText: "61-75" },
    { value: cards.red["76-90"].total, dataPointText: "76-90" },
    {
      value: cards.red["91-105"].total + cards.red["106-120"].total,
      dataPointText: "+90",
    },
    // { value: , dataPointText: "106-120" },
  ];

  return (
    <View className="bg-mediumgray/50 rounded-xl p-4 my-2 space-y-3 ">
      <Text className="text-white text-3xl font-bold text-center">Cards</Text>

      <View className=" bg-blueShadow p-3 rounded-lg space-y-3">
        <Text className=" text-white text-2xl font-bold ">Yellow cards</Text>
        <View className="justify-center items-center space-y-5">
          <LineChart
            hideRules
            data={yellowCard}
            color={"yellow"}
            thickness={3}
            dataPointsColor={"white"}
            yAxisLabelTextStyle={{ color: "white", textAlign: "center" }}
            yAxisTextStyle={{ color: "white" }}
            xAxisColor={"#fff"}
            yAxisColor={"#fff"}
            isAnimated
            spacing={30}
            textColor1="white"
            textShiftY={-5}
            textShiftX={5}
            textFontSize={13}
          />
        </View>
      </View>
      <View className=" bg-blueShadow p-3 rounded-lg space-y-3">
        <Text className=" text-white text-2xl font-bold ">Red cards</Text>
        <View className="justify-center items-center space-y-5">
          <LineChart
            hideRules
            data={redCard}
            color={"red"}
            thickness={3}
            dataPointsColor={"white"}
            yAxisLabelTextStyle={{ color: "white", textAlign: "center" }}
            yAxisTextStyle={{ color: "white" }}
            xAxisColor={"#fff"}
            yAxisColor={"#fff"}
            isAnimated
            spacing={30}
            textColor1="yellow"
            textShiftY={-5}
            textShiftX={5}
            textFontSize={13}
          />
        </View>
      </View>
    </View>
  );
}
