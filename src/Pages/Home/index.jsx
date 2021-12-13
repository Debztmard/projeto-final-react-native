import React, { useState, useEffect, Component } from "react";
import { View, Button, ScrollView } from "react-native";
import { styles } from "./styles";
import Texto from "../../components/Texto";
import Slider from "../../components/Slider";
import Card from "../../components/Card";
import Header from "../../components/Header";
import axios from "axios";
import { Link } from "@react-navigation/native";
import Oferta from "../../components/oferta";
import { Animated } from "react-native-web";

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
         <Oferta />
        </View>
      </ScrollView>
    </View>
  );
}
