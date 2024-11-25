import { View, Text, Image } from "react-native";
import React from "react";

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
              <View className="border-t border-white py-2 space-y-3">
                <View className="flex-row items-center justify-center space-x-2">
                  <Image
                    source={require("../../assets/emojis/Soccer.png")}
                    className="h-5 w-5"
                  />
                  <Text className="text-white font-bold text-xl">Games</Text>
                </View>
                <View className="flex-row items-center space-x-2 justify-center px-2">
                  <View className="space-y-2 bg-greenShadow  w-1/3 rounded-lg p-2 text-center justify-center items-center">
                    <Text className="text-white font-bold">Appearences</Text>
                    <Text className="text-white text-xl font-bold">
                      {teamData.games.appearences}
                    </Text>
                  </View>
                  <View className="space-y-2 bg-greenShadow w-1/3 rounded-lg p-2 text-center justify-center items-center">
                    <Text className="text-white font-bold">Lineups</Text>
                    <Text className="text-white text-xl font-bold">
                      {teamData.games.lineups}
                    </Text>
                  </View>
                  <View className="space-y-2 w-1/3 bg-greenShadow rounded-lg p-2 text-center justify-center items-center">
                    <Text className="text-white font-bold">Minutes</Text>
                    <Text className="text-white text-xl font-bold">
                      {teamData.games.minutes}
                    </Text>
                  </View>
                </View>

                <View className="flex-row items-center justify-center ">
                  <Text className="text-white text-xl font-bold">
                    Substitutes
                  </Text>
                </View>
                <View className="flex-row items-center justify-center space-x-2 px-2">
                  <View className="space-y-2 w-1/3 bg-orangeShadow rounded-lg p-2 text-center justify-center items-center">
                    <Text className="text-white font-bold">In</Text>
                    <Text className="text-white text-xl font-bold">
                      {teamData.substitutes.in}
                    </Text>
                  </View>
                  <View className="space-y-2 w-1/3 bg-orangeShadow rounded-lg p-2 text-center justify-center items-center">
                    <Text className="text-white font-bold">Out</Text>
                    <Text className="text-white text-xl font-bold">
                      {teamData.substitutes.out}
                    </Text>
                  </View>
                  <View className="space-y-2 w-1/3 bg-orangeShadow rounded-lg p-2 text-center justify-center items-center">
                    <Text className="text-white font-bold">Bench</Text>
                    <Text className="text-white text-xl font-bold">
                      {teamData.substitutes.bench}
                    </Text>
                  </View>
                </View>

                {teamData.games.rating === null ? null : (
                  <>
                    <View className="flex-row items-center justify-center space-x-2">
                      <Text className="text-white text-xl font-bold">
                        Rating
                      </Text>
                    </View>
                    <View className="flex-row items-center justify-center space-x-2">
                      <Image
                        source={require("../../assets/emojis/Star.png")}
                        className="h-5 w-5"
                      />

                      <Text className="text-white text-xl font-bold">
                        {parseInt(teamData.games.rating).toFixed(1)}
                      </Text>
                    </View>
                  </>
                )}
              </View>

              {/* Attack */}
              <View className="border-t border-white py-2 space-y-2 px-2">
                <View className="flex-row items-center justify-center space-x-2">
                  <Image
                    source={require("../../assets/emojis/Boom.png")}
                    className="h-5 w-5"
                  />
                  <Text className="text-white font-bold text-xl">Attack</Text>
                </View>
                <View className="flex-row items-center justify-center space-x-2">
                  {teamData.goals.total === null ? (
                    <View className="space-y-2 w-1/3 bg-redShadow rounded-lg p-2 text-center justify-center items-center">
                      <Text className="text-white font-bold">Goals</Text>
                      <Text className="text-white text-xl font-bold">0</Text>
                    </View>
                  ) : (
                    <View className="space-y-2 w-1/3 bg-redShadow rounded-lg p-2 text-center justify-center items-center">
                      <Text className="text-white font-bold">Goals</Text>
                      <Text className="text-white text-xl font-bold">
                        {teamData.goals.total}
                      </Text>
                    </View>
                  )}

                  {teamData.goals.assists === null ? (
                    <View className="space-y-2 w-1/3 bg-redShadow rounded-lg p-2 text-center justify-center items-center">
                      <Text className="text-white font-bold">Assists</Text>
                      <Text className="text-white text-xl font-bold">0</Text>
                    </View>
                  ) : (
                    <View className="space-y-2 w-1/3 bg-redShadow rounded-lg p-2 text-center justify-center items-center">
                      <Text className="text-white font-bold">Assists</Text>
                      <Text className="text-white text-xl font-bold">
                        {teamData.goals.assists}
                      </Text>
                    </View>
                  )}

                  {teamData.penalty.scored === null ? (
                    <View className="space-y-2 w-1/3 bg-redShadow rounded-lg p-2 text-center justify-center items-center">
                      <Text className="text-white font-bold">Penalty</Text>
                      <Text className="text-white text-xl font-bold">0</Text>
                    </View>
                  ) : (
                    <View className="space-y-2 w-1/3 bg-redShadow rounded-lg p-2 text-center justify-center items-center">
                      <Text className="text-white font-bold">Penalty</Text>
                      <Text className="text-white text-xl font-bold">
                        {teamData.penalty.scored}
                      </Text>
                    </View>
                  )}
                </View>
              </View>

              {/* Midfielder */}
              <View className="border-t border-white py-2 space-y-2 px-2">
                <View className="flex-row items-center justify-center space-x-2">
                  <Image
                    source={require("../../assets/emojis/Shoe.png")}
                    className="h-5 w-5"
                  />
                  <Text className="text-white font-bold text-xl">In Game</Text>
                </View>
                {/* Dribbles */}
                <View className="flex-row items-center justify-center space-x-2 ">
                  <Text className="text-white text-xl font-bold">Dribbles</Text>
                </View>
                <View className="flex-row items-center justify-center space-x-3 px-2">
                  {teamData.dribbles.attempts === null ? (
                    <View className="space-y-2 w-1/3 bg-blueShadow rounded-lg p-2 text-center justify-center items-center">
                      <Text className="text-white font-bold">Attempts</Text>
                      <Text className="text-white text-xl font-bold">0</Text>
                    </View>
                  ) : (
                    <View className="space-y-2 w-1/3 bg-blueShadow rounded-lg p-2 text-center justify-center items-center">
                      <Text className="text-white font-bold">Attempts</Text>
                      <Text className="text-white text-xl font-bold">
                        {teamData.dribbles.attempts}
                      </Text>
                    </View>
                  )}
                  {teamData.dribbles.success === null ? (
                    <View className="space-y-2 w-1/3 bg-blueShadow rounded-lg p-2 text-center justify-center items-center">
                      <Text className="text-white font-bold">Success</Text>
                      <Text className="text-white text-xl font-bold">0</Text>
                    </View>
                  ) : (
                    <View className="space-y-2 w-1/3 bg-blueShadow rounded-lg p-2 text-center justify-center items-center">
                      <Text className="text-white font-bold">Success</Text>
                      <Text className="text-white text-xl font-bold">
                        {teamData.dribbles.success}
                      </Text>
                    </View>
                  )}
                  {teamData.dribbles.past === null ? (
                    <View className="space-y-2 w-1/3 bg-blueShadow rounded-lg p-2 text-center justify-center items-center">
                      <Text className="text-white font-bold">Past</Text>
                      <Text className="text-white text-xl font-bold">0</Text>
                    </View>
                  ) : (
                    <View className="space-y-2 w-1/3 bg-blueShadow rounded-lg p-2 text-center justify-center items-center">
                      <Text className="text-white font-bold">Past</Text>
                      <Text className="text-white text-xl font-bold">
                        {teamData.dribbles.past}
                      </Text>
                    </View>
                  )}
                </View>
                {/* Passes */}
                <View className="flex-row items-center justify-center space-x-2">
                  <Text className="text-white font-bold">Passes</Text>
                </View>
                <View className="flex-row items-center justify-center space-x-3 px-2">
                  {teamData.passes.total === null ? (
                    <View className="space-y-2 w-1/3 bg-blueShadow rounded-lg p-2 text-center justify-center items-center">
                      <Text className="text-white font-bold">Total</Text>
                      <Text className="text-white text-xl font-bold">0</Text>
                    </View>
                  ) : (
                    <View className="space-y-2 w-1/3 bg-blueShadow rounded-lg p-2 text-center justify-center items-center">
                      <Text className="text-white font-bold">Total</Text>
                      <Text className="text-white text-xl font-bold">
                        {teamData.passes.total}
                      </Text>
                    </View>
                  )}
                  {teamData.passes.key === null ? (
                    <View className="space-y-2 w-1/3 bg-blueShadow rounded-lg p-2 text-center justify-center items-center">
                      <Text className="text-white font-bold">Key</Text>
                      <Text className="text-white text-xl font-bold">0</Text>
                    </View>
                  ) : (
                    <View className="space-y-2 w-1/3 bg-blueShadow rounded-lg p-2 text-center justify-center items-center">
                      <Text className="text-white font-bold">Key</Text>
                      <Text className="text-white text-xl font-bold">
                        {teamData.passes.key}
                      </Text>
                    </View>
                  )}
                  {teamData.passes.accuracy === null ? (
                    <View className="space-y-2 w-1/3 bg-blueShadow rounded-lg p-2 text-center justify-center items-center">
                      <Text className="text-white font-bold">Accuracy</Text>
                      <Text className="text-white text-xl font-bold">0</Text>
                    </View>
                  ) : (
                    <View className="space-y-2 w-1/3 bg-blueShadow rounded-lg p-2 text-center justify-center items-center">
                      <Text className="text-white font-bold">Accuracy</Text>
                      <Text className="text-white text-xl font-bold">
                        {teamData.passes.accuracy}
                      </Text>
                    </View>
                  )}
                </View>
              </View>

              {/* Defence */}
              <View className="border-t border-white py-2 px-2 space-y-2">
                <View className="flex-row items-center justify-center space-x-2">
                  <Image
                    source={require("../../assets/emojis/Lock.png")}
                    className="h-5 w-5"
                  />
                  <Text className="text-white font-bold text-xl">Defence</Text>
                </View>
                <View className="flex-row items-center justify-center space-x-3 px-2">
                  {teamData.tackles.total === null ? (
                    <View className="space-y-2 w-1/3 bg-orangeShadow rounded-lg p-2 text-center justify-center items-center">
                      <Text className="text-white font-bold">Tackles</Text>
                      <Text className="text-white text-xl font-bold">0</Text>
                    </View>
                  ) : (
                    <View className="space-y-2 w-1/3 bg-orangeShadow rounded-lg p-2 text-center justify-center items-center">
                      <Text className="text-white font-bold">Tackles</Text>
                      <Text className="text-white text-xl font-bold">
                        {teamData.tackles.total}
                      </Text>
                    </View>
                  )}
                  {teamData.tackles.blocks === null ? (
                    <View className="space-y-2 w-1/3 bg-orangeShadow rounded-lg p-2 text-center justify-center items-center">
                      <Text className="text-white font-bold">Blocks</Text>
                      <Text className="text-white text-xl font-bold">0</Text>
                    </View>
                  ) : (
                    <View className="space-y-2 w-1/3 bg-orangeShadow rounded-lg p-2 text-center justify-center items-center">
                      <Text className="text-white font-bold">Blocks</Text>
                      <Text className="text-white text-xl font-bold">
                        {teamData.tackles.blocks}
                      </Text>
                    </View>
                  )}
                  {teamData.tackles.interceptions === null ? (
                    <View className="space-y-2 w-1/3 bg-orangeShadow rounded-lg p-2 text-center justify-center items-center">
                      <Text className="text-white text-xs font-bold">
                        Interceptions
                      </Text>
                      <Text className="text-white text-xl font-bold">0</Text>
                    </View>
                  ) : (
                    <View className="space-y-2 w-1/3 bg-orangeShadow rounded-lg p-2 text-center justify-center items-center">
                      <Text className="text-white text-xs font-bold">
                        Interceptions
                      </Text>
                      <Text className="text-white text-xl font-bold">
                        {teamData.tackles.interceptions}
                      </Text>
                    </View>
                  )}
                </View>
              </View>

              {/* Goalkeeper */}

              <View className="border-t border-white space-y-2 py-2 px-2">
                <View className="flex-row items-center justify-center space-x-2">
                  <Image
                    source={require("../../assets/emojis/Gloves.png")}
                    className="h-5 w-5"
                  />
                  <Text className="text-white font-bold text-xl">
                    Goalkeeper
                  </Text>
                </View>
                <View className="flex-row items-center justify-center space-x-3 px-2">
                  {teamData.goals.saves === null ? (
                    <View className="space-y-2 w-1/3 bg-greenShadow rounded-lg p-2 text-center justify-center items-center">
                      <Text className="text-white font-bold">Saves</Text>
                      <Text className="text-white text-xl font-bold">0</Text>
                    </View>
                  ) : (
                    <View className="space-y-2 w-1/3 bg-orangeShadow rounded-lg p-2 text-center justify-center items-center">
                      <Text className="text-white font-bold">Saves</Text>
                      <Text className="text-white text-xl font-bold">
                        {teamData.goals.saves}
                      </Text>
                    </View>
                  )}
                  {teamData.goals.conceded === null ? (
                    <View className="space-y-2 w-1/3 bg-greenShadow rounded-lg p-2 text-center justify-center items-center">
                      <Text className="text-white font-bold">Conceded</Text>
                      <Text className="text-white text-xl font-bold">0</Text>
                    </View>
                  ) : (
                    <View className="space-y-2 w-1/3 bg-greenShadow rounded-lg p-2 text-center justify-center items-center">
                      <Text className="text-white font-bold">Saves</Text>
                      <Text className="text-white text-xl font-bold">
                        {teamData.goals.conceded}
                      </Text>
                    </View>
                  )}
                  {teamData.penalty.saved === null ? (
                    <View className="space-y-2 w-1/3 bg-greenShadow rounded-lg p-2 text-center justify-center items-center">
                      <Text className="text-white text-xs text-center font-bold">
                        Penalty Saved
                      </Text>
                      <Text className="text-white text-xl font-bold">0</Text>
                    </View>
                  ) : (
                    <View className="space-y-2 w-1/3 bg-greenShadow rounded-lg p-2 text-center justify-center items-center">
                      <Text className="text-white text-xs font-bold">
                        Penalty Saved
                      </Text>
                      <Text className="text-white text-xl text-center font-bold">
                        {teamData.penalty.saved}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            </View>
          )}
        </View>
      ))}
    </View>
  );
}
