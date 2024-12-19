import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Formation433 from "./formations/Formation433";
import Formation4231 from "./formations/Formation4231";
import { DataTable } from "react-native-paper";

export default function HomeLineup(props) {
  const { formation, coach, logo, home, substitutes, navigation } = props;

  const onNavigationCoach = () => {
    // setActive(id);
    navigation.navigate("Coach");
    // navigation.navigate("Coach", {
    //   id,
    //   name,
    //   logo,
    // });
  };

  return (
    <View className="w-screen px-4">
      <View className="flex-row items-center bg-blueShadow rounded-lg p-2 justify-around  mt-5">
        <TouchableOpacity onPress={onNavigationCoach}>
          <Image
            source={{
              uri: `${coach.photo}`,
            }}
            className="h-14 w-14 rounded-lg"
          />
        </TouchableOpacity>
        <Text className="text-white font-semibold text-xl">{coach.name}</Text>
        <Image
          source={{
            uri: `${logo}`,
          }}
          className="h-14 w-14 rounded-lg"
        />
      </View>

      <View className="flex-row items-center justify-center my-5">
        <Text className="text-white text-xl font-semibold">{formation}</Text>
      </View>

      <View>
        <DataTable>
          <DataTable.Header className="mx-3 mb-1">
            <DataTable.Title>
              <Text className="text-white">#</Text>
            </DataTable.Title>
            <DataTable.Title style={{ flex: 5 }}>
              <Text className="text-white">Name</Text>
            </DataTable.Title>
            <DataTable.Title style={{ justifyContent: "center" }}>
              <Text className="text-white">Pos</Text>
            </DataTable.Title>
          </DataTable.Header>

          {home.map((item) => (
            <DataTable.Row
              className={
                (item.player.pos === "G" &&
                  "bg-orangeShadow rounded-xl mx-3 my-1 border-b-0") ||
                (item.player.pos === "D" &&
                  "bg-redShadow rounded-xl mx-3 my-1 border-b-0") ||
                (item.player.pos === "M" &&
                  " bg-blueShadow  rounded-xl mx-3 my-1 border-b-0") ||
                (item.player.pos === "F" &&
                  "bg-greenShadow rounded-xl mx-3 my-1 border-b-0")
              }
              key={item.player.id}
            >
              <DataTable.Cell>
                <Text className="text-white">{item.player.number}</Text>
              </DataTable.Cell>

              <DataTable.Cell style={{ flex: 5 }}>
                <Text className="text-white">{item.player.name}</Text>
              </DataTable.Cell>
              <DataTable.Cell style={{ justifyContent: "center" }}>
                <Text className="text-white">{item.player.pos}</Text>
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </View>

      <View className="my-5">
        <Text className="text-white text-center font-bold text-lg">
          Substitutes
        </Text>
        <DataTable>
          <DataTable.Header className="mx-3 mb-1">
            <DataTable.Title>
              <Text className="text-white">#</Text>
            </DataTable.Title>
            <DataTable.Title style={{ flex: 5 }}>
              <Text className="text-white">Name</Text>
            </DataTable.Title>
            <DataTable.Title style={{ justifyContent: "center" }}>
              <Text className="text-white">Pos</Text>
            </DataTable.Title>
          </DataTable.Header>

          {substitutes.map((item) => (
            <DataTable.Row
              className={
                (item.player.pos === "G" &&
                  "bg-orangeShadow rounded-xl mx-3 my-1 border-b-0") ||
                (item.player.pos === "D" &&
                  "bg-redShadow rounded-xl mx-3 my-1 border-b-0") ||
                (item.player.pos === "M" &&
                  " bg-blueShadow  rounded-xl mx-3 my-1 border-b-0") ||
                (item.player.pos === "F" &&
                  "bg-greenShadow rounded-xl mx-3 my-1 border-b-0")
              }
              key={item.player.id}
            >
              <DataTable.Cell>
                <Text className="text-white">{item.player.number}</Text>
              </DataTable.Cell>

              <DataTable.Cell style={{ flex: 5 }}>
                <Text className="text-white">{item.player.name}</Text>
              </DataTable.Cell>
              <DataTable.Cell style={{ justifyContent: "center" }}>
                <Text className="text-white">{item.player.pos}</Text>
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </View>

      {/* <View className="w-full  relative">
        {formation === "4-3-3" && <Formation433 formation={home} />}
        {formation === "4-2-3-1" && <Formation4231 formation={home} />}
      </View> */}
    </View>
  );
}
