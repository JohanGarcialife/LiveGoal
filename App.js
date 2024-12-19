import { useState } from "react";
import TabsMenu from "./components/TabsMenu";
import StackNavigation from "./stack/StackNavigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [tab, setTab] = useState("Home");
  return (
    <NavigationContainer>
      <StackNavigation tab={tab} setTab={setTab} />
      <TabsMenu tab={tab} setTab={setTab} />
    </NavigationContainer>
  );
}
