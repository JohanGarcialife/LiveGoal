import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function MenuTeam(props) {
  const { menuActive, setMenuActive } = props;

  const menu = [
    { id: 1, name: "Form" },
    { id: 2, name: "Fixtures" },
    { id: 3, name: "Biggest" },
    { id: 4, name: "Goals" },
    { id: 5, name: "Penalty" },
    { id: 6, name: "Cards" },
    { id: 7, name: "Clean Sheets" },
    { id: 8, name: "Failed To Score" },
  ];

  return (
    <View className="my-5 mx-3">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {menu?.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            menuActive={menuActive}
            setMenuActive={setMenuActive}
          />
        ))}
      </ScrollView>
    </View>
  );
}

function MenuItem(props) {
  const { item, menuActive, setMenuActive } = props;
  const { id, name } = item;

  return (
    <>
      {menuActive === id ? (
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={["#F4A58A", "#ED6B4E"]}
          className="mx-3 rounded-full h-fit py-4 px-8 flex items-center justify-center"
        >
          <Text className="text-white font-bold">{name}</Text>
        </LinearGradient>
      ) : (
        <TouchableOpacity onPress={() => setMenuActive(id)}>
          <Text className="text-white py-4 font-bold mx-3">{name}</Text>
        </TouchableOpacity>
      )}
    </>
  );
}
