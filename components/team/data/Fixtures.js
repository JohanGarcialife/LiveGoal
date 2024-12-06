import React from "react";
import { View, Text, Image } from "react-native";
import { BarChart } from "react-native-gifted-charts";

export default function Fixtures(props) {
  const { fixtures } = props;
  const played = [
    {
      value: fixtures.played.home,
      label: "Home",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {fixtures.played.home}
        </Text>
      ),
    },
    {
      value: fixtures.played.away,
      label: "Away",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {fixtures.played.away}
        </Text>
      ),
    },
    {
      value: fixtures.played.total,
      label: "Total",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {fixtures.played.total}
        </Text>
      ),
    },
  ];

  const wins = [
    {
      value: fixtures.wins.home,
      label: "Home",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {fixtures.wins.home}
        </Text>
      ),
    },
    {
      value: fixtures.wins.away,
      label: "Away",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {fixtures.wins.away}
        </Text>
      ),
    },
    {
      value: fixtures.wins.total,
      label: "Total",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {fixtures.wins.total}
        </Text>
      ),
    },
  ];

  const draws = [
    {
      value: fixtures.draws.home,
      label: "Home",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {fixtures.draws.home}
        </Text>
      ),
    },
    {
      value: fixtures.draws.away,
      label: "Away",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {fixtures.draws.away}
        </Text>
      ),
    },
    {
      value: fixtures.draws.total,
      label: "Total",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {fixtures.draws.total}
        </Text>
      ),
    },
  ];

  const loses = [
    {
      value: fixtures.loses.home,
      label: "Home",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {fixtures.loses.home}
        </Text>
      ),
    },
    {
      value: fixtures.loses.away,
      label: "Away",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {fixtures.loses.away}
        </Text>
      ),
    },
    {
      value: fixtures.loses.total,
      label: "Total",
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 18, marginBottom: 6 }}>
          {fixtures.loses.total}
        </Text>
      ),
    },
  ];

  return (
    <View className="bg-mediumgray/50 rounded-xl p-4 my-2 space-y-3 ">
      <Text className="text-3xl text-white font-bold text-center">
        Fixtures
      </Text>
      {/* Played */}

      <View className=" bg-blueShadow p-3 rounded-lg space-y-3">
        <Text className=" text-white text-2xl font-bold ">Played</Text>
        <View className="flex-row justify-center items-center space-x-2">
          <BarChart
            hideRules
            noOfSections={3}
            data={played}
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
      {/* Wins */}
      <View className=" bg-blueShadow p-3 rounded-lg space-y-3">
        <Text className=" text-white text-2xl font-bold ">Wins</Text>
        <View className="flex-row justify-center items-center space-x-2">
          <BarChart
            hideRules
            noOfSections={3}
            data={wins}
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

      {/* Draw */}
      <View className=" bg-blueShadow p-3 rounded-lg space-y-3">
        <Text className=" text-white text-2xl font-bold ">Draws</Text>
        <View className="flex-row justify-center items-center space-x-2">
          <BarChart
            hideRules
            noOfSections={3}
            data={draws}
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
      {/* Loses */}
      <View className=" bg-blueShadow p-3 rounded-lg space-y-3">
        <Text className=" text-white text-2xl font-bold ">Loses</Text>
        <View className="flex-row justify-center items-center space-x-2">
          <BarChart
            hideRules
            noOfSections={3}
            data={loses}
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
