import React from "react";
import { StyleSheet } from "react-native";
import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import { NavigationContainer } from "@react-navigation/native"; //navigation container engloba tudo
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Login"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "home"
                : "home-outline"; 
            } else if (route.name === "Galeria") {
              iconName = focused ? "ios-list" : "ios-list";
            }else if (route.name === "Detalhes") {
              iconName = focused ? "ios-list" : "ios-list";
            }else if (route.name === "Carrinho") {
              iconName = focused ? "ios-list" : "ios-list";
            }else if (route.name === "Login") {
              iconName = focused ? "ios-list" : "ios-list";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#0433FF",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Home" component={Home} />
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
