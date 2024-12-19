import React from "react";
import { View, Text, Image } from "react-native";
import { DataTable } from "react-native-paper";

export default function Standing(props) {
  const { navigation } = props;

  const response = {
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb.svg",
      season: 2024,
      standings: [
        [
          {
            rank: 1,
            team: {
              id: 50,
              name: "Manchester City",
              logo: "https://media.api-sports.io/football/teams/50.png",
            },
            points: 9,
            goalsDiff: 7,
            group: "Premier League",
            form: "WWW",
            status: "same",
            description: "Champions League",
            all: {
              played: 3,
              win: 3,
              draw: 0,
              lose: 0,
              goals: {
                for: 9,
                against: 2,
              },
            },
            home: {
              played: 1,
              win: 1,
              draw: 0,
              lose: 0,
              goals: {
                for: 4,
                against: 1,
              },
            },
            away: {
              played: 2,
              win: 2,
              draw: 0,
              lose: 0,
              goals: {
                for: 5,
                against: 1,
              },
            },
            update: "2024-09-02T00:00:00+00:00",
          },
          {
            rank: 2,
            team: {
              id: 40,
              name: "Liverpool",
              logo: "https://media.api-sports.io/football/teams/40.png",
            },
            points: 9,
            goalsDiff: 7,
            group: "Premier League",
            form: "WWW",
            status: "same",
            description: "Champions League",
            all: {
              played: 3,
              win: 3,
              draw: 0,
              lose: 0,
              goals: {
                for: 7,
                against: 0,
              },
            },
            home: {
              played: 1,
              win: 1,
              draw: 0,
              lose: 0,
              goals: {
                for: 2,
                against: 0,
              },
            },
            away: {
              played: 2,
              win: 2,
              draw: 0,
              lose: 0,
              goals: {
                for: 5,
                against: 0,
              },
            },
            update: "2024-09-02T00:00:00+00:00",
          },
          {
            rank: 3,
            team: {
              id: 51,
              name: "Brighton",
              logo: "https://media.api-sports.io/football/teams/51.png",
            },
            points: 7,
            goalsDiff: 4,
            group: "Premier League",
            form: "DWW",
            status: "same",
            description: "Champions League",
            all: {
              played: 3,
              win: 2,
              draw: 1,
              lose: 0,
              goals: {
                for: 6,
                against: 2,
              },
            },
            home: {
              played: 1,
              win: 1,
              draw: 0,
              lose: 0,
              goals: {
                for: 2,
                against: 1,
              },
            },
            away: {
              played: 2,
              win: 1,
              draw: 1,
              lose: 0,
              goals: {
                for: 4,
                against: 1,
              },
            },
            update: "2024-09-02T00:00:00+00:00",
          },
          {
            rank: 4,
            team: {
              id: 42,
              name: "Arsenal",
              logo: "https://media.api-sports.io/football/teams/42.png",
            },
            points: 7,
            goalsDiff: 4,
            group: "Premier League",
            form: "DWW",
            status: "same",
            description: "Champions League",
            all: {
              played: 3,
              win: 2,
              draw: 1,
              lose: 0,
              goals: {
                for: 5,
                against: 1,
              },
            },
            home: {
              played: 2,
              win: 1,
              draw: 1,
              lose: 0,
              goals: {
                for: 3,
                against: 1,
              },
            },
            away: {
              played: 1,
              win: 1,
              draw: 0,
              lose: 0,
              goals: {
                for: 2,
                against: 0,
              },
            },
            update: "2024-09-02T00:00:00+00:00",
          },
          {
            rank: 5,
            team: {
              id: 34,
              name: "Newcastle",
              logo: "https://media.api-sports.io/football/teams/34.png",
            },
            points: 7,
            goalsDiff: 2,
            group: "Premier League",
            form: "WDW",
            status: "same",
            description: "UEFA Europa League",
            all: {
              played: 3,
              win: 2,
              draw: 1,
              lose: 0,
              goals: {
                for: 4,
                against: 2,
              },
            },
            home: {
              played: 2,
              win: 2,
              draw: 0,
              lose: 0,
              goals: {
                for: 3,
                against: 1,
              },
            },
            away: {
              played: 1,
              win: 0,
              draw: 1,
              lose: 0,
              goals: {
                for: 1,
                against: 1,
              },
            },
            update: "2024-09-02T00:00:00+00:00",
          },
          {
            rank: 6,
            team: {
              id: 55,
              name: "Brentford",
              logo: "https://media.api-sports.io/football/teams/55.png",
            },
            points: 6,
            goalsDiff: 1,
            group: "Premier League",
            form: "WLW",
            status: "same",
            description: null,
            all: {
              played: 3,
              win: 2,
              draw: 0,
              lose: 1,
              goals: {
                for: 5,
                against: 4,
              },
            },
            home: {
              played: 2,
              win: 2,
              draw: 0,
              lose: 0,
              goals: {
                for: 5,
                against: 2,
              },
            },
            away: {
              played: 1,
              win: 0,
              draw: 0,
              lose: 1,
              goals: {
                for: 0,
                against: 2,
              },
            },
            update: "2024-09-02T00:00:00+00:00",
          },
          {
            rank: 7,
            team: {
              id: 66,
              name: "Aston Villa",
              logo: "https://media.api-sports.io/football/teams/66.png",
            },
            points: 6,
            goalsDiff: 0,
            group: "Premier League",
            form: "WLW",
            status: "same",
            description: null,
            all: {
              played: 3,
              win: 2,
              draw: 0,
              lose: 1,
              goals: {
                for: 4,
                against: 4,
              },
            },
            home: {
              played: 1,
              win: 0,
              draw: 0,
              lose: 1,
              goals: {
                for: 0,
                against: 2,
              },
            },
            away: {
              played: 2,
              win: 2,
              draw: 0,
              lose: 0,
              goals: {
                for: 4,
                against: 2,
              },
            },
            update: "2024-09-02T00:00:00+00:00",
          },
          {
            rank: 8,
            team: {
              id: 35,
              name: "Bournemouth",
              logo: "https://media.api-sports.io/football/teams/35.png",
            },
            points: 5,
            goalsDiff: 1,
            group: "Premier League",
            form: "WDD",
            status: "same",
            description: null,
            all: {
              played: 3,
              win: 1,
              draw: 2,
              lose: 0,
              goals: {
                for: 5,
                against: 4,
              },
            },
            home: {
              played: 1,
              win: 0,
              draw: 1,
              lose: 0,
              goals: {
                for: 1,
                against: 1,
              },
            },
            away: {
              played: 2,
              win: 1,
              draw: 1,
              lose: 0,
              goals: {
                for: 4,
                against: 3,
              },
            },
            update: "2024-09-02T00:00:00+00:00",
          },
          {
            rank: 9,
            team: {
              id: 65,
              name: "Nottingham Forest",
              logo: "https://media.api-sports.io/football/teams/65.png",
            },
            points: 5,
            goalsDiff: 1,
            group: "Premier League",
            form: "DWD",
            status: "same",
            description: null,
            all: {
              played: 3,
              win: 1,
              draw: 2,
              lose: 0,
              goals: {
                for: 3,
                against: 2,
              },
            },
            home: {
              played: 2,
              win: 0,
              draw: 2,
              lose: 0,
              goals: {
                for: 2,
                against: 2,
              },
            },
            away: {
              played: 1,
              win: 1,
              draw: 0,
              lose: 0,
              goals: {
                for: 1,
                against: 0,
              },
            },
            update: "2024-09-02T00:00:00+00:00",
          },
          {
            rank: 10,
            team: {
              id: 47,
              name: "Tottenham",
              logo: "https://media.api-sports.io/football/teams/47.png",
            },
            points: 4,
            goalsDiff: 3,
            group: "Premier League",
            form: "LWD",
            status: "same",
            description: null,
            all: {
              played: 3,
              win: 1,
              draw: 1,
              lose: 1,
              goals: {
                for: 6,
                against: 3,
              },
            },
            home: {
              played: 1,
              win: 1,
              draw: 0,
              lose: 0,
              goals: {
                for: 4,
                against: 0,
              },
            },
            away: {
              played: 2,
              win: 0,
              draw: 1,
              lose: 1,
              goals: {
                for: 2,
                against: 3,
              },
            },
            update: "2024-09-02T00:00:00+00:00",
          },
          {
            rank: 11,
            team: {
              id: 49,
              name: "Chelsea",
              logo: "https://media.api-sports.io/football/teams/49.png",
            },
            points: 4,
            goalsDiff: 2,
            group: "Premier League",
            form: "DWL",
            status: "same",
            description: null,
            all: {
              played: 3,
              win: 1,
              draw: 1,
              lose: 1,
              goals: {
                for: 7,
                against: 5,
              },
            },
            home: {
              played: 2,
              win: 0,
              draw: 1,
              lose: 1,
              goals: {
                for: 1,
                against: 3,
              },
            },
            away: {
              played: 1,
              win: 1,
              draw: 0,
              lose: 0,
              goals: {
                for: 6,
                against: 2,
              },
            },
            update: "2024-09-02T00:00:00+00:00",
          },
          {
            rank: 12,
            team: {
              id: 36,
              name: "Fulham",
              logo: "https://media.api-sports.io/football/teams/36.png",
            },
            points: 4,
            goalsDiff: 0,
            group: "Premier League",
            form: "DWL",
            status: "same",
            description: null,
            all: {
              played: 3,
              win: 1,
              draw: 1,
              lose: 1,
              goals: {
                for: 3,
                against: 3,
              },
            },
            home: {
              played: 1,
              win: 1,
              draw: 0,
              lose: 0,
              goals: {
                for: 2,
                against: 1,
              },
            },
            away: {
              played: 2,
              win: 0,
              draw: 1,
              lose: 1,
              goals: {
                for: 1,
                against: 2,
              },
            },
            update: "2024-09-02T00:00:00+00:00",
          },
          {
            rank: 13,
            team: {
              id: 48,
              name: "West Ham",
              logo: "https://media.api-sports.io/football/teams/48.png",
            },
            points: 3,
            goalsDiff: -1,
            group: "Premier League",
            form: "LWL",
            status: "same",
            description: null,
            all: {
              played: 3,
              win: 1,
              draw: 0,
              lose: 2,
              goals: {
                for: 4,
                against: 5,
              },
            },
            home: {
              played: 2,
              win: 0,
              draw: 0,
              lose: 2,
              goals: {
                for: 2,
                against: 5,
              },
            },
            away: {
              played: 1,
              win: 1,
              draw: 0,
              lose: 0,
              goals: {
                for: 2,
                against: 0,
              },
            },
            update: "2024-09-02T00:00:00+00:00",
          },
          {
            rank: 14,
            team: {
              id: 33,
              name: "Manchester United",
              logo: "https://media.api-sports.io/football/teams/33.png",
            },
            points: 3,
            goalsDiff: -3,
            group: "Premier League",
            form: "LLW",
            status: "same",
            description: null,
            all: {
              played: 3,
              win: 1,
              draw: 0,
              lose: 2,
              goals: {
                for: 2,
                against: 5,
              },
            },
            home: {
              played: 2,
              win: 1,
              draw: 0,
              lose: 1,
              goals: {
                for: 1,
                against: 3,
              },
            },
            away: {
              played: 1,
              win: 0,
              draw: 0,
              lose: 1,
              goals: {
                for: 1,
                against: 2,
              },
            },
            update: "2024-09-02T00:00:00+00:00",
          },
          {
            rank: 15,
            team: {
              id: 46,
              name: "Leicester",
              logo: "https://media.api-sports.io/football/teams/46.png",
            },
            points: 1,
            goalsDiff: -2,
            group: "Premier League",
            form: "LLD",
            status: "same",
            description: null,
            all: {
              played: 3,
              win: 0,
              draw: 1,
              lose: 2,
              goals: {
                for: 3,
                against: 5,
              },
            },
            home: {
              played: 2,
              win: 0,
              draw: 1,
              lose: 1,
              goals: {
                for: 2,
                against: 3,
              },
            },
            away: {
              played: 1,
              win: 0,
              draw: 0,
              lose: 1,
              goals: {
                for: 1,
                against: 2,
              },
            },
            update: "2024-09-02T00:00:00+00:00",
          },
          {
            rank: 16,
            team: {
              id: 52,
              name: "Crystal Palace",
              logo: "https://media.api-sports.io/football/teams/52.png",
            },
            points: 1,
            goalsDiff: -3,
            group: "Premier League",
            form: "DLL",
            status: "same",
            description: null,
            all: {
              played: 3,
              win: 0,
              draw: 1,
              lose: 2,
              goals: {
                for: 2,
                against: 5,
              },
            },
            home: {
              played: 1,
              win: 0,
              draw: 0,
              lose: 1,
              goals: {
                for: 0,
                against: 2,
              },
            },
            away: {
              played: 2,
              win: 0,
              draw: 1,
              lose: 1,
              goals: {
                for: 2,
                against: 3,
              },
            },
            update: "2024-09-02T00:00:00+00:00",
          },
          {
            rank: 17,
            team: {
              id: 57,
              name: "Ipswich",
              logo: "https://media.api-sports.io/football/teams/57.png",
            },
            points: 1,
            goalsDiff: -5,
            group: "Premier League",
            form: "DLL",
            status: "same",
            description: null,
            all: {
              played: 3,
              win: 0,
              draw: 1,
              lose: 2,
              goals: {
                for: 2,
                against: 7,
              },
            },
            home: {
              played: 2,
              win: 0,
              draw: 1,
              lose: 1,
              goals: {
                for: 1,
                against: 3,
              },
            },
            away: {
              played: 1,
              win: 0,
              draw: 0,
              lose: 1,
              goals: {
                for: 1,
                against: 4,
              },
            },
            update: "2024-09-02T00:00:00+00:00",
          },
          {
            rank: 18,
            team: {
              id: 39,
              name: "Wolves",
              logo: "https://media.api-sports.io/football/teams/39.png",
            },
            points: 1,
            goalsDiff: -6,
            group: "Premier League",
            form: "DLL",
            status: "same",
            description: "Relegation",
            all: {
              played: 3,
              win: 0,
              draw: 1,
              lose: 2,
              goals: {
                for: 3,
                against: 9,
              },
            },
            home: {
              played: 1,
              win: 0,
              draw: 0,
              lose: 1,
              goals: {
                for: 2,
                against: 6,
              },
            },
            away: {
              played: 2,
              win: 0,
              draw: 1,
              lose: 1,
              goals: {
                for: 1,
                against: 3,
              },
            },
            update: "2024-09-02T00:00:00+00:00",
          },
          {
            rank: 19,
            team: {
              id: 41,
              name: "Southampton",
              logo: "https://media.api-sports.io/football/teams/41.png",
            },
            points: 0,
            goalsDiff: -4,
            group: "Premier League",
            form: "LLL",
            status: "same",
            description: "Relegation",
            all: {
              played: 3,
              win: 0,
              draw: 0,
              lose: 3,
              goals: {
                for: 1,
                against: 5,
              },
            },
            home: {
              played: 1,
              win: 0,
              draw: 0,
              lose: 1,
              goals: {
                for: 0,
                against: 1,
              },
            },
            away: {
              played: 2,
              win: 0,
              draw: 0,
              lose: 2,
              goals: {
                for: 1,
                against: 4,
              },
            },
            update: "2024-09-02T00:00:00+00:00",
          },
          {
            rank: 20,
            team: {
              id: 45,
              name: "Everton",
              logo: "https://media.api-sports.io/football/teams/45.png",
            },
            points: 0,
            goalsDiff: -8,
            group: "Premier League",
            form: "LLL",
            status: "same",
            description: "Relegation",
            all: {
              played: 3,
              win: 0,
              draw: 0,
              lose: 3,
              goals: {
                for: 2,
                against: 10,
              },
            },
            home: {
              played: 2,
              win: 0,
              draw: 0,
              lose: 2,
              goals: {
                for: 2,
                against: 6,
              },
            },
            away: {
              played: 1,
              win: 0,
              draw: 0,
              lose: 1,
              goals: {
                for: 0,
                against: 4,
              },
            },
            update: "2024-09-02T00:00:00+00:00",
          },
        ],
      ],
    },
  };

  return (
    <View className="mb-12">
      <DataTable>
        <DataTable.Header className="mx-3 mb-1">
          <DataTable.Title>
            <Text className="text-white">#</Text>
          </DataTable.Title>
          <DataTable.Title style={{ flex: 5 }}>
            <Text className="text-white">Team</Text>
          </DataTable.Title>
          <DataTable.Title style={{ justifyContent: "center" }}>
            <Text className="text-white">G</Text>
          </DataTable.Title>
          <DataTable.Title style={{ justifyContent: "center" }}>
            <Text className="text-white">W</Text>
          </DataTable.Title>
          <DataTable.Title style={{ justifyContent: "center" }}>
            <Text className="text-white">D</Text>
          </DataTable.Title>
          <DataTable.Title style={{ justifyContent: "center" }}>
            <Text className="text-white">L</Text>
          </DataTable.Title>
          <DataTable.Title style={{ justifyContent: "center" }}>
            <Text className="text-white">Gf</Text>
          </DataTable.Title>
          <DataTable.Title style={{ justifyContent: "center" }}>
            <Text className="text-white">Ga</Text>
          </DataTable.Title>
          <DataTable.Title style={{ justifyContent: "center" }}>
            <Text className="text-white">Gd</Text>
          </DataTable.Title>
          <DataTable.Title style={{ justifyContent: "center" }}>
            <Text className="text-white">Pts</Text>
          </DataTable.Title>
        </DataTable.Header>

        {response.league.standings[0].map((item) => (
          <Row
            navigation={navigation}
            item={item}
            id={item.team.id}
            key={item.team.id}
          />
        ))}
      </DataTable>
    </View>
  );
}

function Row(props) {
  const { navigation, item, id } = props;
  const onNavigation = () => {
    navigation.navigate("Team", {
      id,
    });
  };
  return (
    <DataTable.Row
      className={
        (item.description === "Champions League" &&
          "bg-blueShadow rounded-xl mx-3 my-1 border-b-0") ||
        (item.description === "UEFA Europa League" &&
          "bg-orangeShadow rounded-xl mx-3 my-1 border-b-0") ||
        (item.description === null && "mx-3 my-1 border-b-0") ||
        (item.description === "Relegation" &&
          "bg-redShadow rounded-xl mx-3 my-1 border-b-0")
      }
      key={item.rank}
      onPress={onNavigation}
    >
      <DataTable.Cell>
        <Text className="text-white">{item.rank}</Text>
      </DataTable.Cell>
      <DataTable.Cell style={{ flex: 5 }}>
        <View className="flex-row items-center space-x-1">
          <Image
            source={{
              uri: `${item.team.logo}`,
            }}
            className="h-4 w-4"
          />
          <Text>
            <Text className="text-white text-xs">{item.team.name}</Text>
          </Text>
        </View>
      </DataTable.Cell>

      <DataTable.Cell style={{ justifyContent: "center" }}>
        <Text className="text-white">{item.all.played}</Text>
      </DataTable.Cell>
      <DataTable.Cell style={{ justifyContent: "center" }}>
        <Text className="text-white">{item.all.win}</Text>
      </DataTable.Cell>
      <DataTable.Cell style={{ justifyContent: "center" }}>
        <Text className="text-white">{item.all.draw}</Text>
      </DataTable.Cell>
      <DataTable.Cell style={{ justifyContent: "center" }}>
        <Text className="text-white">{item.all.lose}</Text>
      </DataTable.Cell>

      <DataTable.Cell style={{ justifyContent: "center" }}>
        <Text className="text-white">{item.all.goals.for}</Text>
      </DataTable.Cell>
      <DataTable.Cell style={{ justifyContent: "center" }}>
        <Text className="text-white">{item.all.goals.against}</Text>
      </DataTable.Cell>
      <DataTable.Cell style={{ justifyContent: "center" }}>
        <Text className="text-white">{item.goalsDiff}</Text>
      </DataTable.Cell>
      <DataTable.Cell style={{ justifyContent: "center" }}>
        <Text className="text-white">{item.points}</Text>
      </DataTable.Cell>
    </DataTable.Row>
  );
}
