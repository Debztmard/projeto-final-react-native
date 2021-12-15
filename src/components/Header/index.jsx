import React, { useState } from "react";
import { View, Image, Animated, TextInput } from "react-native";
import { styles } from "./styles";
import poli from "../../../assets/poli.png";
import iconLogin from "../../../assets/icon-login.png";
import iconLupa from "../../../assets/icon-lupa.png";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Header() {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  return (
    <View style={styles.back}>
      <Animated.View style={styles.header}>
        <Animated.Image
          source={poli}
          style={{
            width: scrollY.interpolate({
              inputRange: [0, 120],
              outputRange: [230, 90],
              extrapolate: "clamp",
            }),
            height: 40,
          }}
          resizeMode="contain"
        />
        <Ionicons name="person-circle-outline" size={45} />
        {/* <Image
          source={iconLogin}
          style={styles.imgLogin}
          resizeMode="contain"
        /> */}
      </Animated.View>
      <View style={styles.pesquisa}>        
        <Ionicons name="search" style={styles.imgLupa} size={30} />
        <TextInput
          style={styles.textInput}
          placeholder={"Pesquise aqui seus produtos..."}
        />
      </View>
    </View>
  );
}
