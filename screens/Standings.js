import React, { useEffect, useLayoutEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { DataTable } from "react-native-paper";
import { createClient } from "@supabase/supabase-js";
import { supabaseKey, supabaseUrl } from "../api/supabase/Supabase";
import { getStandingApi } from "../api/StandingApi";

const supabase = createClient(supabaseUrl, supabaseKey);

export default function Standings(props) {
  const { navigation } = props;
  const [leagues, setLeagues] = useState([]);
  const [ids, setIds] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    getLeagues();
  }, []);

  async function getLeagues() {
    const data = await supabase.from("leagues").select();
    setLeagues(data.data);
  }

  leagues.forEach((leagues) => {
    ids.push(leagues.id);
  });

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
          <Text className="text-white font-bold text-lg">Standings</Text>
          <View className="w-8" />
        </View>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        {ids === undefined ? (
          <Text>Cargando </Text>
        ) : (
          <>
            {ids.map((id) => (
              <Standing id={id} key={id} />
            ))}
          </>
        )}
      </ScrollView>
    </View>
  );
}

function Standing(props) {
  const { id } = props;
  const [league, setLeague] = useState(null);

  const mapLeague = league?.response[0]?.league?.standings[0].splice(0, 5);
  console.log(mapLeague);
  useEffect(() => {
    (async () => {
      const response = await getStandingApi(id, 2024);

      setLeague(response);
    })();
  }, []);

  return (
    <View className="mb-12">
      <View className="my-5 space-y-3 w-full">
        <View className="flex-row px-6 justify-between items-center">
          <View className="flex-row items-center space-x-2">
            <View className="bg-gray/50 p-2 rounded-lg">
              <Image
                source={{
                  uri: `${league?.response[0]?.league?.logo}`,
                }}
                className="h-7 w-7"
              />
            </View>
            <View className="">
              <Text className="text-white font-bold text-xs">
                {league?.response[0]?.league?.name}
              </Text>
              <Text className="text-white text-xs ">
                {league?.response[0]?.league?.country}
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <Entypo name="chevron-small-right" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <DataTable>
        <DataTable.Header className="mx-3 mb-1">
          <DataTable.Title>
            <Text className="text-white">#</Text>
          </DataTable.Title>
          <DataTable.Title style={{ flex: 5 }}>
            <Text className="text-white">Team</Text>
          </DataTable.Title>
          <DataTable.Title style={{ justifyContent: "center" }}>
            <Text className="text-white">G</Text>
          </DataTable.Title>
          <DataTable.Title style={{ justifyContent: "center" }}>
            <Text className="text-white">W</Text>
          </DataTable.Title>
          <DataTable.Title style={{ justifyContent: "center" }}>
            <Text className="text-white">D</Text>
          </DataTable.Title>
          <DataTable.Title style={{ justifyContent: "center" }}>
            <Text className="text-white">L</Text>
          </DataTable.Title>
          <DataTable.Title style={{ justifyContent: "center" }}>
            <Text className="text-white">Gf</Text>
          </DataTable.Title>
          <DataTable.Title style={{ justifyContent: "center" }}>
            <Text className="text-white">Ga</Text>
          </DataTable.Title>
          <DataTable.Title style={{ justifyContent: "center" }}>
            <Text className="text-white">Gd</Text>
          </DataTable.Title>
          <DataTable.Title style={{ justifyContent: "center" }}>
            <Text className="text-white">Pts</Text>
          </DataTable.Title>
        </DataTable.Header>

        {mapLeague?.map((item) => (
          <DataTable.Row
            className={
              (item.description === "Champions League" &&
                "bg-blueShadow rounded-xl mx-3 my-1 border-b-0") ||
              (item.description === "UEFA Europa League" &&
                "bg-orangeShadow rounded-xl mx-3 my-1 border-b-0") ||
              (item.description === null && "mx-3 my-1 border-b-0") ||
              (item.description === "Relegation" &&
                "bg-redShadow rounded-xl mx-3 my-1 border-b-0")
            }
            key={item.rank}
            // onPress={onNavigation}
          >
            <DataTable.Cell>
              <Text className="text-white">{item.rank}</Text>
            </DataTable.Cell>
            <DataTable.Cell style={{ flex: 5 }}>
              <View className="flex-row items-center space-x-1">
                <Image
                  source={{
                    uri: `${item?.team?.logo}`,
                  }}
                  className="h-4 w-4"
                />
                <Text>
                  <Text className="text-white text-xs">{item?.team?.name}</Text>
                </Text>
              </View>
            </DataTable.Cell>

            <DataTable.Cell style={{ justifyContent: "center" }}>
              <Text className="text-white">{item?.all?.played}</Text>
            </DataTable.Cell>
            <DataTable.Cell style={{ justifyContent: "center" }}>
              <Text className="text-white">{item?.all?.win}</Text>
            </DataTable.Cell>
            <DataTable.Cell style={{ justifyContent: "center" }}>
              <Text className="text-white">{item?.all?.draw}</Text>
            </DataTable.Cell>
            <DataTable.Cell style={{ justifyContent: "center" }}>
              <Text className="text-white">{item?.all?.lose}</Text>
            </DataTable.Cell>

            <DataTable.Cell style={{ justifyContent: "center" }}>
              <Text className="text-white">{item?.all?.goals?.for}</Text>
            </DataTable.Cell>
            <DataTable.Cell style={{ justifyContent: "center" }}>
              <Text className="text-white">{item?.all?.goals?.against}</Text>
            </DataTable.Cell>
            <DataTable.Cell style={{ justifyContent: "center" }}>
              <Text className="text-white">{item?.goalsDiff}</Text>
            </DataTable.Cell>
            <DataTable.Cell style={{ justifyContent: "center" }}>
              <Text className="text-white">{item?.points}</Text>
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  );
}
