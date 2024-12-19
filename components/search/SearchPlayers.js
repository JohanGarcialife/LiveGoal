import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { searchPlayers } from "../../utils/Samples";
import { Entypo } from "@expo/vector-icons";

export default function SearchPlayers(props) {
  const { navigation } = props;
  const players = searchPlayers.response;

  return (
    <View className="px-6 py-12">
      <ScrollView className="space-y-3">
        {players.map((player) => (
          <Player
            key={player.player.id}
            id={player.player.id}
            player={player}
            navigation={navigation}
          />
        ))}
      </ScrollView>
    </View>
  );
}

function Player(props) {
  const { player, id, navigation } = props;

  const onNavigation = () => {
    navigation.navigate("Player", {
      id,
    });
  };
  return (
    <TouchableOpacity onPress={onNavigation}>
      <View className="bg-gray/50 rounded-2xl p-6 ">
        <View className="flex-row items-center justify-between w-full">
          <View className="flex-row items-center space-x-3">
            <Image
              style={{ resizeMode: "contain" }}
              source={{
                uri: `${player.player.photo}`,
              }}
              className="h-20 w-20 rounded-full"
            />
            <View className="space-y-1">
              <Text className="text-white font-bold">{player.player.name}</Text>
              <Text className="text-white font-bold">
                {player.player.firstname}
              </Text>
              <Text className="text-white font-bold">
                {player.player.lastname}
              </Text>
              <Text className="text-white font-bold">
                Age: {player.player.age}
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
                source={require("../../assets/emojis/Calendar.png")}
                className="h-5 w-5"
              />
              <Text className="text-white font-bold">
                {player.player.birth.date}
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <Image
                source={require("../../assets/emojis/Info.png")}
                className="h-5 w-5"
              />
              <Text className="text-white font-bold">
                {player.player.birth.place}
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <Image
                source={require("../../assets/emojis/Globe.png")}
                className="h-5 w-5"
              />
              <Text className="text-white font-bold">
                {player.player.birth.country}
              </Text>
            </View>
          </View>
          <View className="space-y-2">
            <View className="flex-row items-center space-x-2">
              <Image
                source={require("../../assets/emojis/Soccer.png")}
                className="h-5 w-5"
              />
              <Text className="text-white font-bold">
                {player.player.position}
              </Text>
            </View>
            <View className="flex-row items-center space-x-2">
              <Image
                source={require("../../assets/emojis/Ruler.png")}
                className="h-5 w-5"
              />
              <Text className="text-white font-bold">
                {player.player.height}
              </Text>
            </View>
            <View className="flex-row items-center space-x-2">
              <Image
                source={require("../../assets/emojis/Ruler.png")}
                className="h-5 w-5"
              />
              <Text className="text-white font-bold">
                {player.player.weight}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
