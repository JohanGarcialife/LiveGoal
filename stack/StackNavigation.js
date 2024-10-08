import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import League from "../screens/League";
import Match from "../screens/Match";

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="League" component={League} />
      <Stack.Screen name="Match" component={Match} />
    </Stack.Navigator>
  );
}
