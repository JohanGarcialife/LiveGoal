import React, { useLayoutEffect } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function Stadium(props) {
  const { navigation, route } = props;
  const { params } = route;
  const { id, image, name, capacity, city, country, surface, address } = params;

  console.log(params);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
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
          <Text className="text-white font-bold text-lg">Stadium</Text>
          <View className="w-8" />
        </View>
      </TouchableOpacity>
      <Image
        style={{ resizeMode: "cover" }}
        source={{
          uri: `${image}`,
        }}
        className="h-1/2 w-full rounded-b-3xl"
      />
      <View className="px-6 flex-row justify-center mt-6 w-full">
        <Text className="text-white text-center text-2xl font-bold">
          {name}
        </Text>
      </View>
      <View className="px-6 flex-row items-center justify-center mt-2 w-full">
        <Image
          source={require("../assets/emojis/Pin.png")}
          className="h-6 w-6"
        />
        <Text className="text-white text-center text-lg font-bold">
          {address}
        </Text>
      </View>

      <ScrollView className="px-6 py-3 space-y-4">
        <View className="flex-row items-center justify-center space-x-20 bg-gray/50 p-6 rounded-xl">
          <View className=" space-y-4">
            <View className="flex-row items-center space-x-1">
              <Image
                source={require("../assets/emojis/Globe.png")}
                className="h-10 w-10"
              />
              <Text className="text-white text-lg font-bold">{country}</Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <Image
                source={require("../assets/emojis/Pin.png")}
                className="h-10 w-10"
              />
              <Text className="text-white text-lg font-bold">{city}</Text>
            </View>
          </View>
          <View className=" space-y-4">
            <View className="flex-row items-center space-x-1">
              <Image
                source={require("../assets/emojis/Stadium.png")}
                className="h-10 w-10"
              />
              <Text className="text-white text-lg font-bold">{capacity}</Text>
            </View>

            <View className="flex-row items-center space-x-1">
              <Image
                source={require("../assets/emojis/Grass.png")}
                className="h-10 w-10"
              />
              <Text className="text-white text-lg font-bold">{surface}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
