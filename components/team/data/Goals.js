import React from "react";
import { View, Text, Image } from "react-native";
import { BarChart, LineChart } from "react-native-gifted-charts";

export default function Goals(props) {
  const { goals } = props;

 

  const goalsFor = [
    {
      value: goals.for.total.home,
      label: "Home",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {goals.for.total.total}
        </Text>
      ),
    },
    {
      value: goals.for.total.away,
      label: "Away",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {goals.for.total.away}
        </Text>
      ),
    },
    {
      value: goals.for.total.total,
      label: "Total",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {goals.for.total.total}
        </Text>
      ),
    },
  ];

  const averageGoalsFor = [
    {
      value: parseInt(goals.for.average.home),
      label: "Home",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {goals.for.average.home}
        </Text>
      ),
    },
    {
      value: parseInt(goals.for.average.away),
      label: "Away",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {goals.for.average.away}
        </Text>
      ),
    },
    {
      value: parseInt(goals.for.average.total),
      label: "Total",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {goals.for.average.total}
        </Text>
      ),
    },
  ];

  const goalsAgainst = [
    {
      value: goals.against.total.home,
      label: "Home",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {goals.against.total.total}
        </Text>
      ),
    },
    {
      value: goals.against.total.away,
      label: "Away",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {goals.against.total.away}
        </Text>
      ),
    },
    {
      value: goals.against.total.total,
      label: "Total",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {goals.against.total.total}
        </Text>
      ),
    },
  ];

  const averageGoalsAgainst = [
    {
      value: parseInt(goals.against.average.home),
      label: "Home",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {goals.against.average.home}
        </Text>
      ),
    },
    {
      value: parseInt(goals.against.average.away),
      label: "Away",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {goals.against.average.away}
        </Text>
      ),
    },
    {
      value: parseInt(goals.against.average.total),
      label: "Total",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {goals.against.average.total}
        </Text>
      ),
    },
  ];

  const minutesFor = [
    { value: goals.for.minute["0-15"].total, dataPointText: "0-15" },
    { value: goals.for.minute["16-30"].total, dataPointText: "16-30" },
    { value: goals.for.minute["31-45"].total, dataPointText: "31-45" },
    { value: goals.for.minute["46-60"].total, dataPointText: "46-60" },
    { value: goals.for.minute["61-75"].total, dataPointText: "61-75" },
    { value: goals.for.minute["76-90"].total, dataPointText: "76-90" },
    {
      value:
        goals.for.minute["91-105"].total + goals.for.minute["106-120"].total,
      dataPointText: "+90",
    },
    // { value: , dataPointText: "106-120" },
  ];

  const minutesAgainst = [
    { value: goals.against.minute["0-15"].total, dataPointText: "0-15" },
    { value: goals.against.minute["16-30"].total, dataPointText: "16-30" },
    { value: goals.against.minute["31-45"].total, dataPointText: "31-45" },
    { value: goals.against.minute["46-60"].total, dataPointText: "46-60" },
    { value: goals.against.minute["61-75"].total, dataPointText: "61-75" },
    { value: goals.against.minute["76-90"].total, dataPointText: "76-90" },
    {
      value:
        goals.against.minute["91-105"].total +
        goals.for.minute["106-120"].total,
      dataPointText: "+90",
    },
    // { value: , dataPointText: "106-120" },
  ];

  return (
    <View className="bg-mediumgray/50 rounded-xl p-4 my-2 space-y-3 ">
      <Text className="text-white text-3xl font-bold text-center">Goals</Text>
      {/* Goals For*/}
      <View className=" bg-blueShadow p-3 rounded-lg space-y-2">
        <Text className=" text-white text-2xl font-bold ">Goals For</Text>
        <View className="justify-center items-center space-y-5">
          <BarChart
            hideRules
            noOfSections={3}
            data={goalsFor}
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
          <Text className=" text-white font-bold ">Average</Text>
          <BarChart
            hideRules
            noOfSections={3}
            data={averageGoalsFor}
            showGradient
            frontColor={"#ED6B4E"}
            gradientColor={"#F4A58A"}
            xAxisLabelTextStyle={{ color: "white", textAlign: "center" }}
            yAxisLabelTextStyle={{ color: "white", textAlign: "center" }}
            yAxisTextStyle={{ color: "white" }}
            xAxisColor={"#fff"}
            yAxisColor={"#fff"}
            roundedTop
            showYAxisIndices={false}
            showXAxisIndices={false}
            isAnimated
          />
          <Text className=" text-white font-bold mb-5">Minutes</Text>
          <LineChart
            hideRules
            data={minutesFor}
            color={"#fff"}
            thickness={3}
            dataPointsColor={"red"}
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

      {/* Goals Against */}
      <View className=" bg-blueShadow p-3 rounded-lg space-y-3">
        <Text className=" text-white text-2xl font-bold ">Goals Against</Text>
        <View className="justify-center items-center space-y-5">
          <BarChart
            hideRules
            noOfSections={3}
            data={goalsAgainst}
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
          <Text className=" text-white font-bold ">Average</Text>
          <BarChart
            hideRules
            noOfSections={3}
            data={averageGoalsAgainst}
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
          <Text className=" text-white font-bold mb-5">Minutes</Text>
          <LineChart
            hideRules
            data={minutesAgainst}
            color={"#fff"}
            thickness={3}
            dataPointsColor={"red"}
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
