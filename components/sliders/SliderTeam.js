import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function SliderTeam(props) {
  const { teams } = props;
  console.log(teams);
  return (
    <View className="px-3 my-5">
      <Text className="text-2xl font-bold text-white mb-4 mx-3">Career</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {teams?.map((team) => (
          <Teams key={team.team.id} team={team} />
        ))}
      </ScrollView>
    </View>
  );
}

function Teams(props) {
  const { team } = props;
  const { id, name, logo } = team;

  console.log(team);

  //   const onNavigation = () => {
  //     setActive(id);
  //     navigation.navigate("League", {
  //       id,
  //       name,
  //       logo,
  //     });
  //   };

  return (
    <>
      <TouchableOpacity>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={["#F4A58A", "#ED6B4E"]}
          className="mx-1 rounded-2xl h-28 w-24 flex items-center justify-center"
        >
          <Image
            source={{
              uri: `${team.team.logo}`,
            }}
            className="h-14 w-14"
          />
        </LinearGradient>
        <Text className="font-bold text-white text-center mt-2">
          {team.team.name}
        </Text>
        <View className="items-center justify-center mt-2">
          <Text className="font-bold text-sm  text-lime-500 text-center ">
            Start
          </Text>
          <Text className="font-bold text-sm text-white text-center ">
            {team.start}
          </Text>
          {team.end === null ? null : (
            <Text className="font-bold text-sm  text-red-500 text-center ">
              End
            </Text>
          )}
          <Text className="font-bold text-sm text-white text-center ">
            {team.end}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
}
