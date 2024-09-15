import React, { useLayoutEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import Header from "../components/Header";
import SliderBanner from "../components/sliders/SliderBanner";
import Fixtures from "../components/Fixtures";
import SliderLeagues from "../components/sliders/SliderLeagues";

export default function Home(props) {
  const { navigation } = props;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View className="min-h-screen bg-bg py-16">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <SliderBanner navigation={navigation} />
        <SliderLeagues navigation={navigation} />
        <Fixtures navigation={navigation} />
      </ScrollView>
    </View>
  );
}
