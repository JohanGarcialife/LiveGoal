import { View, Text, Image } from "react-native";
import React from "react";
import Games from "./dataSections/Games";
import Attack from "./dataSections/Attack";
import Midfielder from "./dataSections/Midfielder";
import Defence from "./dataSections/Defence";
import GoalKeeper from "./dataSections/Goalkeeper";

export default function Data(props) {
  const { data } = props;

  return (
    <View className="px-6 ">
      <Text className="text-white font-bold text-2xl mt-5 mb-2">
        Season Stats
      </Text>
      {data?.map((teamData) => (
        <View key={teamData.league.name}>
          {teamData.games.minutes === null ? null : (
            <View className="bg-mediumgray/50 rounded-lg p-2 my-2 space-y-2">
              <View className="flex-row items-center space-x-5 pb-2">
                <Image
                  source={{
                    uri: `${teamData.team.logo}`,
                  }}
                  className="h-10 w-10 rounded-full border-8 border-white"
                />
                <View>
                  <Text className="text-white font-bold">
                    {teamData.team.name}
                  </Text>
                  <Text className="text-white font-bold">
                    {teamData.league.name}
                  </Text>
                </View>
              </View>
              {/* Games */}
              <Games teamData={teamData} />

              {/* Attack */}
              <Attack teamData={teamData} />

              {/* Midfielder */}
              <Midfielder teamData={teamData} />

              {/* Defence */}
              <Defence teamData={teamData} />

              {/* Goalkeeper */}

              <GoalKeeper teamData={teamData} />
            </View>
          )}
        </View>
      ))}
    </View>
  );
}
