import React, { useState, useEffect } from "react";
import {
  View,
  Button,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

export default function Oferta() {
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  var numAleatorio = Math.floor(Math.random() * 10);
  const navigation = useNavigation();

  const handleClick = async () => {
    setLoading(true);

    await axios({
      method: "GET",
      url: "https://api-nossa-loja.herokuapp.com/produtos",
      responseType: "json",
    }).then((response) => {
      setApiData(
        response.data[numAleatorio].imagens,
        response.data[numAleatorio].nome
      );
    });
  };

  useEffect(() => {
    handleClick();
  }, []);

  useEffect(() => {}, [apiData, loading]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Galeria")}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={
              apiData ? { uri: apiData } : require("../../../assets/poli.png")
            }
            resizeMode="contain"
            onLoadEnd={() => setLoading(false)}
          />
        </View>
      </TouchableOpacity>
      {loading && <ActivityIndicator size="large" color="#131418" />}
      <View style={styles.btnContainer}>
        <Button
          title="Veja outra oferta"
          color="#131418"
          onPress={handleClick}
          disabled={loading}
        />
      </View>
    </View>
  );
}
