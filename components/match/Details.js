import { View, Text, ScrollView } from "react-native";
import React from "react";

export default function Details(props) {
  const { home, away } = props;

  return (
    <View className="pb-12">
      <ScrollView>
        <View className="py-10 px-10 space-y-5">
          <View className="flex-row items-center justify-between">
            <Text className="text-white text-xl">{home[0].value}</Text>
            <Text className="text-white text-xl">Shots on Goal</Text>
            <Text className="text-white text-xl">{away[0].value}</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-white text-xl">{home[1].value}</Text>
            <Text className="text-white text-xl">Shots off Goal</Text>
            <Text className="text-white text-xl">{away[1].value}</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-white text-xl">{home[2].value}</Text>
            <Text className="text-white text-xl">Total Shots</Text>
            <Text className="text-white text-xl">{away[2].value}</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-white text-xl">{home[3].value}</Text>
            <Text className="text-white text-xl">Blocked Shots</Text>
            <Text className="text-white text-xl">{away[3].value}</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-white text-xl">{home[4].value}</Text>
            <Text className="text-white text-xl">Shots insidebox</Text>
            <Text className="text-white text-xl">{away[4].value}</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-white text-xl">{home[5].value}</Text>
            <Text className="text-white text-xl">Shots outsidebox</Text>
            <Text className="text-white text-xl">{away[5].value}</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-white text-xl">{home[6].value}</Text>
            <Text className="text-white text-xl">Fouls</Text>
            <Text className="text-white text-xl">{away[6].value}</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-white text-xl">{home[7].value}</Text>
            <Text className="text-white text-xl">Corners</Text>
            <Text className="text-white text-xl">{away[7].value}</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-white text-xl">{home[8].value}</Text>
            <Text className="text-white text-xl">Offsides</Text>
            <Text className="text-white text-xl">{away[8].value}</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-white text-xl">{home[9].value}</Text>
            <Text className="text-white text-xl">Ball Possession</Text>
            <Text className="text-white text-xl">{away[9].value}</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-white text-xl">{home[10].value}</Text>
            <Text className="text-white text-xl">Yellow Cards</Text>
            <Text className="text-white text-xl">{away[10].value}</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-white text-xl">{home[11].value}</Text>
            <Text className="text-white text-xl">Red Cards</Text>
            <Text className="text-white text-xl">{away[11].value}</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-white text-xl">{home[12].value}</Text>
            <Text className="text-white text-xl">Goalkeeper Saves</Text>
            <Text className="text-white text-xl">{away[12].value}</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-white text-xl">{home[12].value}</Text>
            <Text className="text-white text-xl">Passes %</Text>
            <Text className="text-white text-xl">{away[12].value}</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-white text-xl">{home[12].value}</Text>
            <Text className="text-white text-xl">Expected Goals</Text>
            <Text className="text-white text-xl">{away[12].value}</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-white text-xl">{home[13].value}</Text>
            <Text className="text-white text-xl">Total Passes</Text>
            <Text className="text-white text-xl">{away[13].value}</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-white text-xl">{home[14].value}</Text>
            <Text className="text-white text-xl">Passes Accurate</Text>
            <Text className="text-white text-xl">{away[14].value}</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-white text-xl">{home[15].value}</Text>
            <Text className="text-white text-xl">Passes %</Text>
            <Text className="text-white text-xl">{away[15].value}</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-white text-xl">{home[16].value}</Text>
            <Text className="text-white text-xl">Expected Goals</Text>
            <Text className="text-white text-xl">{away[16].value}</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-white text-xl">{home[17].value}</Text>
            <Text className="text-white text-xl">Goals Prevented</Text>
            <Text className="text-white text-xl">{away[17].value}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
