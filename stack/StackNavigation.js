import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import League from "../screens/League";
import Match from "../screens/Match";
import Team from "../screens/Team";
import Coach from "../screens/Coach";
import Player from "../screens/Player";
import Standings from "../screens/Standings";
import Explore from "../screens/Explore";
import Stadium from "../screens/Stadium";

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Standings" component={Standings} />
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="League" component={League} />
      <Stack.Screen name="Match" component={Match} />
      <Stack.Screen name="Player" component={Player} />
      <Stack.Screen name="Coach" component={Coach} />
      <Stack.Screen name="Team" component={Team} />
      <Stack.Screen name="Stadium" component={Stadium} />
    </Stack.Navigator>
  );
}
