import React, { useState, useEffect } from "react";
import { View, Button, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Texto from "../../components/Texto";
//import Slider from "../../components/Slider";
import Card from "../../components/Card";
import Header from "../../components/Header";
import axios from "axios";

export default function Galeria() {
  const [produtos, setProdutos] = useState(null);

  const handleClick = async () => {
    await axios({
      method: "GET",
      url: "https://api-nossa-loja.herokuapp.com/produtos",
    }).then((response) => {
      setProdutos(response.data);
    });
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          {produtos?.map((produtos) => {
            return (
              <Card
                key={produtos.id}
                uri={produtos.imagens}
                preco={produtos.vlUnitario}
                nome={produtos.nome}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
