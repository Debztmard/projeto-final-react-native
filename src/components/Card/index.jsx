import React from "react";
import { View, Image } from "react-native";
import Texto from "../Texto";
import { styles } from "./styles";

export default function Card(props) {
  const { nome, uri, preco } = props;

  return (
    <View style={styles.container}>
      <View style={styles.produtoContainer}>
        <Image style={styles.imgProduto} source={{ uri: uri }} />
        <Texto>{nome}</Texto>
        <Texto>R${preco}</Texto>
      </View>
    </View>
  );
}
//
