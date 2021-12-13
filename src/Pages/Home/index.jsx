import React, { useState, useEffect, Component } from "react";
import { View, Button, ScrollView } from "react-native";
import { styles } from "./styles";
import Texto from "../../components/Texto";
import Slider from "../../components/Slider";
import Card from "../../components/Card";
import Header from "../../components/Header";
import axios from "axios";
import { Link } from "@react-navigation/native";

export default function Home({ navigation }) {
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
        <Slider style={styles.slider} />
        <View style={styles.container}>
          {produtos?.map((produtos) => {
            return (
              <>
                <Card
                  key={produtos.id}
                  uri={produtos.imagens}
                  preco={produtos.vlUnitario}
                  nome={produtos.nome}
                />
                <Button
                  title='Detalhes'
                  onPress={() =>
                    navigation.navigate("Detalhes", { id_produto: produtos.id })
                  }></Button>
              </>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );  
};
