import React from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";
import Texto from "../../components/Texto";

export default function Detalhes({ route }) {
  const { nome, descricao, preco, uri } = route.params;

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri }} />
      <Texto style={styles.nome} >{nome}</Texto>
      <Texto style={styles.descricao} >{descricao}</Texto>
      <Texto style={styles.preco} >R$ {preco}</Texto>
    </View>
  );
}
