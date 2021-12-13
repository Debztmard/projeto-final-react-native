import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Image, ActivityIndicator } from 'react-native';
import axios from 'axios';
//import {styles} from "./styles";

export default function Oferta() {
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  var numAleatorio = (Math.floor(Math.random()*10));
  
  const handleClick = async () => {
  
    setLoading(true)

    await axios({
      method: "GET",
      url: "https://api-nossa-loja.herokuapp.com/produtos",
      responseType: "json",
    }).then((response) => {
      
      setApiData(response.data[numAleatorio].imagens, response.data[numAleatorio].nome);
 
  });
  
};

useEffect(() => {
  handleClick();

}, []);

useEffect(() => {
  
}, [apiData, loading]);

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
      <Image 
      style={styles.img}
      source={apiData ? { uri: apiData} : require("../../../assets/logo.png")} 
      resizeMode="contain"
      onLoadEnd={() => setLoading(false)}
      />
      </View>
      {loading && <ActivityIndicator size="large" color="blue" />}
      <View style={styles.btnContainer}>
        
        <Button 
        title="Veja outra oferta" 
        onPress={handleClick}
        disabled={loading} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer:{
    flex:3,
  },
  btnContainer:{
    flex:1,
    justifyContent: 'center',
  },
  img:{
    width:400,
    height:250,
  },
});

