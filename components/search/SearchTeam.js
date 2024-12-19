import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { searchTeam } from "../../utils/Samples";
import { Entypo } from "@expo/vector-icons";

export default function SearchTeam(props) {
  const { navigation } = props;
  const teams = searchTeam.response;

  return (
    <View className="px-6 py-12">
      <ScrollView className="space-y-3">
        {teams.map((team) => (
          <Team
            key={team.team.id}
            team={team}
            id={team.team.id}
            navigation={navigation}
            className="mb-3"
          />
        ))}
      </ScrollView>
    </View>
  );
}

function Team(props) {
  const { team, id, navigation } = props;

  const onNavigation = () => {
    navigation.navigate("Team", {
      id,
      name: team.name,
    });
  };
  return (
    <TouchableOpacity onPress={onNavigation}>
      <View className="bg-gray/50 rounded-2xl p-6 flex-row items-center justify-between">
        <View className="flex-row items-center space-x-3">
          <Image
            style={{ resizeMode: "contain" }}
            source={{
              uri: `${team.team.logo}`,
            }}
            className="h-12 w-12"
          />
          <View className="space-y-1">
            <Text className="text-white font-bold">{team.team.name}</Text>
            <Text className="text-white font-bold">
              Founded: {team.team.founded}
            </Text>
            <Text className="text-white font-bold">{team.team.country}</Text>
            <Text className="text-white font-bold">
              Stadium: {team.venue.name}
            </Text>
          </View>
        </View>

        <TouchableOpacity>
          <Entypo name="chevron-small-right" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
