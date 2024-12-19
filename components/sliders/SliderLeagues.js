import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { createClient } from "@supabase/supabase-js";
import { supabaseKey, supabaseUrl } from "../../api/supabase/Supabase";

const supabase = createClient(supabaseUrl, supabaseKey);

export default function SliderLeagues(props) {
  const { navigation } = props;
  const [active, setActive] = useState(39);
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    getLeagues();
  }, []);

  async function getLeagues() {
    const data = await supabase.from("leagues").select();
    setLeagues(data.data);
  }

  return (
    <View className="px-3 my-5">
      <Text className="text-2xl font-bold text-white mb-4 mx-3">
        Popular Leagues
      </Text>
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
              style={{ resizeMode: "contain" }}
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
              style={{ resizeMode: "contain" }}
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
