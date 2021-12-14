import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import Header from "./src/components/Header";
import Tab from "./src/components/Tab";
import { createTable } from "./src/repository/cadastroRepository";

export default function App() {
  const [fonteCarregada] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });
  useEffect(async () => {
    createTable();
  }, []);

  if (!fonteCarregada) {
    return <AppLoading />;
  };


  return (
    <NavigationContainer>
      <Header/>
      <StatusBar backgroundColor="#000000" barStyle="light-content"/>
      <Tab />
    </NavigationContainer>
  );
}

