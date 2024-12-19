import React, { useLayoutEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { fixtureStatistics, fixtureLineups } from "../utils/Samples";
import Score from "../components/match/Score";
import MatchMenu from "../components/match/MatchMenu";
import Details from "../components/match/Details";
import LineUp from "../components/match/LineUp";
import Htoh from "../components/match/Htoh";

export default function Match(props) {
  const { navigation, route } = props;
  const { params } = route;
  const { id, fixture, score } = params;
  const home = fixtureStatistics.response[0];
  const away = fixtureStatistics.response[1];
  const [menu, setMenu] = useState("Match");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="min-h-screen bg-bg py-16">
      <View className="px-6 flex-row items-center justify-between mb-5">
        <TouchableOpacity>
          <Entypo
            onPress={() => navigation.goBack()}
            name="chevron-small-left"
            size={30}
            color="white"
          />
        </TouchableOpacity>
        <Text className="text-white font-bold text-lg">Match</Text>
        <View className="w-8" />
      </View>
      <ScrollView>
        <Score score={score} />
        <View className="mt-10">
          <MatchMenu menu={menu} setMenu={setMenu} />
          {menu === "Match" && (
            <Details home={home.statistics} away={away.statistics} />
          )}
          {menu === "Lineup" && (
            <LineUp
              lineups={fixtureLineups}
              navigation={navigation}
              score={score}
            />
          )}
          {menu === "H2H" && <Htoh home={home.team.id} away={away.team.id} />}
        </View>
      </ScrollView>
    </View>
  );
}
