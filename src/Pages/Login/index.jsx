import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import Texto from "../../components/Texto";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Texto>LOGIN</Texto>
    </View>
  );
}
