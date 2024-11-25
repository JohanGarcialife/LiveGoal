import React from 'react'
import { View, Text, Image } from 'react-native'
import { DataTable } from "react-native-paper";
import {topRedCards} from "../../utils/Samples"

export default function TopRedCards(props) {
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
            <Text className="text-white">Cards</Text>
          </DataTable.Title>
        </DataTable.Header>

        {topRedCards.response.map((item) => (
          <DataTable.Row
            className="py-2"
            key={item.player.id}
            onPress={onNavigation}
          >
            <DataTable.Cell style={{ flex: 1 }}>
              <View className="flex-row items-center space-x-1">
                <Image
                  source={{
                    uri: `${item.player.photo}`,
                  }}
                  className="h-10 w-10 rounded-xl"
                />
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
        ))}
      </DataTable>
    </View>
  );
}