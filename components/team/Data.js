import React, { useState } from "react";
import { View } from "react-native";
import Form from "./data/Form";
import MenuTeam from "./MenuTeam";
import Fixtures from "./data/Fixtures";
import Biggest from "./data/Biggest";
import Goals from "./data/Goals";
import Penalty from "./data/Penalty";
import Cards from "./data/Cards";
import CleanSheets from "./data/CleanSheets";
import FailedToScore from "./data/FailedToScore";

export default function Data(props) {
  const [menuActive, setMenuActive] = useState(1);
  const {
    form,
    fixtures,
    biggest,
    goals,
    penalty,
    cards,
    cleanSheets,
    failedToScore,
  } = props;

  console.log(fixtures);

  return (
    <View className="px-6 space-y-3">
      <MenuTeam menuActive={menuActive} setMenuActive={setMenuActive} />
      {/* Form */}

      {menuActive === 1 && <Form form={form} />}

      {/* Fixtures */}
      {menuActive === 2 && <Fixtures fixtures={fixtures} />}

      {/* Biggest */}
      {menuActive === 3 && <Biggest biggest={biggest} />}

      {/* Goals */}
      {menuActive === 4 && <Goals goals={goals} />}

      {/* Penalty */}
      {menuActive === 5 && <Penalty penalty={penalty} />}

      {/* Cards */}
      {menuActive === 6 && <Cards cards={cards} />}

      {/* Clean Sheets */}
      {menuActive === 7 && <CleanSheets cleanSheets={cleanSheets} />}

      {/* Failed to Score */}
      {menuActive === 8 && <FailedToScore failedToScore={failedToScore} />}
    </View>
  );
}
