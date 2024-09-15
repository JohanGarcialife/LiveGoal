import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

export default function Fixture(props) {
  const { fixture, id, navigation } = props;

  const score = {
    homeScore: fixture.score.home,
    awayScore: fixture.score.away,
    homeName: fixture.teams.home.name,
    awayName: fixture.teams.away.name,
    homeLogo: fixture.teams.home.logo,
    awayLogo: fixture.teams.away.logo,
    status: fixture.fixture.status.short,
  };

  const onNavigation = () => {
    navigation.navigate("Match", {
      id,
      score,
    });
  };

  return (
    <TouchableOpacity onPress={onNavigation}>
      <View className="flex-row mx-3 ">
        <View className="bg-gray/75  rounded-l-3xl p-5 flex-row items-center justify-between space-x-3">
          <View className="bg-mediumgray py-2 px-3 rounded-full p-2">
            <Image
              source={{
                uri: `${fixture.teams.home.logo}`,
              }}
              className="h-5 w-5"
            />
          </View>
          <View className="">
            <View className="flex-row items-center justify-between space-x-2">
              <Text className="text-white font-bold text-sm">
                {fixture.teams.home.name}
              </Text>
              <Text className="text-white font-bold text-xs">vs</Text>
              <Text className="text-white font-bold text-sm">
                {fixture.teams.away.name}
              </Text>
            </View>
            <View className="flex-row items-center justify-between space-x-2 px-7">
              {fixture.goals.home === null ? (
                <Text className="text-white text-lg">0</Text>
              ) : (
                <Text className="text-white text-lg">{fixture.goals.home}</Text>
              )}
              <Text className="text-white text-lg">-</Text>
              {fixture.goals.away === null ? (
                <Text className="text-white text-lg">0</Text>
              ) : (
                <Text className="text-white text-lg">{fixture.goals.away}</Text>
              )}
            </View>
          </View>
          <View className="bg-mediumgray py-2 px-3 rounded-full p-2">
            <Image
              source={{
                uri: `${fixture.teams.away.logo}`,
              }}
              className="h-5 w-5"
            />
          </View>
        </View>
        <View className="bg-mediumgray rounded-r-3xl p-5 items-center justify-center">
          <Text className="text-white font-bold text-xs">
            {fixture.fixture.status.short}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
