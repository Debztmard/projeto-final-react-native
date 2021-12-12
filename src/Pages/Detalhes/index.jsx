import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import Texto from "../../components/Texto";
import Slider from "../../components/Slider";

export default function Detalhes({ navigation }) {
  return (
    <View style={styles.container}>
      <Slider/>
      <Texto>DETALHES</Texto>
    </View>
  );
}
