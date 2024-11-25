import React, { useLayoutEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { player } from "../utils/Samples";
import { Entypo } from "@expo/vector-icons";
import Info from "../components/player/Info";
import Data from "../components/player/Data";

export default function Player(props) {
  const { navigation, route } = props;
  const { params } = route;
  //   const { id, name, logo } = params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const playerInfo = player.response[0].player;
  const playerData = player.response[0].statistics;

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
          <Text className="text-white font-bold text-lg">Player Info</Text>
          <View className="w-8" />
        </View>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false} className="mb-8">
        <Info player={playerInfo} />
        <Data data={playerData} />
      </ScrollView>
    </View>
  );
}
