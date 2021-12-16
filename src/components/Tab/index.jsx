import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "../../Pages/Home";
import Login from "../../Pages/Login";
import Galeria from "../../Pages/Galeria";
import Carrinho from "../../Pages/Carrinho";
import Detalhes from "../../Pages/Detalhes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CadastroUsuario from "../../Pages/CadastrarUsuario";
import MinhaConta from "../../Pages/MinhaConta";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function StackGaleria() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="StackGaleria"
        component={Galeria}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Detalhes"
        component={Detalhes}
      />
    </Stack.Navigator>
  );
}

export default function StackLogin() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="StackLogin"
        component={Login}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="CadastroUsuario"
        component={CadastroUsuario}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Main"
        component={TabNav}
      />
    </Stack.Navigator>
  );
}

function TabNav() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Galeria") {
            iconName = focused ? "albums" : "albums-outline";
          } else if (route.name === "Carrinho") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Minha Conta") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#131418",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Galeria" component={StackGaleria} />
      <Tab.Screen name="Carrinho" component={Carrinho} />
      <Tab.Screen name="Minha Conta" component={MinhaConta} />
    </Tab.Navigator>
  );
}
