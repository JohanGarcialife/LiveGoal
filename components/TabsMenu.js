import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function TabsMenu(props) {
  const { tab, setTab } = props;

  const navigation = useNavigation();

  function goHome() {
    setTab("Home");
    navigation.navigate("Home");
  }
  function goStandings() {
    setTab("Standings");
    navigation.navigate("Standings");
  }
  function goExplore() {
    setTab("Explore");
    navigation.navigate("Explore");
  }

  return (
    <View className="bg-mediumgray w-full p-6 flex-row items-center justify-center">
      <View className="flex-row items-center justify-center w-full space-x-20">
        <TouchableOpacity onPress={goHome} className="">
          {tab === "Home" ? (
            <View className="items-center space-y-1">
              <Text className="text-blue text-xs">Home</Text>
              <View className="bg-blue h-1 w-1 rounded-full" />
            </View>
          ) : (
            <Image
              source={require("../assets/Home.png")}
              //   className="h-14 w-14"
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={goExplore} className="">
          {tab === "Explore" ? (
            <View className="items-center space-y-1">
              <Text className="text-blue text-xs">Explore</Text>
              <View className="bg-blue h-1 w-1 rounded-full" />
            </View>
          ) : (
            <Image
              source={require("../assets/Discovery.png")}
              //   className="h-14 w-14"
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={goStandings} className="">
          {tab === "Standings" ? (
            <View className="items-center space-y-1">
              <Text className="text-blue text-xs">Standings</Text>
              <View className="bg-blue h-1 w-1 rounded-full" />
            </View>
          ) : (
            <Image
              source={require("../assets/Chart.png")}
              //   className="h-14 w-14"
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
