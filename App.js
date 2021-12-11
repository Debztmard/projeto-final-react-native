import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native"; //navigation container engloba tudo
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "./src/Pages/Home";
import Login from "./src/Pages/Login";
import Galeria from "./src/Pages/Galeria";
import Carrinho from "./src/Pages/Carrinho";
import Detalhes from "./src/Pages/Detalhes";
import AppLoading from "expo-app-loading";

const Tab = createBottomTabNavigator();

export default function App() {
  const [fonteCarregada] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  if (!fonteCarregada) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#ffa29c" barStyle="light-content" />
      <Tab.Navigator
        initialRouteName="Login"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Galeria") {
              iconName = focused ? "albums" : "albums-outline";
            } else if (route.name === "Detalhes") {
              iconName = focused
                ? "ellipsis-horizontal-circle-sharp"
                : "ellipsis-horizontal-circle-outline";
            } else if (route.name === "Carrinho") {
              iconName = focused ? "cart" : "cart-outline";
            } else if (route.name === "Login") {
              iconName = focused ? "person" : "person-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#0433FF",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Galeria" component={Galeria} />
        <Tab.Screen name="Detalhes" component={Detalhes} />
        <Tab.Screen name="Carrinho" component={Carrinho} />
        <Tab.Screen name="Login" component={Login} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
