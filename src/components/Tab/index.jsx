import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "../../Pages/Home";
import Login from "../../Pages/Login";
import Galeria from "../../Pages/Galeria";
import Carrinho from "../../Pages/Carrinho";
import Detalhes from "../../Pages/Detalhes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function StackGaleria(){
  return (
    <Stack.Navigator>
      <Stack.Screen  options={{headerShown: false}} name="StackGaleria" component={Galeria} />
      <Stack.Screen  options={{headerShown: false}} name="Detalhes" component={Detalhes} />
    </Stack.Navigator>
  )
}

export default function TabNav() {
  return (
      
    <Tab.Navigator
      initialRouteName='Login'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Galeria") {
            iconName = focused ? "albums" : "albums-outline";
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
      })}>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Galeria' component={StackGaleria} />
      <Tab.Screen name='Carrinho' component={Carrinho} />
      <Tab.Screen name='Login' component={Login} /> 
      
    </Tab.Navigator>
    
  );
}