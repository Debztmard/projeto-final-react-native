import React, { useState, useEffect, Component } from "react";
import { View, ScrollView } from "react-native";
import { styles } from "./styles";
import Slider from "../../components/Slider";
import Header from "../../components/Header";
import axios from "axios";
import Oferta from "../../components/oferta";

export default function Home() {
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
    <View style={{ backgroundColor: "#fff" }}>
      <Header />
      <ScrollView>
        <Slider style={styles.slider} />
        <View style={styles.container}>
          <Oferta />
        </View>
      </ScrollView>
    </View>
  );
}
