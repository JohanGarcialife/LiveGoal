import React, { useLayoutEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import HeaderLeague from "../components/league/HeaderLeague";
import MenuLeague from "../components/league/MenuLeague";
import Standing from "../components/league/Standing";
import TopScorers from "../components/league/TopScorers";
import TopAssists from "../components/league/TopAssists";
import TopYellowCards from "../components/league/TopYellowCards";
import TopRedCards from "../components/league/TopRedCards";

export default function League(props) {
  const { navigation, route } = props;
  const { params } = route;
  const { id, name, logo } = params;
  const [menuActive, setMenuActive] = useState(1);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="min-h-screen bg-bg py-16">
      <TouchableOpacity>
        <View className="px-6 flex-row items-center justify-between mb-5">
          <Entypo
            onPress={() => navigation.goBack()}
            name="chevron-small-left"
            size={30}
            color="white"
          />
          <Text className="text-white font-bold text-lg">League</Text>
          <View className="w-8" />
        </View>
      </TouchableOpacity>
      <ScrollView>
        <HeaderLeague name={name} logo={logo} />
        <MenuLeague menuActive={menuActive} setMenuActive={setMenuActive} />
        {menuActive === 1 && <Standing id={id} navigation={navigation} />}
        {menuActive === 2 && <TopScorers id={id} navigation={navigation} />}
        {menuActive === 3 && <TopAssists id={id} navigation={navigation} />}
        {menuActive === 4 && <TopYellowCards id={id} navigation={navigation} />}
        {menuActive === 5 && <TopRedCards id={id} navigation={navigation} />}
      </ScrollView>
    </View>
  );
}
