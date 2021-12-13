import React from "react";
import { View, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import Texto from "../../components/Texto";

export default function Detalhes({ route }) {
  const { nome, descricao, preco, uri } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.fxImg}>
        <Image style={styles.img} source={{ uri }} />
      </View>
      <View style={styles.fxTexto}>
        <Texto style={styles.nome} >{nome}</Texto>  
        <Texto style={styles.preco} >R$ {preco}</Texto>    
        <Texto style={styles.descricao} >{descricao}</Texto>
      </View>
    </View>
  );
}
