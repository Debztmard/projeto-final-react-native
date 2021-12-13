import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import Texto from "../../components/Texto";
import Slider from "../../components/Slider";
import { Card } from "../../components/Card/index";

export default function Detalhes({ route }) {
  const { id_produto } = route.params;

  const handleClick = async () => {
    const [produto, setProduto] = useState(null);

    await axios({
      method: "GET",
      url: `https://api-nossa-loja.herokuapp.com/produtos/${id_produto}`,
    }).then((response) => {
      setProdutos(response.data);
    });
  };

  return (
    <View style={styles.container}>
      <Texto>ID Produto: {id_produto}</Texto>
      <Texto>Descrição: {produto.descricao}</Texto>
    </View>
  );
}
