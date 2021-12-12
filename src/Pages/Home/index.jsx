import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import Texto from "../../components/Texto";
import Slider from "../../components/Slider";

export default function Home() {
  

  return (
    <View style={styles.container}>
      <Slider></Slider>
      <Texto>HOME</Texto>
    </View>
  );
}
