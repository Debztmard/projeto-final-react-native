import React from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";
import Texto from "../../components/Texto";

export default function Detalhes({ route }) {
  const { nome, descricao, preco, uri } = route.params;

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri }} />
      <Texto>{nome}</Texto>
      <Texto>{descricao}</Texto>
      <Texto>{preco}</Texto>
    </View>
  );
}
