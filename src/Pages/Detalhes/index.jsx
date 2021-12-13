import React, { useState, useEffect } from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";
import Texto from "../../components/Texto";
import Slider from "../../components/Slider";
import { Card } from "../../components/Card/index";
import axios from "axios";

export default function Detalhes({ route }) {
  const { id_produto } = route.params;
  const [produto, setProduto] = useState([]);

  const handleClick = async () => {
    await axios({
      method: "GET",
      url: `https://api-nossa-loja.herokuapp.com/produtos/${id_produto}`,
    }).then((response) => {

      setProduto(response.data[id]);
    });
    
  };
  
  useEffect(() => {
    handleClick();
  }, []);

  return (
   
      <View style={styles.container}>
        <Texto>ID Produto: {id_produto}</Texto>
        <Texto>Nome: {produto.nome}</Texto>
        
      </View>
   
  );
}
