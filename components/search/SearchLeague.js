import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { searchLeagues } from "../../utils/Samples";
import { Entypo } from "@expo/vector-icons";

export default function SearchLeague() {
  const leagues = searchLeagues.response;

  return (
    <View className="px-6 py-12">
      <ScrollView className="space-y-3">
        {leagues.map((league) => (
          <TouchableOpacity key={league.league.id}>
            <View className="bg-gray/50 rounded-2xl p-6 flex-row items-center justify-between">
              <View className="flex-row items-center space-x-3">
                <Image
                  style={{ resizeMode: "contain" }}
                  source={{
                    uri: `${league.league.logo}`,
                  }}
                  className="h-12 w-12"
                />
                <View className="space-y-1">
                  <Text className="text-white font-bold">
                    {league.league.name}
                  </Text>
                  <Text className="text-white font-bold">
                    {league.league.type}
                  </Text>
                  <Text className="text-white font-bold">
                    {league.country.name}
                  </Text>
                </View>
              </View>

              <TouchableOpacity>
                <Entypo name="chevron-small-right" size={30} color="white" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
