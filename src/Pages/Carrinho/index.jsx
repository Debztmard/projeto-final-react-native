import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import Texto from "../../components/Texto";

export default function Carrinho({ navigation }) {
  return (
    <View style={styles.container}>
      <Texto>Olá, eu sou o carrinho!</Texto>
      <Texto>Minhas rodinhas quebraram, estou em manutenção!</Texto>
    </View>
  );
}
