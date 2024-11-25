import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { DataTable } from "react-native-paper";
import { topScorers } from "../../utils/Samples";

export default function TopScorers(props) {
  const { navigation } = props;

  const onNavigation = () => {
    // navigation.navigate("Player", {
    //   id,
    // });
    navigation.navigate("Player");
  };

  return (
    <View className="mb-12">
      <DataTable>
        <DataTable.Header className="mx-3 mb-1">
          <DataTable.Title style={{ flex: 1 }}>
            <Text className="text-white">#</Text>
          </DataTable.Title>
          <DataTable.Title style={{ flex: 3 }}>
            <Text className="text-white">Name</Text>
          </DataTable.Title>
          <DataTable.Title style={{ flex: 3 }}>
            <Text className="text-white">Team</Text>
          </DataTable.Title>
          <DataTable.Title style={{ flex: 1 }}>
            <Text className="text-white">Goals</Text>
          </DataTable.Title>
        </DataTable.Header>

        {topScorers.response.map((item) => (
          <TouchableOpacity key={item.player.id}>
            <DataTable.Row className="py-2" onPress={onNavigation}>
              <DataTable.Cell style={{ flex: 1 }}>
                <View className="flex-row items-center space-x-1">
                  <Image
                    source={{
                      uri: `${item.player.photo}`,
                    }}
                    className="h-10 w-10 rounded-xl"
                  />
                  {/* <Text>
                  <Text className="text-white text-xs">{item.player.name}</Text>
                </Text> */}
                </View>
              </DataTable.Cell>

              <DataTable.Cell style={{ flex: 3 }}>
                <Text className="text-white">{item.player.name}</Text>
              </DataTable.Cell>

              <DataTable.Cell style={{ flex: 3 }}>
                <Text className="text-white text-center">
                  {item.statistics[0].team.name}
                </Text>
              </DataTable.Cell>

              <DataTable.Cell style={{ flex: 1 }}>
                <Text className="text-white text-center">
                  {item.statistics[0].goals.total}
                </Text>
              </DataTable.Cell>
            </DataTable.Row>
          </TouchableOpacity>
        ))}
      </DataTable>
    </View>
  );
}
