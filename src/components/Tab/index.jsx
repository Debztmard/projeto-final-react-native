import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "../../Pages/Home";
import Login from "../../Pages/Login";
import Galeria from "../../Pages/Galeria";
import Carrinho from "../../Pages/Carrinho";
import Detalhes from "../../Pages/Detalhes";

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
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
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Galeria" component={Galeria} />
      <Tab.Screen name="Detalhes" component={Detalhes} />
      <Tab.Screen name="Carrinho" component={Carrinho} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
}
