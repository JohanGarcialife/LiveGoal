import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import HomeLineup from "./lineups/HomeLineup";
import AwayLineup from "./lineups/AwayLineup";

export default function LineUp(props) {
  const { lineups, score } = props;
  const {
    awayLogo,
    awayName,
    awayScore,
    homeLogo,
    homeName,
    homeScore,
    status,
  } = score;
  const [showLineup, setShowLineup] = useState(true);

  const home = lineups.response[0];
  const away = lineups.response[1];

  return (
    <ScrollView>
      <View className="px-6  flex-row justify-center items-center space-x-5 mt-10">
        {showLineup === true ? (
          <TouchableOpacity onPress={() => setShowLineup(true)}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={["#F4A58A", "#ED6B4E"]}
              className=" rounded-full py-3 px-6 flex items-center justify-center"
            >
              <Text
                className="text-white font-semibold "
                onPress={() => setShowLineup(true)}
              >
                {home.team.name}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        ) : (
          <View
            className="justify-center items-center space-y-3 w-1/3"
            onPress={() => setShowLineup(true)}
          >
            <Text
              className="text-white font-semibold "
              onPress={() => setShowLineup(true)}
            >
              {home.team.name}
            </Text>
          </View>
        )}

        {showLineup === false ? (
          <TouchableOpacity onPress={() => setShowLineup(false)}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={["#F4A58A", "#ED6B4E"]}
              className=" rounded-full py-3 px-6 flex items-center justify-center"
            >
              <Text
                className="text-white font-semibold "
                onPress={() => setShowLineup(false)}
              >
                {away.team.name}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        ) : (
          <View
            className="justify-center items-center space-y-3 w-1/3"
            onPress={() => setShowLineup(false)}
          >
            <Text
              className="text-white font-semibold "
              onPress={() => setShowLineup(false)}
            >
              {away.team.name}
            </Text>
          </View>
        )}
      </View>

      <View className="py-10 px-10 justify-center items-center">
        {showLineup === true ? (
          <HomeLineup
            coach={home.coach}
            formation={home.formation}
            logo={homeLogo}
            home={home.startXI}
            substitutes={home.substitutes}
          />
        ) : (
          <AwayLineup
            coach={away.coach}
            formation={away.formation}
            logo={awayLogo}
            away={away.startXI}
            substitutes={away.substitutes}
          />
        )}
      </View>
    </ScrollView>
  );
}
