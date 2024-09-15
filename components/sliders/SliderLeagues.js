import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const leagues = [
  {
    id: 39,
    name: "Premier League",
    country: "England",
    logo: "https://media.api-sports.io/football/leagues/39.png",
    active: true,
  },
  {
    id: 140,
    name: "La Liga",
    country: "Spain",
    logo: "https://media.api-sports.io/football/leagues/140.png",
    active: true,
  },
  {
    id: 2,
    name: "Champions League",
    country: "Europe",
    logo: "https://media.api-sports.io/football/leagues/2.png",
    active: false,
  },
  {
    id: 135,
    name: "Serie A",
    country: "italy",
    logo: "https://media.api-sports.io/football/leagues/135.png",
    active: true,
  },
  {
    id: 61,
    name: "Ligue 1",
    country: "France",
    logo: "https://media.api-sports.io/football/leagues/61.png",
    active: true,
  },
];

export default function SliderLeagues(props) {
  const { navigation } = props;
  const [active, setActive] = useState(39);

  return (
    <View className="px-3 my-5">
      <Text className="text-2xl font-bold text-white mb-4 mx-3">Leagues</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        //className="space-x-3"
      >
        {leagues?.map((league) => (
          <League
            key={league.id}
            league={league}
            active={active}
            setActive={setActive}
            navigation={navigation}
          />
        ))}
      </ScrollView>
    </View>
  );
}

function League(props) {
  const { league, active, setActive, navigation } = props;
  const { id, name, logo } = league;

  const onNavigation = () => {
    setActive(id);
    navigation.navigate("League", {
      id,
      name,
      logo,
    });
  };

  return (
    <>
      {active === id ? (
        <TouchableOpacity onPress={onNavigation}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={["#F4A58A", "#ED6B4E"]}
            className="mx-1 rounded-2xl h-28 w-24 flex items-center justify-center"
          >
            <Image
              source={{
                uri: `${logo}`,
              }}
              className="h-14 w-14"
            />
          </LinearGradient>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onNavigation}>
          <View className="mx-1 bg-gray/50 rounded-2xl h-28 w-24 flex items-center justify-center">
            <Image
              source={{
                uri: `${logo}`,
              }}
              className="h-14 w-14"
            />
          </View>
        </TouchableOpacity>
      )}
    </>
  );
}
