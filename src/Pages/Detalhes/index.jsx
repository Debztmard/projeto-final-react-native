// import React from "react";
// import { View } from "react-native";
// import { styles } from "./styles";
// import Texto from "../../components/Texto";
// import Slider from "../../components/Slider";

// export default function Detalhes({ navigation }) {
//   return (
//     <View style={styles.container}>
      
//       <Texto>DETALHES</Texto>
      
//     </View>
//   );
// }

import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import Texto from "../../components/Texto";
import Slider from "../../components/Slider";
import { Card } from "../../components/Card/index";

export default function Detalhes({ route }) {
  const { nome } = route.params;

  return (
    <View style={styles.container}>
      <Texto>nome</Texto>
      <Texto>{nome}</Texto>
    </View>
  );
}