import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { styles } from "./styles";
import Card from "../../components/Card";
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
                descricao={produtos.descricao}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
