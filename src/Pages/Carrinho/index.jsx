import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import Texto from "../../components/Texto";
import Header from "../../components/Header";

export default function Carrinho({ navigation }) {
  return (
    
    <View style={styles.container}>
        <Header/>
        <View style={styles.styloTexto}>
        <Texto>Olá, eu sou o carrinho!</Texto>
        <Texto>Minhas rodinhas quebraram, estou em manutenção!</Texto>
        </View>
    </View>
  );
}
