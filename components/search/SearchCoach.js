import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { searchCoach } from "../../utils/Samples";
import { Entypo } from "@expo/vector-icons";

export default function SearchCoach() {
  const coachs = searchCoach.response;

  return (
    <View className="px-6 py-12">
      <ScrollView className="space-y-3">
        {coachs.map((coach) => (
          <TouchableOpacity key={coach.id}>
            <View className="bg-gray/50 rounded-2xl p-6 ">
              <View className="flex-row items-center justify-between w-full">
                <View className="flex-row items-center space-x-3">
                  <Image
                    style={{ resizeMode: "contain" }}
                    source={{
                      uri: `${coach.photo}`,
                    }}
                    className="h-20 w-20 rounded-full"
                  />
                  <View className="space-y-1">
                    <Text className="text-white font-bold">{coach.name}</Text>
                    <Text className="text-white font-bold">
                      {coach.firstname}
                    </Text>
                    <Text className="text-white font-bold">
                      {coach.lastname}
                    </Text>
                    <Text className="text-white font-bold">
                      Age: {coach.age}
                    </Text>
                  </View>
                </View>

                <TouchableOpacity>
                  <Entypo name="chevron-small-right" size={30} color="white" />
                </TouchableOpacity>
              </View>
              <View className="flex-row items-center mt-3 justify-between w-full">
                <View className="space-y-2">
                  <View className="flex-row items-center space-x-1">
                    <Image
                      style={{ resizeMode: "contain" }}
                      source={{
                        uri: `${coach.career[0].team.logo}`,
                      }}
                      className="h-10 w-10"
                    />
                    <Text className="text-white font-bold">
                      {coach.career[0].team.name}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
