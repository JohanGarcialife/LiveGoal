import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { HtoH } from "../../utils/Samples";


export default function Htoh(props) {
  const { home, away } = props;

  const match =HtoH.response

  return (
    <View className="px-4 space-y-5 my-10 ">
      <Text className="text-white font-bold text-lg">Last 5 games</Text>
      {match?.map((fixture) => (          
         <TouchableOpacity key={fixture.fixture.id} >
      <View className="flex-row">
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

      
        ))}
      
    </View>
  );
}
