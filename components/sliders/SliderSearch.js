import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { supabaseKey, supabaseUrl } from "../../api/supabase/Supabase";
import { createClient } from "@supabase/supabase-js";
import SearchBar from "../search/SearchBar";
import SearchPlayers from "../search/SearchPlayers";
import SearchLeague from "../search/SearchLeague";
import SearchTeam from "../search/SearchTeam";
import SearchCoach from "../search/SearchCoach";
import SearchStadium from "../search/SearchStadium";

const supabase = createClient(supabaseUrl, supabaseKey);

export default function SliderSearch(props) {
  const { navigation } = props;
  const [active, setActive] = useState(1);
  const [nameSearch, setNameSearch] = useState("Players");
  const [searchSlider, setSearchSlider] = useState([]);

  useEffect(() => {
    getSearch();
  }, []);

  async function getSearch() {
    const data = await supabase.from("searchSlider").select();
    setSearchSlider(data.data);
  }

  return (
    <View>
      <ScrollView>
        <ScrollView
          className="py-10 "
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {searchSlider?.map((search) => (
            <Search
              active={active}
              setActive={setActive}
              setNameSearch={setNameSearch}
              search={search}
              key={search.id}
            />
          ))}
        </ScrollView>
        <SearchBar nameSearch={nameSearch} setNameSearch={setNameSearch} />
        {nameSearch === "Team" && <SearchTeam navigation={navigation} />}
        {nameSearch === "Players" && <SearchPlayers navigation={navigation} />}
        {nameSearch === "Coach" && <SearchCoach navigation={navigation} />}
        {nameSearch === "League" && <SearchLeague navigation={navigation} />}
        {nameSearch === "Venue" && <SearchStadium navigation={navigation} />}
      </ScrollView>
    </View>
  );
}

function Search(props) {
  const { active, setActive, search, setNameSearch } = props;
  const { id, name, image } = search;

  function searchSelect() {
    setActive(id);
    setNameSearch(name);
  }

  return (
    <>
      {active === id ? (
        <TouchableOpacity onPress={searchSelect}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={["#F4A58A", "#ED6B4E"]}
            className="mx-4 rounded-2xl h-28 w-24 flex items-center justify-center"
          >
            <Image
              source={{
                uri: `${image}`,
              }}
              className="absolute bottom-0 h-32 w-32"
            />
          </LinearGradient>
          <Text className="text-white text-center font-bold mt-2">{name}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={searchSelect}>
          <View className="mx-4 bg-gray/50 rounded-2xl h-28 w-24 flex items-center justify-center overflow-visible">
            <Image
              source={{
                uri: `${image}`,
              }}
              className="absolute bottom-0 h-32 w-32 "
            />
          </View>
          <Text className="text-white text-center font-bold mt-2">{name}</Text>
        </TouchableOpacity>
      )}
    </>
  );
}
