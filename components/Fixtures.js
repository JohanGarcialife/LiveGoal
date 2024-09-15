import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getFixturesApi } from "../api/FixturesApi";
import Entypo from "@expo/vector-icons/Entypo";
import Fixture from "./Fixture";

const leagues = [
  {
    id: 39,
    name: "Premier League",
    country: "England",
    logo: "https://media.api-sports.io/football/leagues/39.png",
    active: true,
  },
  {
    id: 140,
    name: "La Liga",
    country: "Spain",
    logo: "https://media.api-sports.io/football/leagues/140.png",
    active: true,
  },
  {
    id: 2,
    name: "Champions League",
    country: "Europe",
    logo: "https://media.api-sports.io/football/leagues/2.png",
    active: false,
  },
  {
    id: 135,
    name: "Serie A",
    country: "italy",
    logo: "https://media.api-sports.io/football/leagues/135.png",
    active: true,
  },
  {
    id: 61,
    name: "Ligue 1",
    country: "France",
    logo: "https://media.api-sports.io/football/leagues/61.png",
    active: true,
  },
];

const response = [
  {
    fixture: {
      id: 1208051,
      referee: null,
      timezone: "UTC",
      date: "2024-09-14T19:00:00+00:00",
      timestamp: 1726340400,
      periods: {
        first: null,
        second: null,
      },
      venue: {
        id: 504,
        name: "Vitality Stadium",
        city: "Bournemouth, Dorset",
      },
      status: {
        long: "Not Started",
        short: "NS",
        elapsed: null,
      },
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb.svg",
      season: 2024,
      round: "Regular Season - 4",
    },
    teams: {
      home: {
        id: 35,
        name: "Bournemouth",
        logo: "https://media.api-sports.io/football/teams/35.png",
        winner: null,
      },
      away: {
        id: 49,
        name: "Chelsea",
        logo: "https://media.api-sports.io/football/teams/49.png",
        winner: null,
      },
    },
    goals: {
      home: null,
      away: null,
    },
    score: {
      halftime: {
        home: null,
        away: null,
      },
      fulltime: {
        home: null,
        away: null,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 1208052,
      referee: null,
      timezone: "UTC",
      date: "2024-09-14T16:30:00+00:00",
      timestamp: 1726331400,
      periods: {
        first: null,
        second: null,
      },
      venue: {
        id: 495,
        name: "Villa Park",
        city: "Birmingham",
      },
      status: {
        long: "Not Started",
        short: "NS",
        elapsed: null,
      },
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb.svg",
      season: 2024,
      round: "Regular Season - 4",
    },
    teams: {
      home: {
        id: 66,
        name: "Aston Villa",
        logo: "https://media.api-sports.io/football/teams/66.png",
        winner: null,
      },
      away: {
        id: 45,
        name: "Everton",
        logo: "https://media.api-sports.io/football/teams/45.png",
        winner: null,
      },
    },
    goals: {
      home: null,
      away: null,
    },
    score: {
      halftime: {
        home: null,
        away: null,
      },
      fulltime: {
        home: null,
        away: null,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 1208053,
      referee: null,
      timezone: "UTC",
      date: "2024-09-14T14:00:00+00:00",
      timestamp: 1726322400,
      periods: {
        first: null,
        second: null,
      },
      venue: {
        id: 508,
        name: "American Express Stadium",
        city: "Falmer, East Sussex",
      },
      status: {
        long: "Not Started",
        short: "NS",
        elapsed: null,
      },
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb.svg",
      season: 2024,
      round: "Regular Season - 4",
    },
    teams: {
      home: {
        id: 51,
        name: "Brighton",
        logo: "https://media.api-sports.io/football/teams/51.png",
        winner: null,
      },
      away: {
        id: 57,
        name: "Ipswich",
        logo: "https://media.api-sports.io/football/teams/57.png",
        winner: null,
      },
    },
    goals: {
      home: null,
      away: null,
    },
    score: {
      halftime: {
        home: null,
        away: null,
      },
      fulltime: {
        home: null,
        away: null,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 1208054,
      referee: null,
      timezone: "UTC",
      date: "2024-09-14T14:00:00+00:00",
      timestamp: 1726322400,
      periods: {
        first: null,
        second: null,
      },
      venue: {
        id: 525,
        name: "Selhurst Park",
        city: "London",
      },
      status: {
        long: "Not Started",
        short: "NS",
        elapsed: null,
      },
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb.svg",
      season: 2024,
      round: "Regular Season - 4",
    },
    teams: {
      home: {
        id: 52,
        name: "Crystal Palace",
        logo: "https://media.api-sports.io/football/teams/52.png",
        winner: null,
      },
      away: {
        id: 46,
        name: "Leicester",
        logo: "https://media.api-sports.io/football/teams/46.png",
        winner: null,
      },
    },
    goals: {
      home: null,
      away: null,
    },
    score: {
      halftime: {
        home: null,
        away: null,
      },
      fulltime: {
        home: null,
        away: null,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 1208055,
      referee: null,
      timezone: "UTC",
      date: "2024-09-14T14:00:00+00:00",
      timestamp: 1726322400,
      periods: {
        first: null,
        second: null,
      },
      venue: {
        id: 535,
        name: "Craven Cottage",
        city: "London",
      },
      status: {
        long: "Not Started",
        short: "NS",
        elapsed: null,
      },
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb.svg",
      season: 2024,
      round: "Regular Season - 4",
    },
    teams: {
      home: {
        id: 36,
        name: "Fulham",
        logo: "https://media.api-sports.io/football/teams/36.png",
        winner: null,
      },
      away: {
        id: 48,
        name: "West Ham",
        logo: "https://media.api-sports.io/football/teams/48.png",
        winner: null,
      },
    },
    goals: {
      home: null,
      away: null,
    },
    score: {
      halftime: {
        home: null,
        away: null,
      },
      fulltime: {
        home: null,
        away: null,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 1208056,
      referee: null,
      timezone: "UTC",
      date: "2024-09-14T14:00:00+00:00",
      timestamp: 1726322400,
      periods: {
        first: null,
        second: null,
      },
      venue: {
        id: 550,
        name: "Anfield",
        city: "Liverpool",
      },
      status: {
        long: "Not Started",
        short: "NS",
        elapsed: null,
      },
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb.svg",
      season: 2024,
      round: "Regular Season - 4",
    },
    teams: {
      home: {
        id: 40,
        name: "Liverpool",
        logo: "https://media.api-sports.io/football/teams/40.png",
        winner: null,
      },
      away: {
        id: 65,
        name: "Nottingham Forest",
        logo: "https://media.api-sports.io/football/teams/65.png",
        winner: null,
      },
    },
    goals: {
      home: null,
      away: null,
    },
    score: {
      halftime: {
        home: null,
        away: null,
      },
      fulltime: {
        home: null,
        away: null,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 1208057,
      referee: null,
      timezone: "UTC",
      date: "2024-09-14T14:00:00+00:00",
      timestamp: 1726322400,
      periods: {
        first: null,
        second: null,
      },
      venue: {
        id: 555,
        name: "Etihad Stadium",
        city: "Manchester",
      },
      status: {
        long: "Not Started",
        short: "NS",
        elapsed: null,
      },
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb.svg",
      season: 2024,
      round: "Regular Season - 4",
    },
    teams: {
      home: {
        id: 50,
        name: "Manchester City",
        logo: "https://media.api-sports.io/football/teams/50.png",
        winner: null,
      },
      away: {
        id: 55,
        name: "Brentford",
        logo: "https://media.api-sports.io/football/teams/55.png",
        winner: null,
      },
    },
    goals: {
      home: null,
      away: null,
    },
    score: {
      halftime: {
        home: null,
        away: null,
      },
      fulltime: {
        home: null,
        away: null,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 1208058,
      referee: null,
      timezone: "UTC",
      date: "2024-09-14T11:30:00+00:00",
      timestamp: 1726313400,
      periods: {
        first: null,
        second: null,
      },
      venue: {
        id: 585,
        name: "St. Mary's Stadium",
        city: "Southampton, Hampshire",
      },
      status: {
        long: "Not Started",
        short: "NS",
        elapsed: null,
      },
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb.svg",
      season: 2024,
      round: "Regular Season - 4",
    },
    teams: {
      home: {
        id: 41,
        name: "Southampton",
        logo: "https://media.api-sports.io/football/teams/41.png",
        winner: null,
      },
      away: {
        id: 33,
        name: "Manchester United",
        logo: "https://media.api-sports.io/football/teams/33.png",
        winner: null,
      },
    },
    goals: {
      home: null,
      away: null,
    },
    score: {
      halftime: {
        home: null,
        away: null,
      },
      fulltime: {
        home: null,
        away: null,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
];

export default function Fixtures(props) {
  const { navigation } = props;
  const [activeLeagues, setActiveLeagues] = useState([]);

  leagues.forEach((league) => {
    if (league.active === true) {
      activeLeagues.push(league);
    }
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text className="text-2xl font-bold text-white my-5 mx-6">
        Today's Fixtures
      </Text>
      {activeLeagues?.map((league) => (
        <FixturesList
          key={league.id}
          id={league.id}
          logo={league.logo}
          name={league.name}
          country={league.country}
          navigation={navigation}
        />
      ))}
    </ScrollView>
  );
}

function FixturesList(props) {
  const { navigation, logo, name, id, country } = props;
  const [fixtures, setFixtures] = useState(null);

  const onNavigation = () => {
    navigation.navigate("League", {
      id,
      name,
      logo,
    });
  };

  // useEffect(() => {
  //   (async () => {
  //     const response = await getFixturesApi(id, "2024");

  //     setFixtures(response.response);
  //   })();
  // }, []);

  return (
    <>
      <View className="my-5 space-y-3 w-full">
        <View className="flex-row px-6 justify-between items-center">
          <View className="flex-row items-center space-x-2">
            <View className="bg-gray/50 p-2 rounded-lg">
              <Image
                source={{
                  uri: `${logo}`,
                }}
                className="h-7 w-7"
              />
            </View>
            <View className="">
              <Text className="text-white font-bold text-xs">{name}</Text>
              <Text className="text-white text-xs ">{country}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={onNavigation}>
            <Entypo name="chevron-small-right" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {response?.map((fixture) => (
          <Fixture
            league={id}
            fixture={fixture}
            id={fixture.fixture.id}
            key={fixture.fixture.id}
            navigation={navigation}
          />
        ))}
      </ScrollView>
    </>
  );
}
