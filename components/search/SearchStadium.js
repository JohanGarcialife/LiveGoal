import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { searchStadium } from "../../utils/Samples";
import { Entypo } from "@expo/vector-icons";

export default function SearchStadium(props) {
  const { navigation } = props;
  const stadiums = searchStadium.response;

  return (
    <View className="px-6 py-12">
      <ScrollView className="space-y-3">
        {stadiums.map((stadium) => (
          <Stadium stadium={stadium} key={stadium.id} navigation={navigation} />
        ))}
      </ScrollView>
    </View>
  );
}

function Stadium(props) {
  const { stadium, navigation } = props;
  const { id, image, name, capacity, city, country, surface, address } =
    stadium;

  const onNavigation = () => {
    navigation.navigate("Stadium", {
      id,
      image,
      name,
      capacity,
      city,
      country,
      surface,
      address,
    });
  };

  return (
    <TouchableOpacity key={id} onPress={onNavigation}>
      <View className="bg-gray/50 rounded-2xl flex-row items-center justify-between">
        <Image
          style={{ resizeMode: "cover" }}
          source={{
            uri: `${image}`,
          }}
          className="h-full w-36 rounded-tl-2xl rounded-bl-2xl"
        />

        <View className="p-6 flex-row items-center justify-between ">
          <View className="space-y-2">
            <View className="flex-row items-center space-x-1">
              <Image
                source={require("../../assets/emojis/Info.png")}
                className="h-5 w-5"
              />
              <Text className="text-white text-xs font-bold">{name}</Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <Image
                source={require("../../assets/emojis/Stadium.png")}
                className="h-5 w-5"
              />
              <Text className="text-white font-bold">{capacity}</Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <Image
                source={require("../../assets/emojis/Pin.png")}
                className="h-5 w-5"
              />
              <Text className="text-white font-bold">{city}</Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <Image
                source={require("../../assets/emojis/Globe.png")}
                className="h-5 w-5"
              />
              <Text className="text-white font-bold">{country}</Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <Image
                source={require("../../assets/emojis/Grass.png")}
                className="h-5 w-5"
              />
              <Text className="text-white font-bold">{surface}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
