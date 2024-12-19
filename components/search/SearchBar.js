import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import { EvilIcons } from "@expo/vector-icons";

export default function SearchBar(props) {
  const { nameSearch, setNameSearch } = props;

  const goSearch = (values) => {
    const query = values.query;

    if (nameSearch === "Players") {
      console.log(query);
      console.log("Estas buscando Jugadores");
    } else {
      console.log("No select");
    }
    if (nameSearch === "Coach") {
      console.log(query);
      console.log("Estas buscando entrenadores");
    } else {
      console.log("No select");
    }

    if (nameSearch === "League") {
      console.log(query);
      console.log("Estas buscando ligas");
    } else {
      console.log("No select");
    }

    if (nameSearch === "Venue") {
      console.log(query);
      console.log("Estas buscando estadio");
    } else {
      console.log("No select");
    }
    if (nameSearch === "Team") {
      console.log(query);
      console.log("Estas buscando equipos");
    } else {
      console.log("No select");
    }

    // navigation.navigate("Search", {
    //   query,
    // });
  };

  return (
    <View className="px-6 mt-10">
      <View className="bg-gray/50 rounded-lg py-3 px-3">
        <Formik
          initialValues={{ query: "" }}
          onSubmit={(values) => goSearch(values)}
        >
          {({ handleChange, handleSubmit, values }) => (
            <View className=" rounded-lg w-full pl-2">
              <View className="flex-row items-center justify-between space-x-1">
                <EvilIcons name="search" size={24} color="#a9a9a9" />
                {nameSearch === "Players" && (
                  <TextInput
                    name="query"
                    placeholder="The lastname of the player"
                    onChangeText={handleChange("query")}
                    placeholderTextColor="#a9a9a9"
                    value={values.query}
                    className="text-white text-sm text-ellipsis w-3/5"
                  />
                )}
                {nameSearch === "Coach" && (
                  <TextInput
                    name="query"
                    placeholder="The name of the coach"
                    onChangeText={handleChange("query")}
                    placeholderTextColor="#a9a9a9"
                    value={values.query}
                    className="text-white text-sm text-ellipsis w-3/5"
                  />
                )}
                {nameSearch === "League" && (
                  <TextInput
                    name="query"
                    placeholder="The name or the country of the league"
                    onChangeText={handleChange("query")}
                    placeholderTextColor="#a9a9a9"
                    value={values.query}
                    className="text-white text-sm text-ellipsis w-3/5"
                  />
                )}
                {nameSearch === "Venue" && (
                  <TextInput
                    name="query"
                    placeholder="The name, city or the country of the venue"
                    onChangeText={handleChange("query")}
                    placeholderTextColor="#a9a9a9"
                    value={values.query}
                    className="text-white text-sm text-ellipsis w-3/5"
                  />
                )}
                {nameSearch === "Team" && (
                  <TextInput
                    name="query"
                    placeholder="The name or the country name of the team"
                    onChangeText={handleChange("query")}
                    placeholderTextColor="#a9a9a9"
                    value={values.query}
                    className="text-white text-sm text-ellipsis w-3/5"
                  />
                )}
                <TouchableOpacity onPress={handleSubmit}>
                  <View
                    onPress={handleSubmit}
                    className="bg-blue rounded-lg flex-row items-center py-2 px-4 w-fit"
                  >
                    <Text className="font-bold text-sm text-white">Search</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
}
