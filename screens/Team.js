import React, { useLayoutEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { team, teamStatistic } from "../utils/Samples";
import Info from "../components/team/Info";
import Data from "../components/team/Data";

export default function Team(props) {
  const { navigation, route } = props;
  const { params } = route;
  const { id, name } = params;

  console.log("id =", id);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="min-h-screen bg-bg py-16 ">
      <TouchableOpacity>
        <View className="px-6 flex-row items-center justify-between mb-5">
          <Entypo
            onPress={() => navigation.goBack()}
            name="chevron-small-left"
            size={30}
            color="white"
          />
          <Text className="text-white font-bold text-lg">Team Info</Text>
          <View className="w-8" />
        </View>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false} className="mb-8">
        <Info
          team={teamStatistic.response.team}
          league={teamStatistic.response.league}
        />
        <Data
          fixtures={teamStatistic.response.fixtures}
          goals={teamStatistic.response.goals}
          penalty={teamStatistic.response.penalty}
          form={teamStatistic.response.form}
          biggest={teamStatistic.response.biggest}
          cards={teamStatistic.response.cards}
          cleanSheets={teamStatistic.response.clean_sheet}
          failedToScore={teamStatistic.response.failed_to_score}
        />
      </ScrollView>
    </View>
  );
}
